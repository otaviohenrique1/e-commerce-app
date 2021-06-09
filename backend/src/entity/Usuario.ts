import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Usuario {
  @PrimaryGeneratedColumn()
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
  ponto_de_referencia: string;

  @Column()
  telefone_contato: string;

  @Column()
  razao_social: string;

  @Column()
  cnpj: string;

  @Column()
  isento_inscricao_estadual: boolean;
  
  @Column()
  numero_inscricao_estadual: string;

  @Column()
  contribuinte: boolean;

  @Column()
  data_cadastro: Date;
}