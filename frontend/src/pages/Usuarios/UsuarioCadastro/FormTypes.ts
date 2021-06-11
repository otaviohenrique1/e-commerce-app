interface FormTypesPessoa {
  email: string;
  senha: string;
  telefone: string;
  celular: string;
  endereco: string;
  bairro: string;
  numero: string;
  complemento: string;
  cep: string;
  pais: string;
  cidade: string;
  estado: string;
  ponto_de_referencia: string;
  telefone_contato: string;
  data_cadastro: Date;
}

export interface FormTypesPessoaFisica extends FormTypesPessoa {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  rg: string;
  sexo: string;
  data_nascimento: Date;
}

export interface FormTypesPessoaJuridica extends FormTypesPessoa {
  razao_social: string;
  cnpj: string;
  isento_inscricao_estadual: boolean;
  numero_inscricao_estadual: string;
  contribuinte: boolean;
  data_cadastro: Date;
}

// export interface FormTypes {
//   nome: string;
//   email: string;
//   senha: string;
//   cpf: string;
//   rg: string;
//   sexo: string;
//   data_nascimento: Date;
//   telefone: string;
//   celular: string;
//   endereco: string;
//   bairro: string;
//   numero: string;
//   complemento: string;
//   cep: string;
//   pais: string;
//   cidade: string;
//   estado: string;
//   ponto_de_referencia: string;
//   telefone_contato: string;
//   razao_social: string;
//   cnpj: string;
//   isento_inscricao_estadual: boolean;
//   numero_inscricao_estadual: string;
//   contribuinte: boolean;
//   data_cadastro: Date;
// }
