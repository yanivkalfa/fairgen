import { Model } from 'sequelize-typescript';
import { UserTypes, RoleTypes } from 'src/config/consts';
import Institution from 'src/institution/entities/institution.entity';
import Booking from 'src/booking/entities/booking.entity';
export default class User extends Model {
    InstitutionId: number;
    institution: Institution;
    bookings: Booking[];
    ownBookings: Booking[];
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: UserTypes;
    role: RoleTypes;
    getClean(removeFields?: string[]): Partial<User>;
    isAdmin(): boolean;
    isManager(): boolean;
    isCleaner(): boolean;
}
