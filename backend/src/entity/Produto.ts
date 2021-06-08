import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export default class Produto {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  quantidade: number;

  @Column()
  unidade: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column()
  fabricante: string;

  @Column()
  id_funcionario: number;

  @Column()
  data_cadastro: Date;
}