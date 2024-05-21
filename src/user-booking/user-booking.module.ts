import { Module } from '@nestjs/common';
import { UserBookingController } from './controllers/user-booking/user-booking.controller';
import { UserBookingService } from './services/user-booking/user-booking.service';
import { UserBookingProvider } from './providers/user-booking/user-booking';
import { databaseProviders } from 'src/database/providers/database.provider';

@Module({
  controllers: [UserBookingController],
  providers: [
    UserBookingService,
    ...UserBookingProvider,
    ...databaseProviders
  ],
  exports: [
    UserBookingService,
    ...UserBookingProvider
  ]
})
export class UserBookingModule {}
