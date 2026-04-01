import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB: TypeOrmModuleAsyncOptions = {
  name: 'start',
  useFactory: () => ({
    type: 'mysql',
    username: process.env['DATABASE_USERNAME'],
    host: process.env['DATABASE_HOST'],
    password: process.env['DATABASE_PASSWORD'],
    port: parseInt(process.env['DATABSE_PORT'] ?? ''),
    database: process.env['DATABASE_NAME'],
  }),
};

export default connectDB;
