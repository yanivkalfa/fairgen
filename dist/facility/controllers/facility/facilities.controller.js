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
exports.FacilityController = void 0;
const common_1 = require("@nestjs/common");
const hasRole_decorator_1 = require("../../../auth/decorators/hasRole.decorator");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../../auth/guards/roles.guard");
const consts_1 = require("../../../config/consts");
const facility_dto_1 = require("../../dto/facility.dto");
const facility_service_1 = require("../../services/facility/facility.service");
let FacilityController = class FacilityController {
    constructor(service) {
        this.service = service;
    }
    async getAll() {
        return this.service.getAll();
    }
    async create(payload) {
        return await this.service.create(payload);
    }
    async delete(id) {
        return this.service.delete(id);
    }
    async getById(id) {
        return this.service.getById(id);
    }
    put(id, payload) {
        return this.update(id, payload);
    }
    patch(id, payload) {
        return this.update(id, payload);
    }
    update(id, payload) {
        return this.service.update(id, payload);
    }
};
exports.FacilityController = FacilityController;
__decorate([
    (0, hasRole_decorator_1.HasRole)(null),
    (0, common_1.Get)('/all'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [facility_dto_1.CreateFacilityDetails]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "delete", null);
__decorate([
    (0, hasRole_decorator_1.HasRole)(null),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, facility_dto_1.UpdateFacilityDetails]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "put", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, facility_dto_1.UpdateFacilityDetails]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "patch", null);
exports.FacilityController = FacilityController = __decorate([
    (0, hasRole_decorator_1.HasRole)([consts_1.RoleTypes.ADMIN, consts_1.RoleTypes.MANAGER]),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Controller)('facility'),
    __metadata("design:paramtypes", [facility_service_1.FacilityService])
], FacilityController);
//# sourceMappingURL=facilities.controller.js.map