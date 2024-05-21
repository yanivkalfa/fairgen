export declare const SEQUELIZE = "SEQUELIZE";
export declare const USER_REPOSITORY = "USER_REPOSITORY";
export declare const INSTITUTION_REPOSITORY = "INSTITUTION_REPOSITORY";
export declare const FACILITY_REPOSITORY = "FACILITY_REPOSITORY";
export declare const BOOKING_REPOSITORY = "BOOKING_REPOSITORY";
export declare const USER_BOOKING_REPOSITORY = "USER_BOOKING_REPOSITORY";
export declare enum RoleTypes {
    USER = "user",
    ADMIN = "admin",
    MANAGER = "manager"
}
export declare enum UserTypes {
    CLEANER = "cleaner",
    TEACHER = "teacher",
    STUDENT = "student"
}
export declare enum UserBookingStatus {
    FREE = "free",
    USED = "used"
}
export declare enum facilityType {
    CLASSROOM = "classroom",
    AUDITORIUM = "auditorium"
}
export declare enum institutionType {
    UNIVERSITY = "university",
    COLLEGE = "college",
    GARAGE = "garage"
}
export interface Location {
    x: number;
    y: number;
}
export declare const JWT_SECRET_KEY = "JWT_SECRET_KEY";
