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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const hasRole_decorator_1 = require("../../../auth/decorators/hasRole.decorator");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const booking_dto_1 = require("../../dto/booking.dto");
const booking_service_1 = require("../../services/booking/booking.service");
const consts_1 = require("../../../config/consts");
const validate_booking_pipe_1 = require("../../pipes/booking/validate-booking.pipe");
const facility_service_1 = require("../../../facility/services/facility/facility.service");
const user_booking_service_1 = require("../../../user-booking/services/user-booking/user-booking.service");
let BookingController = class BookingController {
    constructor(facilityService, userBookingService, service) {
        this.facilityService = facilityService;
        this.userBookingService = userBookingService;
        this.service = service;
    }
    async getMy(req) {
        return this.service.getMy(req.user.id);
    }
    async getAllBooking(req) {
        return this.service.getAll(req.user.id, req.user.isAdmin());
    }
    calculateDistance(pA, pB) {
        const deltaX = pB.x - pA.x;
        const deltaY = pB.y - pA.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
    sortByDistance(location) {
        return (facilityA, facilityB) => {
            let dsA = this.calculateDistance(location, facilityA.dataValues.location);
            let dsb = this.calculateDistance(location, facilityB.dataValues.location);
            if (dsA > dsb) {
                return -1;
            }
            if (dsA > dsb) {
                return 1;
            }
            return 0;
        };
    }
    async createBooking(payload, user) {
        let lastBooking = await this.service.getLast(user.id, payload.fromDate);
        let location = { x: 0, y: 0 };
        if (lastBooking) {
            let bookingFacility = await lastBooking.$get('facility');
            location = bookingFacility.dataValues.location;
        }
        let isCleaner = user.isCleaner();
        payload.isPrivate = isCleaner;
        let availableFaciltieis = await this.facilityService.getAvailable(payload);
        if (!availableFaciltieis.length) {
            throw new common_1.HttpException('No available slots', common_1.HttpStatus.NOT_FOUND);
        }
        let lowestCapacity = availableFaciltieis[0].dataValues.capacity;
        let selectedFacility = availableFaciltieis
            .filter(({ dataValues }) => dataValues.capacity === lowestCapacity)
            .sort(this.sortByDistance(location))[0].dataValues;
        let bookingData = {
            ...payload,
            ownerId: user.id,
            facilityId: selectedFacility.id
        };
        let booking = await this.service.create(bookingData);
        if (!booking.dataValues.isPrivate) {
            let userBookings = [];
            let l = selectedFacility.capacity;
            let i = 0;
            for (i; i < l; i++) {
                userBookings.push({
                    bookingId: booking.dataValues.id,
                    status: consts_1.UserBookingStatus.FREE
                });
            }
            await this.userBookingService.createBulk(userBookings);
        }
        return booking;
    }
    async create(payload, req) {
        try {
            return await this.createBooking(payload, req.user);
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id, req) {
        return this.service.delete(id, req.user.id, req.user.isAdmin());
    }
    async getById(id, req) {
        return this.service.getById(id, req.user.id, req.user.isAdmin());
    }
    async createUserBooking(id, req) {
        await this.userBookingService.useUserBooking(id, req.user.id);
        return 'success';
    }
};
exports.BookingController = BookingController;
__decorate([
    (0, common_1.Get)('/my'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getMy", null);
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getAllBooking", null);
__decorate([
    (0, hasRole_decorator_1.HasRole)([consts_1.RoleTypes.ADMIN, consts_1.RoleTypes.MANAGER]),
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(validate_booking_pipe_1.ValidateBookingPipe, new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_dto_1.CreateBookingDetails, Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/:id/join'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createUserBooking", null);
exports.BookingController = BookingController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('booking'),
    __metadata("design:paramtypes", [facility_service_1.FacilityService,
        user_booking_service_1.UserBookingService,
        booking_service_1.BookingService])
], BookingController);
//# sourceMappingURL=booking.controller.js.map