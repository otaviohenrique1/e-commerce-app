import Favorito from "../entity/Favorito";

export default {
  render(favorito: Favorito) {
    return {
      id: favorito.id,
      id_usuario: favorito.id_usuario,
      id_produto: favorito.id_produto,
      favoritado: favorito.favoritado,
      categoria: favorito.categoria,
      data_cadastro: favorito.data_cadastro,
    };
  },
};