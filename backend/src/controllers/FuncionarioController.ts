import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Funcionario from "../entity/Funcionario";
import FuncionarioView from "../views/FuncionarioView";

export default {
  async login(request: Request, response: Response) {
    const { email, senha } = request.body;
    let existingUser;
    const funcionarioRepository = getRepository(Funcionario);
    try {
      existingUser = await funcionarioRepository.findOne({ email: email });
    } catch (error) {
      const mensagemErro = "Login falhou, tente novamente mais tarde";
      return response.status(500).json({ message: mensagemErro });
    }
    if (!existingUser || existingUser.senha !== senha) {
      const mensagemErro = "Dados invalidos";
      console.log(`${email}, ${senha}`);
      return response.status(401).json({ message: mensagemErro });
    }
    let data_user = {
      id: existingUser.id,
      nome: existingUser.nome,
      email: existingUser.email,
    };
    return response.status(200).json({ message: "Logado com sucesso!", data_user });
  },
  async index(request: Request, response: Response) {
    const funcionarioRepository = getRepository(Funcionario);
    const funcionario = await funcionarioRepository.find();
    return response.json(funcionario);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const funcionarioRepository = getRepository(Funcionario);
    const funcionario = await funcionarioRepository.findOneOrFail(id);
    return response.json(FuncionarioView.render(funcionario));
  },
  async create(request: Request, response: Response) {
    const { nome, email, senha, cpf, rg, sexo, data_nascimento,
      telefone, celular, endereco, bairro, numero, complemento,
      cep, pais, cidade, estado, cargo, salario,
      carteira_trabalho, data_cadastro, ponto_de_referencia, telefone_contato } = request.body;
    const funcionarioRepository = getRepository(Funcionario);
    const data = { nome, email, senha, cpf, rg, sexo, data_nascimento,
      telefone, celular, endereco, bairro, numero, complemento,
      cep, pais, cidade, estado, cargo, salario,
      carteira_trabalho, data_cadastro, ponto_de_referencia, telefone_contato };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      cpf: Yup.string().required(),
      rg: Yup.string().required(),
      sexo: Yup.string().required(),
      data_nascimento: Yup.date().required(),
      telefone: Yup.string().required(),
      celular: Yup.string().required(),
      endereco: Yup.string().required(),
      bairro: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      cep: Yup.string().required(),
      pais: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cargo: Yup.string().required(),
      salario: Yup.number().required(),
      carteira_trabalho: Yup.string().required(),
      ponto_de_referencia: Yup.string().required(),
      telefone_contato: Yup.string().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const funcionario = funcionarioRepository.create(data);
    await funcionarioRepository.save(funcionario);
    return response.status(201).json(funcionario);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const funcionarioRepository = getRepository(Funcionario);
    const funcionario = await funcionarioRepository.delete(id);
    return response.status(200).json(funcionario);
  },
  async update(request: Request, response: Response) {
    const { id, nome, email, senha, cpf, rg, sexo, data_nascimento,
      telefone, celular, endereco, bairro, numero, complemento,
      cep, pais, cidade, estado, cargo, salario,
      carteira_trabalho, ponto_de_referencia, telefone_contato } = request.body;
    const funcionarioRepository = getRepository(Funcionario);
    const data = { nome, email, senha, cpf, rg, sexo, data_nascimento,
      telefone, celular, endereco, bairro, numero, complemento,
      cep, pais, cidade, estado, cargo, salario,
      carteira_trabalho, ponto_de_referencia, telefone_contato };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      cpf: Yup.string().required(),
      rg: Yup.string().required(),
      sexo: Yup.string().required(),
      data_nascimento: Yup.date().required(),
      telefone: Yup.string().required(),
      celular: Yup.string().required(),
      endereco: Yup.string().required(),
      bairro: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      cep: Yup.string().required(),
      pais: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cargo: Yup.string().required(),
      salario: Yup.number().required(),
      carteira_trabalho: Yup.string().required(),
      ponto_de_referencia: Yup.string().required(),
      telefone_contato: Yup.string().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const funcionario = await funcionarioRepository.update(id, data);
    return response.status(201).json(funcionario);
  },
};