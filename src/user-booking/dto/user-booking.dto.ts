import { IsNumber, IsString } from 'class-validator';
import { UserBookingStatus } from 'src/config/consts';

export class CreateUserBookingDetails {
  @IsNumber()
  userId: number;
  @IsNumber()
  bookingId: number;
  @IsString()
  status: UserBookingStatus;
}