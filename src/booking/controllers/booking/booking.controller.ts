import { 
  Body, Controller, Delete, Get, HttpException, HttpStatus, 
  Param, ParseIntPipe, Patch, Post, Put, Req, UseGuards, 
  UsePipes, ValidationPipe 
} from '@nestjs/common';
import { Request } from 'express';
import { HasRole } from 'src/auth/decorators/hasRole.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { 
  CreateBookingDetails, 
  UpdateBookingDetails 
} from 'src/booking/dto/booking.dto';
import Booking from 'src/booking/entities/booking.entity';
import { BookingService } from 'src/booking/services/booking/booking.service';
import User from 'src/user/entities/user.entity';
import { RoleTypes, UserBookingStatus } from 'src/config/consts';
import { ValidateBookingPipe } from 'src/booking/pipes/booking/validate-booking.pipe';
import { FacilityService } from 'src/facility/services/facility/facility.service';
import { Location } from 'src/facility/dto/facility.dto';
import Facility from 'src/facility/entities/facility.entity';
import { UserBookingService } from 'src/user-booking/services/user-booking/user-booking.service';
import UserBooking from 'src/user-booking/entities/user-booking.entity';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('booking')
export class BookingController {
  constructor(
    private facilityService: FacilityService,
    private userBookingService: UserBookingService,
    private service: BookingService,
  ) { }

  @Get('/my')
  async getMy(@Req() req: Request & { user: User }): Promise<Booking[]> {
    return this.service.getMy(req.user.id);
  }

  @Get('/all')
  async getAllBooking(@Req() req: Request & { user: User }): Promise<Booking[]> {
    return this.service.getAll(req.user.id, req.user.isAdmin());
  }

  calculateDistance(pA: Location, pB: Location) {
    const deltaX = pB.x - pA.x;
    const deltaY = pB.y - pA.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }

  sortByDistance(location: Location) {
    return (facilityA: Facility, facilityB: Facility) => {
      let dsA = this.calculateDistance(location, facilityA.dataValues.location);
      let dsb = this.calculateDistance(location, facilityB.dataValues.location);
      if (dsA > dsb) {
        return -1;
      }

      if (dsA > dsb) {
        return 1;
      }

      return 0;
    }
  }

  async createBooking(payload: CreateBookingDetails, user: User): Promise<Booking> {
    let lastBooking = await this.service.getLast(user.id, payload.fromDate);
    let location = {x:0,y:0};
    if (lastBooking) {
      let bookingFacility = await lastBooking.$get('facility');
      location = bookingFacility.dataValues.location;
    }

    let isCleaner = user.isCleaner();
    payload.isPrivate = isCleaner;
    let availableFaciltieis = await this.facilityService.getAvailable(payload);
    if (!availableFaciltieis.length) {
      throw new HttpException('No available slots', HttpStatus.NOT_FOUND);
    }

    let lowestCapacity = availableFaciltieis[0].dataValues.capacity;
    let selectedFacility = availableFaciltieis
    .filter(({ dataValues }) => dataValues.capacity === lowestCapacity)
      .sort(this.sortByDistance(location))[0].dataValues;

    let bookingData: Partial<Booking> = {
      ...payload,
      ownerId: user.id,
      facilityId: selectedFacility.id
    }
    let booking = await this.service.create(bookingData);
    
    if (!booking.dataValues.isPrivate) {
      let userBookings: Partial<UserBooking>[] = [];
      let l = selectedFacility.capacity;
      let i = 0;
      for (i; i < l; i++) {
        userBookings.push({
          bookingId: booking.dataValues.id,
          status: UserBookingStatus.FREE
        });
      }
      await this.userBookingService.createBulk(userBookings);
    }

    return booking;
  }


  @HasRole([RoleTypes.ADMIN, RoleTypes.MANAGER])
  @Post('/create')
  @UsePipes(ValidateBookingPipe, new ValidationPipe({ whitelist: true }))
  async create(@Body() payload: CreateBookingDetails, @Req() req: Request & { user: User }): Promise<Booking>{
    try { 
      return await this.createBooking(payload, req.user);
    } catch(err) {
      console.log(err);
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST)
    }
  }

  @Delete('/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request & { user: User }
  ): Promise<boolean> {
    return this.service.delete(id, req.user.id, req.user.isAdmin());
  }

  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number, @Req() req: Request & { user: User }): Promise<Booking> {
    return this.service.getById(id, req.user.id, req.user.isAdmin());
  }

  @Post('/:id/join')
  async createUserBooking(@Param('id', ParseIntPipe) id: number, @Req() req: Request & { user: User }): Promise<string> {
    await this.userBookingService.useUserBooking(id, req.user.id);
    return 'success';
  }

}



