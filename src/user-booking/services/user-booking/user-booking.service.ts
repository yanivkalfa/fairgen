import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserBookingDetails } from 'src/user-booking/dto/user-booking.dto';
import UserBooking from 'src/user-booking/entities/user-booking.entity';
import { SEQUELIZE, USER_BOOKING_REPOSITORY, UserBookingStatus } from 'src/config/consts';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UserBookingService {
  constructor(
    @Inject(SEQUELIZE) private sequelize: Sequelize,
    @Inject(USER_BOOKING_REPOSITORY) private repository: typeof UserBooking
  ) { }

  async useUserBooking(id: number, userId: number): Promise<boolean> {
    const transaction = await this.sequelize.transaction();
    try {
      let userBooking = await this.repository.findOne({
        where: {
          bookingId: id,
          status: UserBookingStatus.FREE
        },
        lock: transaction.LOCK.UPDATE,
        transaction: transaction
      });
      if (!userBooking) {
        throw new HttpException('No Such Booking', HttpStatus.NOT_FOUND);
      } 

      userBooking.userId = userId;
      userBooking.status = UserBookingStatus.USED;
      await userBooking.save({ transaction });
      await transaction.commit();
      return true;
    } catch (error) {
      await transaction.rollback();
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async createBulk(payload: Partial<CreateUserBookingDetails>[]): Promise<UserBooking[]> {
    return this.repository.bulkCreate(payload);
  }

  async deleteBulk(bookingId: number): Promise<boolean> {
    await this.repository.destroy({where: {bookingId}});
    return true;
  }
}