import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/config/consts';
import User from 'src/user/entities/user.entity';
import { AuthCredentials } from 'src/auth/dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: typeof User,
    private jwtService: JwtService
  ) { }

  signUserJwt(user: User) {
    return this.jwtService.sign(user.getClean());
  }

  async validateUser(authCredential: AuthCredentials): Promise<string> {
    let user = await this.userRepository.findOne({ where: { email: authCredential .email}});
    if (!user || user.password !== authCredential.password) {
      throw new HttpException('Invalid user auth', HttpStatus.UNAUTHORIZED);
    }
    return this.signUserJwt(user);
  }
}

