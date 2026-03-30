import { Injectable } from '@nestjs/common';
import objectEvery from 'src/common/objectEvery';
import { IServices } from 'src/interfaces/services.interface';
import { IUsers } from 'src/interfaces/users.interfaces';

@Injectable()
export class UsersService implements IServices<IUsers> {
  private users: IUsers[] = [];

  findAll(): IUsers[] {
    return this.users;
  }

  findOne(payload: Partial<IUsers>): IUsers | string {
    const usersDTO = this.users.find((user) => {
      return objectEvery<IUsers>(payload, user);
    });

    return usersDTO ?? 'Usuario no encontrado';
  }
  create(payload: IUsers): string {
    this.users.push(payload);
    return 'Usuario creado';
  }

  update(payload: Partial<IUsers>): string {
    const index = this.users.findIndex(
      (user) => user.id == (payload?.id ?? ''),
    );
    this.users[index] = { ...this.users[index], ...payload };
    return 'Usuario actualizado';
  }
}
