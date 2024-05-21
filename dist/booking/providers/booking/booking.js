"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingProvider = void 0;
const booking_entity_1 = require("../../entities/booking.entity");
const consts_1 = require("../../../config/consts");
exports.BookingProvider = [
    {
        provide: consts_1.BOOKING_REPOSITORY,
        useValue: booking_entity_1.default,
    },
];
//# sourceMappingURL=booking.js.map