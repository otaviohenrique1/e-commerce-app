import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Funcionario {
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
  cargo: string;

  @Column()
  salario: number;

  @Column()
  carteira_trabalho: string;

  @Column()
  data_cadastro: Date;
}
