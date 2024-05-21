import { Model } from 'sequelize-typescript';
import { facilityType } from 'src/config/consts';
import Institution from 'src/institution/entities/institution.entity';
import Booking from 'src/booking/entities/booking.entity';
import { Location } from '../dto/facility.dto';
export default class Facility extends Model {
    InstitutionId: number;
    institution: Institution;
    bookings: Booking[];
    id: number;
    name: string;
    capacity: number;
    amenities: string[];
    location: Location;
    type: facilityType;
    getClean(removeFields?: string[]): Partial<Facility>;
}
