"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookingModule = void 0;
const common_1 = require("@nestjs/common");
const user_booking_controller_1 = require("./controllers/user-booking/user-booking.controller");
const user_booking_service_1 = require("./services/user-booking/user-booking.service");
const user_booking_1 = require("./providers/user-booking/user-booking");
const database_provider_1 = require("../database/providers/database.provider");
let UserBookingModule = class UserBookingModule {
};
exports.UserBookingModule = UserBookingModule;
exports.UserBookingModule = UserBookingModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_booking_controller_1.UserBookingController],
        providers: [
            user_booking_service_1.UserBookingService,
            ...user_booking_1.UserBookingProvider,
            ...database_provider_1.databaseProviders
        ],
        exports: [
            user_booking_service_1.UserBookingService,
            ...user_booking_1.UserBookingProvider
        ]
    })
], UserBookingModule);
//# sourceMappingURL=user-booking.module.js.map