import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RefugioModule } from './refugio/refugio.module';
import { MascotasModule } from './mascotas/mascotas.module';

@Module({
  imports: [UsersModule, RefugioModule, MascotasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
