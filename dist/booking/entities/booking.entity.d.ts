import { Model } from 'sequelize-typescript';
import Facility from 'src/facility/entities/facility.entity';
import User from 'src/user/entities/user.entity';
export default class Booking extends Model {
    facilityId: number;
    facility: Facility;
    ownerId: number;
    owner: User;
    users: User[];
    id: number;
    fromDate: Date;
    toDate: Date;
    isPrivate: boolean;
    getClean(removeFields?: string[]): Partial<Booking>;
}
