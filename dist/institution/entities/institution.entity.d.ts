import { Model } from 'sequelize-typescript';
import User from 'src/user/entities/user.entity';
import { institutionType } from 'src/config/consts';
import Facility from 'src/facility/entities/facility.entity';
export default class Institution extends Model {
    users: User[];
    facilities: Facility[];
    id: number;
    name: string;
    type: institutionType;
}
