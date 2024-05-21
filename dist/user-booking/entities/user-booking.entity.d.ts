import { Model } from 'sequelize-typescript';
import { UserBookingStatus } from 'src/config/consts';
import User from 'src/user/entities/user.entity';
import Booking from 'src/booking/entities/booking.entity';
export default class UserBooking extends Model {
    userId: number;
    bookingId: number;
    user: User;
    booking: Booking;
    id: number;
    status: UserBookingStatus;
    getClean(removeFields?: string[]): Partial<UserBooking>;
}
