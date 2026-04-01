import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectDB from 'src/common/databaseConfig';

@Module({
  imports: [TypeOrmModule.forRootAsync(connectDB)],
})
export class DatabaseModule {}
