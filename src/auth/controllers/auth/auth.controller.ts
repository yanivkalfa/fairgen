import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { UserDetails } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  
  @UseGuards(LocalAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('login')
  login(@Req() req: Request) {
    return req.user;
  };

  @UsePipes(new ValidationPipe())
  @Post('signup')
  async signup(@Body() userDetails: UserDetails) {
    let user = await this.userService.createUser(userDetails);
    return {
      auth_token: this.authService.signUserJwt(user),
      user: user.getClean()
    }
  };
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('status')
  status(@Req() req: Request) {
    return req.user
  };
}


//
//
