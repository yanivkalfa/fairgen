import { Test, TestingModule } from '@nestjs/testing';
import { Facilities } from './facility';

describe('Facilities', () => {
  let provider: Facilities;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Facilities],
    }).compile();

    provider = module.get<Facilities>(Facilities);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
