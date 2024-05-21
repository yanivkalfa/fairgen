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
const institution_entity_1 = require("../../institution/entities/institution.entity");
const booking_entity_1 = require("../../booking/entities/booking.entity");
const user_booking_entity_1 = require("../../user-booking/entities/user-booking.entity");
let User = class User extends sequelize_typescript_1.Model {
    getClean(removeFields = ['password']) {
        return (0, lodash_1.omit)(this.dataValues, removeFields);
    }
    isAdmin() {
        return this.dataValues.role === consts_1.RoleTypes.ADMIN;
    }
    isManager() {
        return this.dataValues.role === consts_1.RoleTypes.MANAGER;
    }
    isCleaner() {
        return this.dataValues.userType === consts_1.UserTypes.CLEANER;
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => institution_entity_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "InstitutionId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => institution_entity_1.default),
    __metadata("design:type", institution_entity_1.default)
], User.prototype, "institution", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => booking_entity_1.default, () => user_booking_entity_1.default),
    __metadata("design:type", Array)
], User.prototype, "bookings", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => booking_entity_1.default, 'ownerId'),
    __metadata("design:type", Array)
], User.prototype, "ownBookings", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.IsEmail,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: Object.values(consts_1.UserTypes),
        defaultValue: consts_1.UserTypes.STUDENT,
    }),
    __metadata("design:type", String)
], User.prototype, "userType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: Object.values(consts_1.RoleTypes),
        defaultValue: consts_1.RoleTypes.USER,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
User = __decorate([
    sequelize_typescript_1.Table
], User);
exports.default = User;
//# sourceMappingURL=user.entity.js.map