import { Test, TestingModule } from '@nestjs/testing';
import { UserBookingController } from './user-booking.controller';

describe('UserBookingController', () => {
  let controller: UserBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBookingController],
    }).compile();

    controller = module.get<UserBookingController>(UserBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
