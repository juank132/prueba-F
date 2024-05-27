import { Module } from '@nestjs/common';
import { RefugioController } from './refugio.controller';
import { RefugioService } from './refugio.service';

@Module({
  controllers: [RefugioController],
  providers: [RefugioService]
})
export class RefugioModule {}
