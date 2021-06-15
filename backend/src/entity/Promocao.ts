import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Promocao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tema: string;

  @Column()
  inicio: Date;

  @Column()
  termino: Date;

  @Column()
  data_cadastro: Date;
}