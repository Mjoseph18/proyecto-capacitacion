import { Module } from '@nestjs/common';
import { ProductsService } from './providers/products.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ProductsService],
})
export class ProductsModule {}
