import {Entity, PrimaryColumn, Column} from "typeorm";
// import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Pessoa {
  // @PrimaryGeneratedColumn()
  // id: number;

  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  sexo: string;

  @Column()
  data_nascimento: Date;

  @Column()
  telefone: string;

  @Column()
  celular: string;
  
  @Column()
  endereco: string;
  
  @Column()
  bairro: string;
  
  @Column()
  numero: string;
  
  @Column()
  complemento: string;
  
  @Column()
  cep: string;

  @Column()
  pais: string;
  
  @Column()
  cidade: string;
  
  @Column()
  estado: string;

  @Column()
  data_cadastro: Date;
}
