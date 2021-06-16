import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Categoria from "../entity/Categoria";
import CategoriaView from "../views/CategoriaView";

export default {
  async index(request: Request, response: Response) {
    const categoriaRepository = getRepository(Categoria);
    const categoria = await categoriaRepository.find();
    return response.json(categoria);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const categoriaRepository = getRepository(Categoria);
    const categoria = await categoriaRepository.findOneOrFail(id);
    return response.json(CategoriaView.render(categoria));
  },
  async create(request: Request, response: Response) {
    const { nome, tipo, id_funcionario, data_cadastro } = request.body;
    const categoriaRepository = getRepository(Categoria);
    const data = { nome, tipo, id_funcionario, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      tipo: Yup.string().required(),
      id_funcionario: Yup.number().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const categoria = categoriaRepository.create(data);
    await categoriaRepository.save(categoria);
    return response.status(201).json(categoria);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const categoriaRepository = getRepository(Categoria);
    const categoria = await categoriaRepository.delete(id);
    return response.status(200).json(categoria);
  },
  async update(request: Request, response: Response) {
    const { id, nome, tipo, id_funcionario, data_cadastro } = request.body;
    const categoriaRepository = getRepository(Categoria);
    const data = { nome, tipo, id_funcionario, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      tipo: Yup.string().required(),
      id_funcionario: Yup.number().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const categoria = await categoriaRepository.update(id, data);
    return response.status(201).json(categoria);
  },
};