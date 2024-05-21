import User from 'src/user/entities/user.entity';
import { AuthCredentials } from 'src/auth/dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: typeof User, jwtService: JwtService);
    signUserJwt(user: User): string;
    validateUser(authCredential: AuthCredentials): Promise<string>;
}
