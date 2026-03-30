import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ClientsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
