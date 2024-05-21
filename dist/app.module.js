"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const institution_module_1 = require("./institution/institution.module");
const facility_module_1 = require("./facility/facility.module");
const booking_module_1 = require("./booking/booking.module");
const user_booking_module_1 = require("./user-booking/user-booking.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `${__dirname}/config/envs/.env`,
                isGlobal: true
            }),
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            institution_module_1.InstitutionModule,
            facility_module_1.FacilityModule,
            booking_module_1.BookingModule,
            user_booking_module_1.UserBookingModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map