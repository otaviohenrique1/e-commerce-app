import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;
  
  @Column()
  id_funcionario: number;

  @Column()
  data_cadastro: Date;
}