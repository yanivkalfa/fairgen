import { 
  Body, Controller, Delete, Get, Param, ParseIntPipe, 
  Patch, Post, Put, Req, UseGuards, UsePipes, ValidationPipe 
} from '@nestjs/common';
import { HasRole } from 'src/auth/decorators/hasRole.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RoleTypes } from 'src/config/consts';
import { 
  CreateFacilityDetails, 
  UpdateFacilityDetails 
} from 'src/facility/dto/facility.dto';
import Facility from 'src/facility/entities/facility.entity';
import { FacilityService } from 'src/facility/services/facility/facility.service';


@HasRole([RoleTypes.ADMIN, RoleTypes.MANAGER])
@UseGuards(JwtAuthGuard, RolesGuard)
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('facility')
export class FacilityController {
  constructor(private service: FacilityService) { }

  
  @HasRole(null)
  @Get('/all')
  @UsePipes(new ValidationPipe())
  async getAll(): Promise<Facility[]> {
    return this.service.getAll();
  }

  @Post('/create')
  async create(@Body() payload: CreateFacilityDetails): Promise<Facility> {
    return await this.service.create(payload);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.service.delete(id);
  }

  @HasRole(null)
  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Facility> {
    return this.service.getById(id);
  }

  @Put('/:id')
  put(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateFacilityDetails
  ): Promise<Facility> {
    return this.update(id, payload);
  }

  @Patch('/:id')
  patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateFacilityDetails
  ): Promise<Facility> {
    return this.update(id, payload);
  }

  update(id: number, payload: UpdateFacilityDetails): Promise<Facility> {
    return this.service.update(id, payload);
  }
}