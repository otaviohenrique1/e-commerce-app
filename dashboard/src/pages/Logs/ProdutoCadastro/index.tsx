import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Alert } from "reactstrap";
import Campo from "../../../components/Campo";
import { Link } from "react-router-dom";
// import apiServer from "../../../services/api_server";
import '../../../styles/scss/usuario/style.scss';
// import { useHistory } from "react-router-dom";
import { Formik, Form} from "formik";
import * as Yup from "yup";

interface FormTypes {
  nome: string;
  quantidade: number;
  unidade: string;
  descricao: string;
  preco: number;
  fabricante: string;
}

export default function ProdutoCadastro() {
  // const history = useHistory();

  const initialValues = {
    nome: '',
    quantidade: 0,
    unidade: '',
    descricao: '',
    preco: 0,
    fabricante: '',
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    preco: Yup.number().required('O campo preco é obrigatorio'),
    descricao: Yup.string().required('O campo descricao é obrigatorio'),
    quantidade: Yup.number().required('O campo quantidade é obrigatorio'),
    unidade: Yup.string().required('O campo unidade é obrigatorio'),
    fabricante: Yup.string().required('O campo fabricante é obrigatorio')
  });

  async function handleSubmitForm(values: FormTypes) {
    alert('Cadastro realizado com sucesso!');
    // await apiServer.post('usuarios', {
    //   'nome': (values.nome).toString(),
    //   'email': (values.email).toString(),
    //   'senha': (md5(values.senha).toString())
    // })
    // .then(() => {
    //   alert('Cadastro realizado com sucesso!');
    //   history.push('/');
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    /*
    id_funcionario: number;
    data_cadastro: Date;
    */
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>Cadastro de Usuários</h1>
        </Col>
        <Col md={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmitForm(values)}
          >
            {({errors, touched}) => (
              <Form>
                <Campo
                  className="mt-2"
                  htmlFor="nome"
                  label="Nome"
                  typeInput="text"
                  nameInput="nome"
                  idInput="nome"
                  placeholderInput="Digite o nome do usuario"
                  erro={(errors.nome && touched.nome) ? (<Alert color="danger">{errors.nome}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="preco"
                  label="Preço"
                  typeInput="number"
                  nameInput="preco"
                  idInput="preco"
                  placeholderInput="Digite a preço do usuario"
                  erro={(errors.preco && touched.preco) ? (<Alert color="danger">{errors.preco}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="descricao"
                  label="Descrição"
                  typeInput="textarea"
                  nameInput="descricao"
                  idInput="descricao"
                  placeholderInput="Digite a descrição do usuario"
                  erro={(errors.descricao && touched.descricao) ? (<Alert color="danger">{errors.descricao}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="quantidade"
                  label="Quantidade"
                  typeInput="number"
                  nameInput="quantidade"
                  idInput="quantidade"
                  placeholderInput="Digite a quantidade do usuario"
                  erro={(errors.quantidade && touched.quantidade) ? (<Alert color="danger">{errors.quantidade}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="unidade"
                  label="Unidade"
                  typeInput="number"
                  nameInput="unidade"
                  idInput="unidade"
                  placeholderInput="Digite a unidade do usuario"
                  erro={(errors.unidade && touched.unidade) ? (<Alert color="danger">{errors.unidade}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="fabricante"
                  label="Fabricante"
                  typeInput="text"
                  nameInput="fabricante"
                  idInput="fabricante"
                  placeholderInput="Digite a fabricante do usuario"
                  erro={(errors.fabricante && touched.fabricante) ? (<Alert color="danger">{errors.fabricante}</Alert>) : null}
                />
                <ButtonGroup className="mt-5">
                  <Button color="primary" type="submit">Salvar</Button>
                  <Button color="danger" type="reset">Limpar</Button>
                  <Link to="/produtos" className="btn-item-link">
                    <Button
                      color="secondary"
                      type="button"
                      className="btn-voltar"
                    >
                      Voltar
                    </Button>
                  </Link>
                </ButtonGroup>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}
