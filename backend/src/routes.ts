import { Router } from "express";
import ProdutoController from "./controllers/ProdutoController";
import FuncionarioController from "./controllers/FuncionarioController";
import UsuarioController from "./controllers/UsuarioController";
import FavoritoController from "./controllers/FavoritoController";
import CompraController from "./controllers/CompraController";
import PromocaoController from "./controllers/PromocaoController";
import LogController from "./controllers/LogController";
import CategoriaController from "./controllers/CategoriaController";

const routes = Router();

routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.show);
routes.post('/produtos', ProdutoController.create);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

routes.get('/funcionarios', FuncionarioController.index);
routes.get('/funcionarios/:id', FuncionarioController.show);
routes.post('/funcionarios/login', FuncionarioController.login);
routes.post('/funcionarios', FuncionarioController.create);
routes.put('/funcionarios/:id', FuncionarioController.update);
routes.delete('/funcionarios/:id', FuncionarioController.delete);

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.post('/usuarios/login', UsuarioController.login);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

routes.get('/favoritos', FavoritoController.index);
routes.get('/favoritos/:id', FavoritoController.show);
routes.post('/favoritos', FavoritoController.create);
routes.put('/favoritos/:id', FavoritoController.update);
routes.delete('/favoritos/:id', FavoritoController.delete);

routes.get('/compras', CompraController.index);
routes.get('/compras/:id', CompraController.show);
routes.post('/compras', CompraController.create);

routes.get('/promocoes', PromocaoController.index);
routes.get('/promocoes/:id', PromocaoController.show);
routes.post('/promocoes', PromocaoController.create);
routes.put('/promocoes/:id', PromocaoController.update);
routes.delete('/promocoes/:id', PromocaoController.delete);

routes.get('/logs', LogController.index);
routes.get('/logs/:id', LogController.show);
routes.post('/logs', LogController.create);

routes.get('/categoria', CategoriaController.index);
routes.get('/categoria/:id', CategoriaController.show);
routes.post('/categoria', CategoriaController.create);
routes.put('/categoria/:id', CategoriaController.update);
routes.delete('/categoria/:id', CategoriaController.delete);

export default routes;