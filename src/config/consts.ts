export const SEQUELIZE = 'SEQUELIZE';
export const USER_REPOSITORY = 'USER_REPOSITORY';
export const INSTITUTION_REPOSITORY = 'INSTITUTION_REPOSITORY';
export const FACILITY_REPOSITORY = 'FACILITY_REPOSITORY';
export const BOOKING_REPOSITORY = 'BOOKING_REPOSITORY';
export const USER_BOOKING_REPOSITORY = 'USER_BOOKING_REPOSITORY';

export enum RoleTypes {
  USER = 'user',
  ADMIN = 'admin',
  MANAGER = 'manager'
}
export enum UserTypes {
  CLEANER = 'cleaner',
  TEACHER = 'teacher',
  STUDENT = 'student',
}

export enum UserBookingStatus {
  FREE = 'free',
  USED = 'used',
}

export enum facilityType {
  CLASSROOM = 'classroom',
  AUDITORIUM = 'auditorium'
}


export enum institutionType {
  UNIVERSITY = 'university',
  COLLEGE = 'college',
  GARAGE = 'garage'
}

export interface Location {
  x: number;
  y: number;
}

export const JWT_SECRET_KEY = 'JWT_SECRET_KEY';