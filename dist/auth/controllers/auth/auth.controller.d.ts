/// <reference types="passport" />
import { Request } from 'express';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { UserDetails } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/services/user/user.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    login(req: Request): Express.User;
    signup(userDetails: UserDetails): Promise<{
        auth_token: string;
        user: Partial<import("../../../user/entities/user.entity").default>;
    }>;
    status(req: Request): Express.User;
}
