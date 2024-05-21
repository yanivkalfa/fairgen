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
exports.UserBookingService = void 0;
const common_1 = require("@nestjs/common");
const consts_1 = require("../../../config/consts");
const sequelize_typescript_1 = require("sequelize-typescript");
let UserBookingService = class UserBookingService {
    constructor(sequelize, repository) {
        this.sequelize = sequelize;
        this.repository = repository;
    }
    async useUserBooking(id, userId) {
        const transaction = await this.sequelize.transaction();
        try {
            let userBooking = await this.repository.findOne({
                where: {
                    bookingId: id,
                    status: consts_1.UserBookingStatus.FREE
                },
                lock: transaction.LOCK.UPDATE,
                transaction: transaction
            });
            if (!userBooking) {
                throw new common_1.HttpException('No Such Booking', common_1.HttpStatus.NOT_FOUND);
            }
            userBooking.userId = userId;
            userBooking.status = consts_1.UserBookingStatus.USED;
            await userBooking.save({ transaction });
            await transaction.commit();
            return true;
        }
        catch (error) {
            await transaction.rollback();
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createBulk(payload) {
        return this.repository.bulkCreate(payload);
    }
    async deleteBulk(bookingId) {
        await this.repository.destroy({ where: { bookingId } });
        return true;
    }
};
exports.UserBookingService = UserBookingService;
exports.UserBookingService = UserBookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(consts_1.SEQUELIZE)),
    __param(1, (0, common_1.Inject)(consts_1.USER_BOOKING_REPOSITORY)),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize, Object])
], UserBookingService);
//# sourceMappingURL=user-booking.service.js.map