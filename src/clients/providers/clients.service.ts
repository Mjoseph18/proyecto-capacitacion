import { Injectable } from '@nestjs/common';
import objectEvery from 'src/common/objectEvery';
import { IClients } from 'src/interfaces/clients.interface';
import { IServices } from 'src/interfaces/services.interface';

@Injectable()
export class ClientsService implements IServices<IClients> {
  private clients: IClients[] = [];

  findAll(): IClients[] {
    return this.clients;
  }

  findOne(payload: Partial<IClients>): string | IClients {
    const clientsDTO = this.clients.find((client) => {
      return objectEvery<IClients>(payload, client);
    });
    return clientsDTO ?? 'No se encontro el cliente';
  }

  create(payload: IClients): string {
    this.clients.push(payload);
    return 'Cliente creado';
  }

  update(payload: Partial<IClients>): string {
    const index = this.clients.findIndex(
      (client) => client.id === (payload.id ?? ''),
    );
    this.clients[index] = { ...this.clients[index], ...payload };
    return 'Cliente actualizado';
  }
}
