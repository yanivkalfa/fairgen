import User from 'src/user/entities/user.entity';
import { USER_REPOSITORY } from 'src/config/consts';

export const UserProvider = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];