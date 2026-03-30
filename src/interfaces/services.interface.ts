export abstract class IServices<T> {
  constructor() {
    if (this.constructor === IServices)
      throw new Error('No puede ser instanciada');
  }

  abstract findAll(): T[];
  abstract findOne(payload: Partial<T>): T | string;
  abstract create(payload: T): string;
  abstract update(payload: Partial<T>): string;
}
