import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserBookingService } from 'src/user-booking/services/user-booking/user-booking.service';

@Controller('user-booking')
export class UserBookingController {
  constructor(private UserBookingService: UserBookingService) { }

}
