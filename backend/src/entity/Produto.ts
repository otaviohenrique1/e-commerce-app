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
  descricao: string;

  @Column()
  preco: number;

  @Column()
  id_funcionario: number;

  @Column()
  data_cadastro: Date;
}