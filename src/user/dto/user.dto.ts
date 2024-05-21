import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserTypes, RoleTypes } from 'src/config/consts';

export class UserDetails {
  id?: number;
  firstName?: string;
  lastName?: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  userType?: UserTypes;
  role?: RoleTypes;
  createdAt?: Date;
  updatedAt?: Date;
}


