import Funcionario from "../entity/Funcionario";

export default {
  render(funcionario: Funcionario) {
    return {
      id: funcionario.id,
      nome: funcionario.nome,
      email: funcionario.email,
      senha: funcionario.senha,
      cpf: funcionario.cpf,
      rg: funcionario.rg,
      sexo: funcionario.sexo,
      data_nascimento: funcionario.data_nascimento,
      telefone: funcionario.telefone,
      celular: funcionario.celular,
      endereco: funcionario.endereco,
      bairro: funcionario.bairro,
      numero: funcionario.numero,
      complemento: funcionario.complemento,
      cep: funcionario.cep,
      pais: funcionario.pais,
      cidade: funcionario.cidade,
      estado: funcionario.estado,
      cargo: funcionario.cargo,
      salario: funcionario.salario,
      carteira_trabalho: funcionario.carteira_trabalho,
      data_cadastro: funcionario.data_cadastro,
    };
  },
};