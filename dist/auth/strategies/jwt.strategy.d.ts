import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import User from 'src/user/entities/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: Partial<User>): User;
}
export {};
