import UserBooking from 'src/user-booking/entities/user-booking.entity';
import { USER_BOOKING_REPOSITORY } from 'src/config/consts';

export const UserBookingProvider = [
  {
    provide: USER_BOOKING_REPOSITORY,
    useValue: UserBooking,
  },
];