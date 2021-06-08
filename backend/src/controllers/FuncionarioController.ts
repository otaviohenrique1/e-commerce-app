import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Funcionario from "../entity/Funcionario";
import FuncionarioView from "../views/FuncionarioView";

export default {
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
      carteira_trabalho } = request.body;
    const funcionarioRepository = getRepository(Funcionario);
    const data = { nome, email, senha, cpf, rg, sexo, data_nascimento,
      telefone, celular, endereco, bairro, numero, complemento,
      cep, pais, cidade, estado, cargo, salario,
      carteira_trabalho };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      cpf: Yup.number().required(),
      rg: Yup.number().required(),
      sexo: Yup.string().required(),
      data_nascimento: Yup.date().required(),
      telefone: Yup.number().required(),
      celular: Yup.number().required(),
      endereco: Yup.string().required(),
      bairro: Yup.string().required(),
      numero: Yup.number().required(),
      complemento: Yup.string().required(),
      cep: Yup.number().required(),
      pais: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cargo: Yup.string().required(),
      salario: Yup.number().required(),
      carteira_trabalho: Yup.number().required()
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
      carteira_trabalho } = request.body;
    const funcionarioRepository = getRepository(Funcionario);
    const data = { nome, email, senha, cpf, rg, sexo, data_nascimento,
      telefone, celular, endereco, bairro, numero, complemento,
      cep, pais, cidade, estado, cargo, salario,
      carteira_trabalho };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      cpf: Yup.number().required(),
      rg: Yup.number().required(),
      sexo: Yup.string().required(),
      data_nascimento: Yup.date().required(),
      telefone: Yup.number().required(),
      celular: Yup.number().required(),
      endereco: Yup.string().required(),
      bairro: Yup.string().required(),
      numero: Yup.number().required(),
      complemento: Yup.string().required(),
      cep: Yup.number().required(),
      pais: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cargo: Yup.string().required(),
      salario: Yup.number().required(),
      carteira_trabalho: Yup.number().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const funcionario = await funcionarioRepository.update(id, data);
    return response.status(201).json(funcionario);
  },
};