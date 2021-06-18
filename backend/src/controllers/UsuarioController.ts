import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Usuario from "../entity/Usuario";
import UsuarioView from "../views/UsuarioView";

export default {
  async login(request: Request, response: Response) {
    const { email, senha } = request.body;
    let existingUser;
    const usuarioRepository = getRepository(Usuario);
    try {
      existingUser = await usuarioRepository.findOne({ email: email });
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
      ponto_de_referencia: Yup.string().required(),
      telefone_contato: Yup.string().required(),
      razao_social: Yup.string().required(),
      cnpj: Yup.string().required(),
      isento_inscricao_estadual: Yup.boolean().required(),
      numero_inscricao_estadual: Yup.string().required(),
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
      ponto_de_referencia: Yup.string().required(),
      telefone_contato: Yup.string().required(),
      razao_social: Yup.string().required(),
      cnpj: Yup.string().required(),
      isento_inscricao_estadual: Yup.boolean().required(),
      numero_inscricao_estadual: Yup.string().required(),
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