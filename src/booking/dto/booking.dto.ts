import { IsArray, IsBoolean, IsDate, IsNumber, IsOptional} from 'class-validator';

export class CreateBookingDetails {  
  @IsNumber()
  @IsOptional()
  capacity?: number

  @IsArray()
  amenities: string[];


  @IsDate()
  fromDate: Date

  @IsDate()
  toDate: Date

  @IsBoolean()
  @IsOptional()
  isPrivate?: boolean 
}

export class UpdateBookingDetails {
  @IsNumber()
  @IsOptional()
  capacity?: number

  @IsArray()
  @IsOptional()
  amenities?: string[];

  @IsDate()
  @IsOptional()
  fromDate?: Date

  @IsDate()
  @IsOptional()
  toDate?: Date

  @IsBoolean()
  @IsOptional()
  isPrivate?: boolean
}


