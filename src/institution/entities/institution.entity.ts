import { 
  Table, Column, Model, DataType, PrimaryKey, AutoIncrement, 
  HasMany 
} from 'sequelize-typescript';
import User from 'src/user/entities/user.entity';
import { institutionType } from 'src/config/consts';
import _ from 'lodash';
import Facility from 'src/facility/entities/facility.entity';


@Table
export default class Institution extends Model {
  @HasMany(() => User)
  users: User[];

  @HasMany(() => Facility)
  facilities: Facility[];

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(institutionType),
    defaultValue: institutionType.UNIVERSITY,
  })
  type: institutionType;
}