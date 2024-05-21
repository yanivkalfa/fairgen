import { Module } from '@nestjs/common';
import { FacilityController } from './controllers/facility/facilities.controller';
import { FacilityService } from './services/facility/facility.service';
import { FacilityProvider } from './providers/facilities/facility';

@Module({
  controllers: [FacilityController],
  providers: [
    FacilityService, 
    ...FacilityProvider
  ],
  exports: [
    FacilityService,
    ...FacilityProvider
  ]
})
export class FacilityModule {}
