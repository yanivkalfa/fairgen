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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const consts_1 = require("../../config/consts");
const lodash_1 = require("lodash");
const user_entity_1 = require("../../user/entities/user.entity");
const booking_entity_1 = require("../../booking/entities/booking.entity");
let UserBooking = class UserBooking extends sequelize_typescript_1.Model {
    getClean(removeFields = ['password']) {
        return (0, lodash_1.omit)(this.dataValues, removeFields);
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserBooking.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => booking_entity_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserBooking.prototype, "bookingId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.default, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.default)
], UserBooking.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => booking_entity_1.default, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", booking_entity_1.default)
], UserBooking.prototype, "booking", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserBooking.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: Object.values(consts_1.UserBookingStatus),
        defaultValue: consts_1.UserBookingStatus.FREE,
    }),
    __metadata("design:type", String)
], UserBooking.prototype, "status", void 0);
UserBooking = __decorate([
    sequelize_typescript_1.Table
], UserBooking);
exports.default = UserBooking;
//# sourceMappingURL=user-booking.entity.js.map