import { Module } from '@nestjs/common';
import { UsersService } from './providers/users.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService],
})
export class UsersModule {}
