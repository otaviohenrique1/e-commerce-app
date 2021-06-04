import {Entity, Column} from "typeorm";
import Pessoa from "./Pessoa";
// import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class PessoaFisica extends Pessoa {  
  @Column()
  ponto_de_referencia: string;

  @Column()
  telefone_contato: string;
  
}
