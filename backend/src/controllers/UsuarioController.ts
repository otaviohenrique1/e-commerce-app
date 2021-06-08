import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Usuario from "../entity/Usuario";
import UsuarioView from "../views/UsuarioView";

export default {
  async index(request: Request, response: Response) {
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.find();
    return response.json(usuario);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.findOneOrFail(id);
    return response.json(UsuarioView.render(usuario));
  },
  async create(request: Request, response: Response) {
    const { nome, email, senha, cpf, rg, sexo, data_nascimento, telefone,
      celular, endereco, bairro, numero, complemento, cep, pais, cidade,
      estado, ponto_de_referencia, telefone_contato, razao_social, cnpj,
      isento_inscricao_estadual, numero_inscricao_estadual, contribuinte,
      data_cadastro } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, email, senha, cpf, rg, sexo, data_nascimento, telefone,
      celular, endereco, bairro, numero, complemento, cep, pais, cidade,
      estado, ponto_de_referencia, telefone_contato, razao_social, cnpj,
      isento_inscricao_estadual, numero_inscricao_estadual, contribuinte,
      data_cadastro };
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
      ponto_de_referencia: Yup.string().required(),
      telefone_contato: Yup.number().required(),
      razao_social: Yup.string().required(),
      cnpj: Yup.number().required(),
      isento_inscricao_estadual: Yup.boolean().required(),
      numero_inscricao_estadual: Yup.number().required(),
      contribuinte: Yup.boolean().required(),
      data_cadastro: Yup.date().required(),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = usuarioRepository.create(data);
    await usuarioRepository.save(usuario);
    return response.status(201).json(usuario);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.delete(id);
    return response.status(200).json(usuario);
  },
  async update(request: Request, response: Response) {
    const { id, nome, email, senha, cpf, rg, sexo, data_nascimento, telefone,
      celular, endereco, bairro, numero, complemento, cep, pais, cidade,
      estado, ponto_de_referencia, telefone_contato, razao_social, cnpj,
      isento_inscricao_estadual, numero_inscricao_estadual, contribuinte } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, email, senha, cpf, rg, sexo, data_nascimento, telefone,
      celular, endereco, bairro, numero, complemento, cep, pais, cidade,
      estado, ponto_de_referencia, telefone_contato, razao_social, cnpj,
      isento_inscricao_estadual, numero_inscricao_estadual, contribuinte };
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
      ponto_de_referencia: Yup.string().required(),
      telefone_contato: Yup.number().required(),
      razao_social: Yup.string().required(),
      cnpj: Yup.number().required(),
      isento_inscricao_estadual: Yup.boolean().required(),
      numero_inscricao_estadual: Yup.number().required(),
      contribuinte: Yup.boolean().required(),
      data_cadastro: Yup.date().required(),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = await usuarioRepository.update(id, data);
    return response.status(201).json(usuario);
  },
};