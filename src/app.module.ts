import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { InstitutionModule } from './institution/institution.module';
import { FacilityModule } from './facility/facility.module';
import { BookingModule } from './booking/booking.module';
import { UserBookingModule } from './user-booking/user-booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: `${__dirname}/config/envs/.env`,
      isGlobal: true
    }), 
    DatabaseModule,
    UserModule, 
    AuthModule,
    InstitutionModule,
    FacilityModule,
    BookingModule,
    UserBookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}