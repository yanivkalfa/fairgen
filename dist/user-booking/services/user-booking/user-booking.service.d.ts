import { CreateUserBookingDetails } from 'src/user-booking/dto/user-booking.dto';
import UserBooking from 'src/user-booking/entities/user-booking.entity';
import { Sequelize } from 'sequelize-typescript';
export declare class UserBookingService {
    private sequelize;
    private repository;
    constructor(sequelize: Sequelize, repository: typeof UserBooking);
    useUserBooking(id: number, userId: number): Promise<boolean>;
    createBulk(payload: Partial<CreateUserBookingDetails>[]): Promise<UserBooking[]>;
    deleteBulk(bookingId: number): Promise<boolean>;
}
