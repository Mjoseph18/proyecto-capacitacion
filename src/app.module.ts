import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, ClientsModule, ProductsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
