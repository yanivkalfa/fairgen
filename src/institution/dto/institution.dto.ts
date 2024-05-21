import { IsOptional, IsNumber, IsString } from 'class-validator';
import { institutionType } from 'src/config/consts';

export class CreateInstitutionDetails {

  @IsString()
  name: string;

  @IsString()
  type: institutionType;
}

export class UpdateInstitutionDetails {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  type?: institutionType;
}


