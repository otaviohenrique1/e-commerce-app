import {Entity, Column} from "typeorm";
import Pessoa from "./Pessoa";

@Entity()
export default class PessoaJuridica extends Pessoa {
  @Column()
  razao_social: string;

  @Column()
  cnpj: string;

  @Column()
  isento_inscricao_estadual: boolean;
  
  @Column()
  numero_inscricao_estadual: string;

  @Column()
  contribuinte: string;
}