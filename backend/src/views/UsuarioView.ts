import Usuario from "../entity/Usuario";

export default {
  render(usuario: Usuario) {
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      cpf: usuario.cpf,
      rg: usuario.rg,
      sexo: usuario.sexo,
      data_nascimento: usuario.data_nascimento,
      telefone: usuario.telefone,
      celular: usuario.celular,
      endereco: usuario.endereco,
      bairro: usuario.bairro,
      numero: usuario.numero,
      complemento: usuario.complemento,
      cep: usuario.cep,
      pais: usuario.pais,
      cidade: usuario.cidade,
      estado: usuario.estado,
      ponto_de_referencia: usuario.ponto_de_referencia,
      telefone_contato: usuario.telefone_contato,
      razao_social: usuario.razao_social,
      cnpj: usuario.cnpj,
      isento_inscricao_estadual: usuario.isento_inscricao_estadual,
      numero_inscricao_estadual: usuario.numero_inscricao_estadual,
      contribuinte: usuario.contribuinte,
      data_cadastro: usuario.data_cadastro,
    };
  },
};