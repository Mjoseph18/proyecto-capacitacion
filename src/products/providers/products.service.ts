import { Injectable } from '@nestjs/common';
import objectEvery from 'src/common/objectEvery';
import { IProducts } from 'src/interfaces/products.interface';
import { IServices } from 'src/interfaces/services.interface';

@Injectable()
export class ProductsService implements IServices<IProducts> {
  private products: IProducts[] = [];

  findAll(): IProducts[] {
    return this.products;
  }

  findOne(payload: Partial<IProducts>): string | IProducts {
    const productsDTO = this.products.find((product) => {
      return objectEvery<IProducts>(payload, product);
    });
    return productsDTO ?? 'No se encontro el producto';
  }

  create(payload: IProducts): string {
    this.products.push(payload);
    return 'Producto creado';
  }

  update(payload: Partial<IProducts>): string {
    const index = this.products.findIndex(
      (product) => product.id === (payload.id ?? 0),
    );
    this.products[index] = { ...this.products[index], ...payload };
    return 'Producto actualizado';
  }
}
