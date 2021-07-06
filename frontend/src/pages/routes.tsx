import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ProdutoLista from "./Produtos/ProdutoLista";
import ProdutoDados from "./Produtos/ProdutoDados";
import UsuarioDados from "./Usuarios/UsuarioDados";
import Login from "./Login";
import UsuarioCadastro from "./Usuarios/UsuarioCadastro";
import PageContainer from '../components/PageContainer';
import PaginaTeste1 from "./PaginaTeste/PaginaTeste1";
import PaginaTeste2 from "./PaginaTeste/PaginaTeste2";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={PaginaTeste1} path="/pagina_teste1" exact/>
          <Route component={PaginaTeste2} path="/pagina_teste2" exact/>
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