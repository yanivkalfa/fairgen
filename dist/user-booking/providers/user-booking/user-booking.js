"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookingProvider = void 0;
const user_booking_entity_1 = require("../../entities/user-booking.entity");
const consts_1 = require("../../../config/consts");
exports.UserBookingProvider = [
    {
        provide: consts_1.USER_BOOKING_REPOSITORY,
        useValue: user_booking_entity_1.default,
    },
];
//# sourceMappingURL=user-booking.js.map