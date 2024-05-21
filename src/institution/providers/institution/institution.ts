import Institution from 'src/institution/entities/institution.entity';
import { INSTITUTION_REPOSITORY } from 'src/config/consts';

export const InstitutionProvider = [
  {
    provide: INSTITUTION_REPOSITORY,
    useValue: Institution,
  },
];