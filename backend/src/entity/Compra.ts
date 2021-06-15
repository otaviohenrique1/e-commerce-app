import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  produtos: string;

  @Column()
  total_itens: number;

  @Column()
  total_preco: number;  

  @Column()
  id_usuario: number;

  @Column()
  data_cadastro: Date;
}