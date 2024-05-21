"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateBookingPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateBookingPipe = class ValidateBookingPipe {
    transform(value, metadata) {
        if (metadata.type === 'param' && metadata.data === 'id') {
            let newVal = parseInt(value);
            return isFinite(newVal) ? newVal : value;
        }
        let tempValue = { ...value };
        let fromDate = new Date(value.fromDate);
        let toDate = new Date(value.toDate);
        let isValidDate = (date) => {
            return date.toString() !== 'Invalid Date';
        };
        if (isValidDate(fromDate)) {
            tempValue.fromDate = fromDate;
        }
        if (isValidDate(toDate)) {
            tempValue.toDate = toDate;
        }
        return tempValue;
    }
};
exports.ValidateBookingPipe = ValidateBookingPipe;
exports.ValidateBookingPipe = ValidateBookingPipe = __decorate([
    (0, common_1.Injectable)()
], ValidateBookingPipe);
//# sourceMappingURL=validate-booking.pipe.js.map