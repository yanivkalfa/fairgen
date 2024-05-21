import { Module } from '@nestjs/common';
import { BookingProvider } from './providers/booking/booking';
import { BookingController } from './controllers/booking/booking.controller';
import { BookingService } from './services/booking/booking.service';
import { FacilityModule } from 'src/facility/facility.module';
import { UserBookingModule } from 'src/user-booking/user-booking.module';

@Module({
  imports:[
    FacilityModule,
    UserBookingModule
  ],
  controllers: [BookingController],
  providers: [
    BookingService, 
    ...BookingProvider
  ],
  exports: [
    BookingService,
    ...BookingProvider
  ]
  
})
export class BookingModule {}
