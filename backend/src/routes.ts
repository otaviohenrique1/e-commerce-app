import { Router } from "express";
import ProdutoController from "./controllers/ProdutoController";
import FuncionarioController from "./controllers/FuncionarioController";
import UsuarioController from "./controllers/UsuarioController";

const routes = Router();

routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.show);
routes.post('/produtos', ProdutoController.create);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

routes.get('/funcionarios', FuncionarioController.index);
routes.get('/funcionarios/:id', FuncionarioController.show);
routes.post('/funcionarios', FuncionarioController.create);
routes.put('/funcionarios/:id', FuncionarioController.update);
routes.delete('/funcionarios/:id', FuncionarioController.delete);

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

export default routes;