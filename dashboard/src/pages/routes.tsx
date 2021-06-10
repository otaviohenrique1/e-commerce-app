import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProdutoLista from "./Produtos/ProdutoLista";
import ProdutoDados from "./Produtos/ProdutoDados";
import ProdutoCadastro from "./Produtos/ProdutoCadastro";
import FuncionarioLista from "./Funcionarios/FuncionarioLista";
import FuncionarioDados from "./Funcionarios/FuncionarioDados";
import FuncionarioCadastro from "./Funcionarios/FuncionarioCadastro";
import PageContainer from '../components/PageContainer';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/" exact/>
          <PageContainer>
            <Route component={Home} path="/home" exact/>
            <Route component={ProdutoLista} path="/produtos" exact />
            <Route component={ProdutoDados} path="/produtos/:id" exact/>
            <Route component={ProdutoCadastro} path="/produtos/cadastro" exact/>
            <Route component={FuncionarioLista} path="/funcionarios" exact/>
            <Route component={FuncionarioDados} path="/funcionarios/:id" exact/>
            <Route component={FuncionarioCadastro} path="/funcionarios/cadastro" exact/>
          </PageContainer>
        </Switch>
      </BrowserRouter>
    </>
  );
}