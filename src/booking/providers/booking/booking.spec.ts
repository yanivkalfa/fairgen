import { Test, TestingModule } from '@nestjs/testing';
import { Booking } from './booking';

describe('Booking', () => {
  let provider: Booking;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Booking],
    }).compile();

    provider = module.get<Booking>(Booking);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
