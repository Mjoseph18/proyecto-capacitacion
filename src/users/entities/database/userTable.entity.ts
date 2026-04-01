import { IUsers } from "src/interfaces/users.interfaces";
import { Entity } from "typeorm";

@Entity({
    comment: "Tabla principal de informacion de usuarios"
})
export class Users implements IUsers{
    id: string;
    name: string;
    position: string;
    status: number;
}