import { Test, TestingModule } from '@nestjs/testing';
import { Institution } from './institution';

describe('Institution', () => {
  let provider: Institution;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Institution],
    }).compile();

    provider = module.get<Institution>(Institution);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
