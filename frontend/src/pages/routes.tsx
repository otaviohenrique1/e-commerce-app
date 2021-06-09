import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ProdutoLista from "./Produtos/ProdutoLista";
import ProdutoDados from "./Produtos/ProdutoDados";
import UsuarioDados from "./Usuarios/UsuarioDados";
import Login from "./Login";
import UsuarioCadastro from "./Usuarios/UsuarioCadastro";
import PageContainer from '../components/PageContainer';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/" exact/>
          <Route component={UsuarioCadastro} path="/usuarios/cadastro" />
          <PageContainer>
            <Route component={Home} path="/home" exact/>
            <Route component={ProdutoDados} path="/produtos/:id" />
            <Route component={ProdutoLista} path="/produtos" exact />
            <Route component={UsuarioDados} path="/usuario/:id" exact/>
          </PageContainer>
        </Switch>
      </BrowserRouter>
    </>
  );
}