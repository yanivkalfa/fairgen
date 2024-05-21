import { 
  Table, Column, Model, DataType, PrimaryKey, 
  AutoIncrement, ForeignKey, BelongsTo, HasMany, 
  AllowNull
} from 'sequelize-typescript';
import { facilityType } from 'src/config/consts';
import { omit } from 'lodash';
import Institution from 'src/institution/entities/institution.entity';
import Booking from 'src/booking/entities/booking.entity';
import { Location } from '../dto/facility.dto';

@Table
export default class Facility extends Model {
  @ForeignKey(() => Institution)
  @Column
  //@Column({ allowNull: false })
  InstitutionId: number;

  @BelongsTo(() => Institution)
  institution: Institution;

  @HasMany(() => Booking)
  bookings: Booking[];

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string

  @Column
  capacity: number;

  @AllowNull
  @Column(DataType.JSON)
  amenities: string[];

  @Column({
    type: DataType.JSONB,
    defaultValue: { x: 0, y: 0}
  })
  location: Location

  @Column({
    type: DataType.ENUM,
    values: Object.values(facilityType),
    defaultValue: facilityType.CLASSROOM,
  })
  type: facilityType;

  getClean(removeFields: string[] = ['password']): Partial<Facility> {
    return omit(this.dataValues, removeFields);
  }
}