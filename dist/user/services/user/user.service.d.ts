import User from 'src/user/entities/user.entity';
import { UserDetails } from 'src/user/dto/user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(userDetails: UserDetails): Promise<User>;
}
