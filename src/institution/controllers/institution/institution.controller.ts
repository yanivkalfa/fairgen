import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { HasRole } from 'src/auth/decorators/hasRole.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RoleTypes } from 'src/config/consts';
import { 
  CreateInstitutionDetails,
  UpdateInstitutionDetails
 } from 'src/institution/dto/institution.dto';
import Institution from 'src/institution/entities/institution.entity';
import { InstitutionService } from 'src/institution/services/institution/institution.service';

@HasRole([RoleTypes.ADMIN])
@UseGuards(JwtAuthGuard, RolesGuard)
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('institution')
export class InstitutionController {
  constructor(private service: InstitutionService) { }

  @Get('/all')
  @UsePipes(new ValidationPipe())
  async getAllInstitution(): Promise<Institution[]> {
    return this.service.getAll();
  }

  @Post('/create')
  async createInstitution(@Body() payload: CreateInstitutionDetails): Promise<Institution> {
    return await this.service.create(payload);
  }

  @Delete('/:id')
  async deleteInstitution(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.service.delete(id);
  }

  @Get('/:id')
  async getInstitutionById(@Param('id', ParseIntPipe) id: number): Promise<Institution> {
    return this.service.getById(id);
  }

  @Put('/:id')
  put(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateInstitutionDetails
  ): Promise<Institution> {
    return this.update(id, payload);
  }

  @Patch('/:id')
  patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateInstitutionDetails
  ): Promise<Institution> {
    return this.update(id, payload);
  }

  update(id: number, payload: UpdateInstitutionDetails): Promise<Institution> {
    return this.service.update(id, payload);
  }
}
