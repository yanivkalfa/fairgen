import { Request } from 'express';
import { CreateBookingDetails } from 'src/booking/dto/booking.dto';
import Booking from 'src/booking/entities/booking.entity';
import { BookingService } from 'src/booking/services/booking/booking.service';
import User from 'src/user/entities/user.entity';
import { FacilityService } from 'src/facility/services/facility/facility.service';
import { Location } from 'src/facility/dto/facility.dto';
import Facility from 'src/facility/entities/facility.entity';
import { UserBookingService } from 'src/user-booking/services/user-booking/user-booking.service';
export declare class BookingController {
    private facilityService;
    private userBookingService;
    private service;
    constructor(facilityService: FacilityService, userBookingService: UserBookingService, service: BookingService);
    getMy(req: Request & {
        user: User;
    }): Promise<Booking[]>;
    getAllBooking(req: Request & {
        user: User;
    }): Promise<Booking[]>;
    calculateDistance(pA: Location, pB: Location): number;
    sortByDistance(location: Location): (facilityA: Facility, facilityB: Facility) => 0 | 1 | -1;
    createBooking(payload: CreateBookingDetails, user: User): Promise<Booking>;
    create(payload: CreateBookingDetails, req: Request & {
        user: User;
    }): Promise<Booking>;
    delete(id: number, req: Request & {
        user: User;
    }): Promise<boolean>;
    getById(id: number, req: Request & {
        user: User;
    }): Promise<Booking>;
    createUserBooking(id: number, req: Request & {
        user: User;
    }): Promise<string>;
}
