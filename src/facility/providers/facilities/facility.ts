import { FACILITY_REPOSITORY } from 'src/config/consts';
import Facility from 'src/facility/entities/facility.entity';

export const FacilityProvider = [
  {
    provide: FACILITY_REPOSITORY,
    useValue: Facility,
  },
];