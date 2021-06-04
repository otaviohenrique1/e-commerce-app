import { Column, Entity, PrimaryColumn } from "typeorm";
import Pessoa from "./Pessoa";

@Entity()
export default class Funcionario extends Pessoa {
  @Column()
  cargo: string;

  @Column()
  salario: number;

  @Column()
  carteira_trabalho: number;
}

let funcionario = new Funcionario();

funcionario.cpf;