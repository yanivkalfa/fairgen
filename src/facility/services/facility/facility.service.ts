import { Inject, Injectable } from '@nestjs/common';
import { Op, literal } from 'sequelize';
import { CreateBookingDetails } from 'src/booking/dto/booking.dto';
import Booking from 'src/booking/entities/booking.entity';
import { FACILITY_REPOSITORY } from 'src/config/consts';
import { CreateFacilityDetails, UpdateFacilityDetails } from 'src/facility/dto/facility.dto';
import Facility from 'src/facility/entities/facility.entity';

@Injectable()
export class FacilityService {
  constructor( 
    @Inject(FACILITY_REPOSITORY) private repository: typeof Facility
  ) { }

  async getById(id: number): Promise<Facility> {
    return await this.repository.findOne({where: {id}});
  }

  async getAll(): Promise<Facility[]> {
    return await this.repository.findAll();
  }

  async create(payload: Partial<CreateFacilityDetails>): Promise<Facility> {
    return await this.repository.create(payload);
  }

  async delete(id: number): Promise<boolean> {
    let res = await this.repository.destroy({where: {id}});
    return true;
  }

  async update(id: number, payload: UpdateFacilityDetails): Promise<Facility> {
    let facility = await this.getById(id);
    return facility?.update(payload);
  }

  async getAvailable({ fromDate, toDate, capacity, isPrivate, amenities }: Partial<CreateBookingDetails>): Promise<Facility[]> {
    let extras: any = {};
    if (!isPrivate && capacity) {
      extras.capacity = {
        [Op.gte]: capacity
      }
    }
    /*
    if (amenities) {
      extras.amenities = {
        [Op.contains]: amenities
      }
    }
    */
   return await this.repository.findAll({
      where: {
        ...extras,
        [Op.and]: literal(`
            NOT EXISTS (
                SELECT 1
                FROM bookings
                WHERE 
                    bookings.facilityId = Facility.id AND
                    (
                        bookings.fromDate <= :toDate AND
                        bookings.toDate >= :fromDate
                    )
            )
        `)
      },
      order: [['capacity', 'ASC']],
      include: [{
        model: Booking,
        attributes: [],
        required: false
      }],
      replacements: { fromDate, toDate }
    });
  }
}