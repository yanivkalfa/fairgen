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
const user_entity_1 = require("../../user/entities/user.entity");
const consts_1 = require("../../config/consts");
const facility_entity_1 = require("../../facility/entities/facility.entity");
let Institution = class Institution extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_entity_1.default),
    __metadata("design:type", Array)
], Institution.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => facility_entity_1.default),
    __metadata("design:type", Array)
], Institution.prototype, "facilities", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Institution.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Institution.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: Object.values(consts_1.institutionType),
        defaultValue: consts_1.institutionType.UNIVERSITY,
    }),
    __metadata("design:type", String)
], Institution.prototype, "type", void 0);
Institution = __decorate([
    sequelize_typescript_1.Table
], Institution);
exports.default = Institution;
//# sourceMappingURL=institution.entity.js.map