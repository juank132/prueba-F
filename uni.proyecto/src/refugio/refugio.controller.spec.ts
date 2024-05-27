import { Test, TestingModule } from '@nestjs/testing';
import { RefugioController } from './refugio.controller';

describe('RefugioController', () => {
  let controller: RefugioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefugioController],
    }).compile();

    controller = module.get<RefugioController>(RefugioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
