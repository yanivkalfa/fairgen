import { Injectable, Inject } from '@nestjs/common';
import User from 'src/user/entities/user.entity';
import { USER_REPOSITORY } from 'src/config/consts';
import { UserDetails } from 'src/user/dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: typeof User
  ) { }

  async createUser(userDetails: UserDetails): Promise<User> {
    return this.userRepository.create({ ...userDetails });
  }
}