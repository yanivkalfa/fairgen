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
const facility_dto_1 = require("../dto/facility.dto");
let Facility = class Facility extends sequelize_typescript_1.Model {
    getClean(removeFields = ['password']) {
        return (0, lodash_1.omit)(this.dataValues, removeFields);
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => institution_entity_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Facility.prototype, "InstitutionId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => institution_entity_1.default),
    __metadata("design:type", institution_entity_1.default)
], Facility.prototype, "institution", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => booking_entity_1.default),
    __metadata("design:type", Array)
], Facility.prototype, "bookings", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Facility.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Facility.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Facility.prototype, "capacity", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.JSON),
    __metadata("design:type", Array)
], Facility.prototype, "amenities", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.JSONB,
        defaultValue: { x: 0, y: 0 }
    }),
    __metadata("design:type", facility_dto_1.Location)
], Facility.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: Object.values(consts_1.facilityType),
        defaultValue: consts_1.facilityType.CLASSROOM,
    }),
    __metadata("design:type", String)
], Facility.prototype, "type", void 0);
Facility = __decorate([
    sequelize_typescript_1.Table
], Facility);
exports.default = Facility;
//# sourceMappingURL=facility.entity.js.map