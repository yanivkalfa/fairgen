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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const consts_1 = require("../../../config/consts");
let BookingService = class BookingService {
    constructor(repository) {
        this.repository = repository;
    }
    async getLast(ownerId, fromDate) {
        return await this.repository.findOne({
            where: {
                ownerId,
                toDate: {
                    [sequelize_1.Op.lte]: fromDate
                }
            },
            order: [['toDate', 'DESC']]
        });
    }
    async getById(id, ownerId, isAdmin) {
        let options = {
            where: {
                id: id
            }
        };
        if (!isAdmin) {
            options.where.ownerId = ownerId;
        }
        return await this.repository.findOne(options);
    }
    async getMy(ownerId) {
        return await this.repository.findAll({ where: { ownerId } });
    }
    async getAll(ownerId, isAdmin) {
        let options = {
            where: {}
        };
        if (!isAdmin) {
            options.where.ownerId = ownerId;
        }
        return await this.repository.findAll(options);
    }
    async create(payload) {
        return await this.repository.create(payload);
    }
    async delete(id, ownerId, isAdmin) {
        let options = {
            where: {
                id
            }
        };
        if (!isAdmin) {
            options.where.ownerId = ownerId;
        }
        await this.repository.destroy(options);
        return true;
    }
    async update(id, ownerId, isAdmin, payload) {
        let booking = await this.getById(id, ownerId, isAdmin);
        return booking?.update(payload);
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(consts_1.BOOKING_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], BookingService);
//# sourceMappingURL=booking.service.js.map