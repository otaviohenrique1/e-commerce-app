import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Favorito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_produto: number;

  @Column()
  id_usuario: number;

  @Column()
  favoritado: boolean;
  
  @Column()
  categoria: string;

  @Column()
  data_cadastro: Date;
}