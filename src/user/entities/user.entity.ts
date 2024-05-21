import { 
  Table, Column, Model, DataType, PrimaryKey, AutoIncrement, 
  Unique, IsEmail, AllowNull, ForeignKey, BelongsTo, BelongsToMany, 
  HasMany
} from 'sequelize-typescript';
import { UserTypes, RoleTypes } from 'src/config/consts';
import { omit } from 'lodash';
import Institution from 'src/institution/entities/institution.entity';
import Booking from 'src/booking/entities/booking.entity';
import UserBooking from 'src/user-booking/entities/user-booking.entity';

@Table
export default class User extends Model {
  @ForeignKey(() => Institution)
  @Column
  InstitutionId: number;

  @BelongsTo(() => Institution)
  institution: Institution;

  @BelongsToMany(() => Booking, () => UserBooking)
  bookings: Booking[];

  @HasMany(() => Booking, 'ownerId')
  ownBookings: Booking[];
  
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull
  @Column
  firstName: string;

  @AllowNull
  @Column
  lastName: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  @Column
  password: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(UserTypes),
    defaultValue: UserTypes.STUDENT,
  })
  userType: UserTypes;

  @Column({
    type: DataType.ENUM,
    values: Object.values(RoleTypes),
    defaultValue: RoleTypes.USER,
  })
  role: RoleTypes;

  getClean(removeFields: string[] = ['password']): Partial<User> {
    return omit(this.dataValues, removeFields);
  }

  isAdmin():boolean {
    return this.dataValues.role === RoleTypes.ADMIN;
  }

  isManager(): boolean {
    return this.dataValues.role === RoleTypes.MANAGER;
  }

  isCleaner(): boolean {
    return this.dataValues.userType === UserTypes.CLEANER;
  }
}