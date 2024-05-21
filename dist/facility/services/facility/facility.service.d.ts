import { CreateBookingDetails } from 'src/booking/dto/booking.dto';
import { CreateFacilityDetails, UpdateFacilityDetails } from 'src/facility/dto/facility.dto';
import Facility from 'src/facility/entities/facility.entity';
export declare class FacilityService {
    private repository;
    constructor(repository: typeof Facility);
    getById(id: number): Promise<Facility>;
    getAll(): Promise<Facility[]>;
    create(payload: Partial<CreateFacilityDetails>): Promise<Facility>;
    delete(id: number): Promise<boolean>;
    update(id: number, payload: UpdateFacilityDetails): Promise<Facility>;
    getAvailable({ fromDate, toDate, capacity, isPrivate, amenities }: Partial<CreateBookingDetails>): Promise<Facility[]>;
}
