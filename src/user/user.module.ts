import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { UserProvider } from './providers/user/user';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    ...UserProvider,
  ],
  exports: [
    UserService, 
    ...UserProvider
  ],
})
export class UserModule {}
