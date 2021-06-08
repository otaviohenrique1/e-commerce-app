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
  cpf: number;

  @Column()
  rg: number;

  @Column()
  sexo: string;

  @Column()
  data_nascimento: Date;

  @Column()
  telefone: number;

  @Column()
  celular: number;
  
  @Column()
  endereco: string;
  
  @Column()
  bairro: string;
  
  @Column()
  numero: number;
  
  @Column()
  complemento: string;
  
  @Column()
  cep: number;

  @Column()
  pais: string;
  
  @Column()
  cidade: string;
  
  @Column()
  estado: string;

  @Column()
  ponto_de_referencia: string;

  @Column()
  telefone_contato: number;

  @Column()
  data_cadastro: Date;
}
