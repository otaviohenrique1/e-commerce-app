import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Alert } from "reactstrap";
import Campo from "../../../components/Campo";
import { Link } from "react-router-dom";
// import apiServer from "../../../services/api_server";
// import '../../../styles/scss/usuario/style.scss';
import { useHistory } from "react-router-dom";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { useAppContext } from "../../../contexts/AppContext";

interface FormTypes {
  nome: string;
  tema: string;
  produtos: string;
  descricao: string;
  inicio: Date;
  termino: Date;
}

export default function PromocaoCadastro() {
  const history = useHistory();
  const { usuarioData } = useAppContext();

  const initialValues = {
    nome: '',
    tema: '',
    produtos: '',
    descricao: '',
    inicio: new Date(`${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`),
    termino: new Date(`${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`)
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    tema: Yup.string().required('O campo tema é obrigatorio'),
    produtos: Yup.string().required('O campo produtos é obrigatorio'),
    descricao: Yup.string().required('O campo descricao é obrigatorio'),
    inicio: Yup.date().required('O campo inicio é obrigatorio'),
    termino: Yup.date().required('O campo termino é obrigatorio')
  });

  async function handleSubmitForm(values: FormTypes) {
    alert('Cadastro realizado com sucesso!');
    console.log(values);
    console.log(usuarioData.id);
    console.log(new Date(`${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()} ${new Date().getSeconds()} : ${new Date().getMinutes()} : ${new Date().getHours()}`));
    history.push('/');

    // await apiServer.post('usuarios', {
    //  'nome': (values.nome).toString(),
    //  'tema': (values.tema).toString(),
    //  'produtos': (values.produtos).toString(),
    //  'inicio': (values.inicio).toString(),
    //  'termino': (values.termino).toString()
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
                  htmlFor="tema"
                  label="Tema da promoção"
                  typeInput="text"
                  nameInput="tema"
                  idInput="tema"
                  placeholderInput="Digite a preço do usuario"
                  erro={(errors.tema && touched.tema) ? (<Alert color="danger">{errors.tema}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="produtos"
                  label="Produtos da promoção"
                  typeInput="textarea"
                  nameInput="produtos"
                  idInput="produtos"
                  placeholderInput="Digite a descrição do usuario"
                  erro={(errors.produtos && touched.produtos) ? (<Alert color="danger">{errors.produtos}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="descricao"
                  label="descrição da promoção"
                  typeInput="textarea"
                  nameInput="descricao"
                  idInput="descricao"
                  placeholderInput="Digite a descrição do usuario"
                  erro={(errors.descricao && touched.descricao) ? (<Alert color="danger">{errors.descricao}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="inicio"
                  label="Inicio"
                  typeInput="date"
                  nameInput="inicio"
                  idInput="inicio"
                  placeholderInput="Digite a inicio do usuario"
                  erro={(errors.inicio && touched.inicio) ? (<Alert color="danger">{errors.inicio}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="termino"
                  label="Termino"
                  typeInput="number"
                  nameInput="termino"
                  idInput="termino"
                  placeholderInput="Digite a termino do usuario"
                  erro={(errors.termino && touched.termino) ? (<Alert color="danger">{errors.termino}</Alert>) : null}
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
