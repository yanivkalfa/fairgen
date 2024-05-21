import Booking from 'src/booking/entities/booking.entity';
import { BOOKING_REPOSITORY } from 'src/config/consts';

export const BookingProvider = [
  {
    provide: BOOKING_REPOSITORY,
    useValue: Booking,
  },
];