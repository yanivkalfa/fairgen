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
const lodash_1 = require("lodash");
const facility_entity_1 = require("../../facility/entities/facility.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const user_booking_entity_1 = require("../../user-booking/entities/user-booking.entity");
let Booking = class Booking extends sequelize_typescript_1.Model {
    getClean(removeFields = ['password']) {
        return (0, lodash_1.omit)(this.dataValues, removeFields);
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => facility_entity_1.default),
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Booking.prototype, "facilityId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => facility_entity_1.default),
    __metadata("design:type", facility_entity_1.default)
], Booking.prototype, "facility", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.default),
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Booking.prototype, "ownerId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.default, 'ownerId'),
    __metadata("design:type", user_entity_1.default)
], Booking.prototype, "owner", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => user_entity_1.default, () => user_booking_entity_1.default),
    __metadata("design:type", Array)
], Booking.prototype, "users", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.IsDate,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Booking.prototype, "fromDate", void 0);
__decorate([
    sequelize_typescript_1.IsDate,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Booking.prototype, "toDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Booking.prototype, "isPrivate", void 0);
Booking = __decorate([
    sequelize_typescript_1.Table
], Booking);
exports.default = Booking;
//# sourceMappingURL=booking.entity.js.map