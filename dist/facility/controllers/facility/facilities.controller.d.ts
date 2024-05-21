import { CreateFacilityDetails, UpdateFacilityDetails } from 'src/facility/dto/facility.dto';
import Facility from 'src/facility/entities/facility.entity';
import { FacilityService } from 'src/facility/services/facility/facility.service';
export declare class FacilityController {
    private service;
    constructor(service: FacilityService);
    getAll(): Promise<Facility[]>;
    create(payload: CreateFacilityDetails): Promise<Facility>;
    delete(id: number): Promise<boolean>;
    getById(id: number): Promise<Facility>;
    put(id: number, payload: UpdateFacilityDetails): Promise<Facility>;
    patch(id: number, payload: UpdateFacilityDetails): Promise<Facility>;
    update(id: number, payload: UpdateFacilityDetails): Promise<Facility>;
}
