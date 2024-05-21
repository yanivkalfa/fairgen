import User from 'src/user/entities/user.entity';
import { UserService } from 'src/user/services/user/user.service';
import { UserDetails } from 'src/user/dto/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createNewUser(userDetails: UserDetails): Promise<User>;
}
