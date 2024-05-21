import { CreateInstitutionDetails, UpdateInstitutionDetails } from 'src/institution/dto/institution.dto';
import Institution from 'src/institution/entities/institution.entity';
export declare class InstitutionService {
    private repository;
    constructor(repository: typeof Institution);
    getById(id: number): Promise<Institution>;
    getAll(): Promise<Institution[]>;
    create(payload: Partial<CreateInstitutionDetails>): Promise<Institution>;
    delete(id: number): Promise<boolean>;
    update(id: number, payload: Partial<UpdateInstitutionDetails>): Promise<Institution>;
}
