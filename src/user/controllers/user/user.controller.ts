import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import User from 'src/user/entities/user.entity';
import { UserService } from 'src/user/services/user/user.service';
import { UserDetails } from 'src/user/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createNewUser(@Body() userDetails: UserDetails): Promise<User> {
    //  console.log('userDetails', userDetails);
    try {
      let user = await this.userService.createUser(userDetails);
      let { password, ...newUser } = user.dataValues;
      return newUser as User;
    }catch(err) {
      throw new HttpException(err.errors[0].message, HttpStatus.BAD_REQUEST)
    }
  }
}
