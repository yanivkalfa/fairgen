import { Module } from '@nestjs/common';
import { InstitutionController } from './controllers/institution/institution.controller';
import { InstitutionService } from './services/institution/institution.service';
import { InstitutionProvider } from './providers/institution/institution';

@Module({
  controllers: [InstitutionController],
  providers: [
    InstitutionService, 
    ...InstitutionProvider
  ],
  exports: [
    InstitutionService,
    ...InstitutionProvider
  ]
})
export class InstitutionModule {}
