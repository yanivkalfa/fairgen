import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { 
  CreateBookingDetails,
  UpdateBookingDetails
} from 'src/booking/dto/booking.dto';
import Booking from 'src/booking/entities/booking.entity';
import { BOOKING_REPOSITORY } from 'src/config/consts';


@Injectable()
export class BookingService {
  constructor(
    @Inject(BOOKING_REPOSITORY) private repository: typeof Booking
  ) { }

  async getLast(ownerId: number, fromDate: Date): Promise<Booking> {
    return await this.repository.findOne({ 
      where: { 
        ownerId,
        toDate: {
          [Op.lte]: fromDate
        }
      },
      order: [['toDate', 'DESC']]
    });
  }

  async getById(id: number, ownerId: number, isAdmin: boolean): Promise<Booking> {
    let options: any = {
      where: {
        id:id
      }
    };
    if (!isAdmin) {
      options.where.ownerId = ownerId;
    }
    return await this.repository.findOne(options);
  }
  
  async getMy(ownerId: number): Promise<Booking[]> {
    return await this.repository.findAll({ where: {ownerId}});
  }

  async getAll(ownerId: number, isAdmin: boolean): Promise<Booking[]> {
    let options: any = {
      where: {}
    };
    if (!isAdmin) {
      options.where.ownerId = ownerId;
    }
    return await this.repository.findAll(options);
  }

  async create(payload: Partial<CreateBookingDetails>): Promise<Booking> {
    return await this.repository.create(payload);
  }

  async delete(id: number, ownerId: number, isAdmin: boolean): Promise<boolean> {
    let options: any = {
      where: {
        id
      }
    };
    if (!isAdmin) {
      options.where.ownerId = ownerId;
    }
    await this.repository.destroy(options);
    return true;
  }

  async update(id: number, ownerId: number, isAdmin: boolean, payload: Partial<UpdateBookingDetails>): Promise<Booking> {
    let booking = await this.getById(id, ownerId, isAdmin);
    return booking?.update(payload);
  }
}
