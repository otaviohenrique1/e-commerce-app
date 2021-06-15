import Promocao from "../entity/Promocao";

export default {
  render(promocao: Promocao) {
    return {
      id: promocao.id,
      nome: promocao.nome,
      tema: promocao.tema,
      produtos: promocao.produtos,
      inicio: promocao.inicio,
      termino: promocao.termino,
      id_funcionario: promocao.id_funcionario,
      data_cadastro: promocao.data_cadastro,
    };
  },
};