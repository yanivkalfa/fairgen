import { institutionType } from 'src/config/consts';
export declare class CreateInstitutionDetails {
    name: string;
    type: institutionType;
}
export declare class UpdateInstitutionDetails {
    name?: string;
    type?: institutionType;
}
