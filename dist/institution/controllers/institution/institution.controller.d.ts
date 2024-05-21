import { CreateInstitutionDetails, UpdateInstitutionDetails } from 'src/institution/dto/institution.dto';
import Institution from 'src/institution/entities/institution.entity';
import { InstitutionService } from 'src/institution/services/institution/institution.service';
export declare class InstitutionController {
    private service;
    constructor(service: InstitutionService);
    getAllInstitution(): Promise<Institution[]>;
    createInstitution(payload: CreateInstitutionDetails): Promise<Institution>;
    deleteInstitution(id: number): Promise<boolean>;
    getInstitutionById(id: number): Promise<Institution>;
    put(id: number, payload: UpdateInstitutionDetails): Promise<Institution>;
    patch(id: number, payload: UpdateInstitutionDetails): Promise<Institution>;
    update(id: number, payload: UpdateInstitutionDetails): Promise<Institution>;
}
