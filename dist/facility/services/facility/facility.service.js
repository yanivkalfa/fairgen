"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const booking_entity_1 = require("../../../booking/entities/booking.entity");
const consts_1 = require("../../../config/consts");
let FacilityService = class FacilityService {
    constructor(repository) {
        this.repository = repository;
    }
    async getById(id) {
        return await this.repository.findOne({ where: { id } });
    }
    async getAll() {
        return await this.repository.findAll();
    }
    async create(payload) {
        return await this.repository.create(payload);
    }
    async delete(id) {
        let res = await this.repository.destroy({ where: { id } });
        return true;
    }
    async update(id, payload) {
        let facility = await this.getById(id);
        return facility?.update(payload);
    }
    async getAvailable({ fromDate, toDate, capacity, isPrivate, amenities }) {
        let extras = {};
        if (!isPrivate && capacity) {
            extras.capacity = {
                [sequelize_1.Op.gte]: capacity
            };
        }
        return await this.repository.findAll({
            where: {
                ...extras,
                [sequelize_1.Op.and]: (0, sequelize_1.literal)(`
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
                    model: booking_entity_1.default,
                    attributes: [],
                    required: false
                }],
            replacements: { fromDate, toDate }
        });
    }
};
exports.FacilityService = FacilityService;
exports.FacilityService = FacilityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(consts_1.FACILITY_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], FacilityService);
//# sourceMappingURL=facility.service.js.map