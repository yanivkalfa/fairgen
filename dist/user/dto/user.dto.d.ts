import { UserTypes, RoleTypes } from 'src/config/consts';
export declare class UserDetails {
    id?: number;
    firstName?: string;
    lastName?: string;
    password: string;
    email: string;
    userType?: UserTypes;
    role?: RoleTypes;
    createdAt?: Date;
    updatedAt?: Date;
}
