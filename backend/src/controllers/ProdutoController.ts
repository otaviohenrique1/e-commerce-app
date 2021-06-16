import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Produto from "../entity/Produto";
import ProdutoView from "../views/ProdutoView";

export default {
  async index(request: Request, response: Response) {
    const produtoRepository = getRepository(Produto);
    const produto = await produtoRepository.find();
    return response.json(produto);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const produtoRepository = getRepository(Produto);
    const produto = await produtoRepository.findOneOrFail(id);
    return response.json(ProdutoView.render(produto));
  },
  async create(request: Request, response: Response) {
    const { nome, preco, quantidade, unidade, descricao, fabricante, categoria, id_funcionario, data_cadastro } = request.body;
    const produtoRepository = getRepository(Produto);
    const data = { nome, preco, quantidade, unidade, descricao, fabricante, categoria, id_funcionario, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      preco: Yup.number().required(),
      quantidade: Yup.number().required(),
      unidade: Yup.string().required(),
      descricao: Yup.string().required(),
      fabricante: Yup.string().required(),
      categoria: Yup.string().required(),
      id_funcionario: Yup.number().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const produto = produtoRepository.create(data);
    await produtoRepository.save(produto);
    return response.status(201).json(produto);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const produtoRepository = getRepository(Produto);
    const produto = await produtoRepository.delete(id);
    return response.status(200).json(produto);
  },
  async update(request: Request, response: Response) {
    const { id, nome, preco, descricao, quantidade, unidade, fabricante, categoria } = request.body;
    const produtoRepository = getRepository(Produto);
    const data = { nome, preco, descricao, quantidade, unidade, fabricante, categoria };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      preco: Yup.number().required(),
      descricao: Yup.string().required(),
      quantidade: Yup.number().required(),
      unidade: Yup.string().required(),
      fabricante: Yup.string().required(),
      categoria: Yup.string().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const produto = await produtoRepository.update(id, data);
    return response.status(201).json(produto);
  },
};