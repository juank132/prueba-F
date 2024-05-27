import { Test, TestingModule } from '@nestjs/testing';
import { RefugioService } from './refugio.service';

describe('RefugioService', () => {
  let service: RefugioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefugioService],
    }).compile();

    service = module.get<RefugioService>(RefugioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
