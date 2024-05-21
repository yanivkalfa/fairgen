import { facilityType } from 'src/config/consts';
export declare class Location {
    x: number;
    y: number;
}
export declare class CreateFacilityDetails {
    InstitutionId: number;
    name: string;
    capacity: number;
    amenities: string[];
    type: facilityType;
    location: Location;
}
export declare class UpdateFacilityDetails {
    name?: string;
    capacity?: number;
    amenities?: string[];
    type?: facilityType;
    location?: Location;
}
