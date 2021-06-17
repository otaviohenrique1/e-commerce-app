import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import PageContainer from '../components/PageContainer';
import Home from "./Home";
import ProdutoLista from "./Produtos/ProdutoLista";
import ProdutoDados from "./Produtos/ProdutoDados";
import ProdutoCadastro from "./Produtos/ProdutoCadastro";
import FuncionarioLista from "./Funcionarios/FuncionarioLista";
import FuncionarioDados from "./Funcionarios/FuncionarioDados";
import FuncionarioCadastro from "./Funcionarios/FuncionarioCadastro";
import UsuarioLista from "./Usuarios/UsuarioLista";
import CategoriaLista from "./Categorias/CategoriaLista";
import CategoriaDados from "./Categorias/CategoriaDados";
import CategoriaCadastro from "./Categorias/CategoriaCadastro";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/" exact/>
          <PageContainer>
            <Route component={Home} path="/home" exact/>
            <Route component={ProdutoCadastro} path="/produtos/cadastro" exact/>
            <Route component={FuncionarioCadastro} path="/funcionarios/cadastro" exact/>
            <Route component={CategoriaCadastro} path="/categorias/cadastro" exact/>
            <Route component={ProdutoLista} path="/produtos" exact />
            <Route component={FuncionarioLista} path="/funcionarios" exact/>
            <Route component={CategoriaLista} path="/categorias" exact/>
            <Route component={ProdutoDados} path="/produtos/:id" exact/>
            <Route component={FuncionarioDados} path="/funcionarios/:id" exact/>
            <Route component={CategoriaDados} path="/categorias/:id" exact/>
            <Route component={UsuarioLista} path="/usuarios" exact/>
          </PageContainer>
        </Switch>
      </BrowserRouter>
    </>
  );
}