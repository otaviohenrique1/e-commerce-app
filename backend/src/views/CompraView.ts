import Compra from "../entity/Compra";

export default {
  render(compra: Compra) {
    return {
      id: compra.id,
      id_usuario: compra.id_usuario,
      produtos: compra.produtos,
      total_itens: compra.total_itens,
      total_preco: compra.total_preco,
      data_cadastro: compra.data_cadastro,
    };
  },
};