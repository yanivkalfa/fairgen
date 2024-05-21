import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JWT_SECRET_KEY } from 'src/config/consts';

@Module({
  imports:[
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>(JWT_SECRET_KEY, null),
        signOptions: { expiresIn: '1d' }
      }),
      inject: [ConfigService]
    }),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, AuthService]
})
export class AuthModule {}
