import { Module } from '@nestjs/common';
import { ClientsService } from './providers/clients.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ClientsService],
})
export class ClientsModule {}
