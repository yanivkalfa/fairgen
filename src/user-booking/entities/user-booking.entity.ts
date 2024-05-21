import { 
  Table, Column, Model, DataType, 
  PrimaryKey, AutoIncrement, ForeignKey, 
  BelongsTo
} from 'sequelize-typescript';
import { UserBookingStatus } from 'src/config/consts';
import { omit } from 'lodash';
import User from 'src/user/entities/user.entity';
import Booking from 'src/booking/entities/booking.entity';

@Table
export default class UserBooking extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Booking)
  @Column
  bookingId: number;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  user: User;

  @BelongsTo(() => Booking, {
    onDelete: 'CASCADE',
  })
  booking: Booking;

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({
    type: DataType.ENUM,
    values: Object.values(UserBookingStatus),
    defaultValue: UserBookingStatus.FREE,
  })
  status: UserBookingStatus;

  getClean(removeFields: string[] = ['password']): Partial<UserBooking> {
    return omit(this.dataValues, removeFields);
  }
}