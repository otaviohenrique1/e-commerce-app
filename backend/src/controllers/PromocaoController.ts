import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Promocao from "../entity/Promocao";
import PromocaoView from "../views/PromocaoView";

export default {
  async index(request: Request, response: Response) {
    const promocaoRepository = getRepository(Promocao);
    const promocao = await promocaoRepository.find();
    return response.json(promocao);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const promocaoRepository = getRepository(Promocao);
    const promocao = await promocaoRepository.findOneOrFail(id);
    return response.json(PromocaoView.render(promocao));
  },
  async create(request: Request, response: Response) {
    const { nome, tema, produtos, inicio, termino, id_funcionario, data_cadastro } = request.body;
    const promocaoRepository = getRepository(Promocao);
    const data = { nome, tema, produtos, inicio, termino, id_funcionario, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      tema: Yup.string().required(),
      produtos: Yup.string().required(),
      inicio: Yup.date().required(),
      termino: Yup.date().required(),
      id_funcionario: Yup.number().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const promocao = promocaoRepository.create(data);
    await promocaoRepository.save(promocao);
    return response.status(201).json(promocao);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const promocaoRepository = getRepository(Promocao);
    const promocao = await promocaoRepository.delete(id);
    return response.status(200).json(promocao);
  },
  async update(request: Request, response: Response) {
    const { id, nome, tema, produtos, inicio, termino } = request.body;
    const promocaoRepository = getRepository(Promocao);
    const data = { nome, tema, produtos, inicio, termino };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      tema: Yup.string().required(),
      produtos: Yup.string().required(),
      inicio: Yup.date().required(),
      termino: Yup.date().required(),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const promocao = await promocaoRepository.update(id, data);
    return response.status(201).json(promocao);
  },
};