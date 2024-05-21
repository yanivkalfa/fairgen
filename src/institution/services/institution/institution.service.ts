import { Inject, Injectable } from '@nestjs/common';
import { INSTITUTION_REPOSITORY } from 'src/config/consts';
import { 
  CreateInstitutionDetails,
  UpdateInstitutionDetails
} from 'src/institution/dto/institution.dto';
import Institution from 'src/institution/entities/institution.entity';

@Injectable()
export class InstitutionService {
  constructor(
    @Inject(INSTITUTION_REPOSITORY) private repository: typeof Institution
  ) { }

  async getById(id: number): Promise<Institution> {
    return await this.repository.findOne({ where: { id } });
  }

  async getAll(): Promise<Institution[]> {
    return await this.repository.findAll();
  }

  async create(payload: Partial<CreateInstitutionDetails>): Promise<Institution> {
    return await this.repository.create(payload);
  }

  async delete(id: number): Promise<boolean> {
    await this.repository.destroy({ where: { id } });
    return true;
  }

  async update(id: number, payload: Partial<UpdateInstitutionDetails>): Promise<Institution> {
    let Institution = await this.getById(id);
    return Institution?.update(payload);
  }
}
