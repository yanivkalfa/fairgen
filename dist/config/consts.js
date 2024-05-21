"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET_KEY = exports.institutionType = exports.facilityType = exports.UserBookingStatus = exports.UserTypes = exports.RoleTypes = exports.USER_BOOKING_REPOSITORY = exports.BOOKING_REPOSITORY = exports.FACILITY_REPOSITORY = exports.INSTITUTION_REPOSITORY = exports.USER_REPOSITORY = exports.SEQUELIZE = void 0;
exports.SEQUELIZE = 'SEQUELIZE';
exports.USER_REPOSITORY = 'USER_REPOSITORY';
exports.INSTITUTION_REPOSITORY = 'INSTITUTION_REPOSITORY';
exports.FACILITY_REPOSITORY = 'FACILITY_REPOSITORY';
exports.BOOKING_REPOSITORY = 'BOOKING_REPOSITORY';
exports.USER_BOOKING_REPOSITORY = 'USER_BOOKING_REPOSITORY';
var RoleTypes;
(function (RoleTypes) {
    RoleTypes["USER"] = "user";
    RoleTypes["ADMIN"] = "admin";
    RoleTypes["MANAGER"] = "manager";
})(RoleTypes || (exports.RoleTypes = RoleTypes = {}));
var UserTypes;
(function (UserTypes) {
    UserTypes["CLEANER"] = "cleaner";
    UserTypes["TEACHER"] = "teacher";
    UserTypes["STUDENT"] = "student";
})(UserTypes || (exports.UserTypes = UserTypes = {}));
var UserBookingStatus;
(function (UserBookingStatus) {
    UserBookingStatus["FREE"] = "free";
    UserBookingStatus["USED"] = "used";
})(UserBookingStatus || (exports.UserBookingStatus = UserBookingStatus = {}));
var facilityType;
(function (facilityType) {
    facilityType["CLASSROOM"] = "classroom";
    facilityType["AUDITORIUM"] = "auditorium";
})(facilityType || (exports.facilityType = facilityType = {}));
var institutionType;
(function (institutionType) {
    institutionType["UNIVERSITY"] = "university";
    institutionType["COLLEGE"] = "college";
    institutionType["GARAGE"] = "garage";
})(institutionType || (exports.institutionType = institutionType = {}));
exports.JWT_SECRET_KEY = 'JWT_SECRET_KEY';
//# sourceMappingURL=consts.js.map