import { 
  Table, Column, Model, PrimaryKey, AutoIncrement, 
  ForeignKey, BelongsTo, BelongsToMany, IsDate 
} from 'sequelize-typescript';
import { omit } from 'lodash';
import Facility from 'src/facility/entities/facility.entity';
import User from 'src/user/entities/user.entity';
import UserBooking from 'src/user-booking/entities/user-booking.entity';

@Table
export default class Booking extends Model {
  @ForeignKey(() => Facility)
  @Column({ allowNull: false })
  facilityId: number;

  @BelongsTo(() => Facility)
  facility: Facility;


  @ForeignKey(() => User)
  @Column({ allowNull: false })
  ownerId: number;

  @BelongsTo(() => User, 'ownerId')
  owner: User;

  @BelongsToMany(() => User, () => UserBooking)
  users: User[];

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @IsDate
  @Column
  fromDate: Date

  @IsDate
  @Column
  toDate: Date

  @Column
  isPrivate: boolean // incase janitor books it for cleaning

  getClean(removeFields: string[] = ['password']): Partial<Booking> {
    return omit(this.dataValues, removeFields);
  }
}