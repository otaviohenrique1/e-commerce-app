import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_funcionario: number;

  @Column()
  tempo_acesso: Date;

  @Column()
  data_acesso: Date;
}