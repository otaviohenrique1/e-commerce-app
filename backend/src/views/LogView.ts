import Log from "../entity/Log";

export default {
  render(log: Log) {
    return {
      id: log.id,
      id_funcionario: log.id_funcionario,
      tempo_acesso: log.tempo_acesso,
      data_acesso: log.data_acesso,
    };
  },
};