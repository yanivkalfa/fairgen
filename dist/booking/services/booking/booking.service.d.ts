import { CreateBookingDetails, UpdateBookingDetails } from 'src/booking/dto/booking.dto';
import Booking from 'src/booking/entities/booking.entity';
export declare class BookingService {
    private repository;
    constructor(repository: typeof Booking);
    getLast(ownerId: number, fromDate: Date): Promise<Booking>;
    getById(id: number, ownerId: number, isAdmin: boolean): Promise<Booking>;
    getMy(ownerId: number): Promise<Booking[]>;
    getAll(ownerId: number, isAdmin: boolean): Promise<Booking[]>;
    create(payload: Partial<CreateBookingDetails>): Promise<Booking>;
    delete(id: number, ownerId: number, isAdmin: boolean): Promise<boolean>;
    update(id: number, ownerId: number, isAdmin: boolean, payload: Partial<UpdateBookingDetails>): Promise<Booking>;
}
