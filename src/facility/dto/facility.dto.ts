import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { facilityType } from 'src/config/consts';

export class Location {
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;
}

export class CreateFacilityDetails {  
  @IsNumber()
  InstitutionId: number;

  @IsString()
  name: string

  @IsNumber()
  capacity: number;

  @IsArray()
  amenities: string[];

  @IsString()
  type: facilityType;

  @ValidateNested()
  @Type(() => Location)
  location: Location;

}

export class UpdateFacilityDetails {
  @IsString()
  @IsOptional()
  name?: string

  @IsNumber()
  @IsOptional()
  capacity?: number;

  @IsArray()
  @IsOptional()
  amenities?: string[];

  @IsString()
  @IsOptional()
  type?: facilityType;

  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  location?: Location;
}


