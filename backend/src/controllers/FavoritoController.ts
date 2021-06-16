import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Favorito from "../entity/Favorito";
import FavoritoView from "../views/FavoritoView";

export default {
  async index(request: Request, response: Response) {
    const favoritoRepository = getRepository(Favorito);
    const favorito = await favoritoRepository.find();
    return response.json(favorito);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const favoritoRepository = getRepository(Favorito);
    const favorito = await favoritoRepository.findOneOrFail(id);
    return response.json(FavoritoView.render(favorito));
  },
  async create(request: Request, response: Response) {
    const { id_produto, id_usuario, favoritado, categoria, data_cadastro } = request.body;
    const favoritoRepository = getRepository(Favorito);
    const data = { id_produto, id_usuario, favoritado, categoria, data_cadastro };
    const schema = Yup.object().shape({
      id_produto: Yup.number().required(),
      id_usuario: Yup.number().required(),
      favoritado: Yup.boolean().required(),
      categoria: Yup.string().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const favorito = favoritoRepository.create(data);
    await favoritoRepository.save(favorito);
    return response.status(201).json(favorito);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const favoritoRepository = getRepository(Favorito);
    const favorito = await favoritoRepository.delete(id);
    return response.status(200).json(favorito);
  },
  async update(request: Request, response: Response) {
    const { id, id_produto, id_usuario, favoritado, categoria, data_cadastro } = request.body;
    const favoritoRepository = getRepository(Favorito);
    const data = { id_produto, id_usuario, favoritado, categoria, data_cadastro };
    const schema = Yup.object().shape({
      id_produto: Yup.number().required(),
      id_usuario: Yup.number().required(),
      favoritado: Yup.boolean().required(),
      categoria: Yup.string().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const favorito = await favoritoRepository.update(id, data);
    return response.status(201).json(favorito);
  },
};