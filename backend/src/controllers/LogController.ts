import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Log from "../entity/Log";
import LogView from "../views/LogView";

export default {
  async index(request: Request, response: Response) {
    const logRepository = getRepository(Log);
    const log = await logRepository.find();
    return response.json(log);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const logRepository = getRepository(Log);
    const log = await logRepository.findOneOrFail(id);
    return response.json(LogView.render(log));
  },
  async create(request: Request, response: Response) {
    const { id_funcionario, tempo_acesso, data_acesso } = request.body;
    const logRepository = getRepository(Log);
    const data = { id_funcionario, tempo_acesso, data_acesso };
    const schema = Yup.object().shape({
      id_funcionario: Yup.string().required(),
      tempo_acesso: Yup.date().required(),
      data_acesso: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const log = logRepository.create(data);
    await logRepository.save(log);
    return response.status(201).json(log);
  },
};