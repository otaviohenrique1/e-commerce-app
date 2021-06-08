import Produto from "../entity/Produto";

export default {
  render(produto: Produto) {
    return {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: produto.quantidade,
      unidade: produto.unidade,
      fabricante: produto.fabricante,
      id_funcionario: produto.id_funcionario,
      data_cadastro: produto.data_cadastro,
    };
  },
};