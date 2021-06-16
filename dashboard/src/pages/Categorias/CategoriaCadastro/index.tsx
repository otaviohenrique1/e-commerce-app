import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Alert } from "reactstrap";
import Campo from "../../../components/Campo";
import { Link } from "react-router-dom";
import apiServer from "../../../services/api_server";
import '../../../styles/scss/usuario/style.scss';
import { useHistory } from "react-router-dom";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import CampoSelect from "../../../components/CampoSelect";
import { tipo_categoria_lista } from "../../../utils/listas";
import { useAppContext } from "../../../contexts/AppContext";

interface FormTypes {
  nome: string;
  tipo: string;
}

export default function ProdutoCadastro() {
  const history = useHistory();
  const { usuarioData } = useAppContext();

  const initialValues = {
    nome: '',
    tipo: '',
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    tipo: Yup.string().required('O campo tipo é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    await apiServer.post('categorias', {
      'nome': (values.nome).toString(),
      'tipo': (values.tipo).toString(),
      'id_funcionario': usuarioData.id,
      'data_cadastro': new Date(`${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()} ${new Date().getSeconds()} : ${new Date().getMinutes()} - ${new Date().getHours()}`)
    })
    .then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/home');
    })
    .catch((error) => {
      console.log(error);
    });
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
                <CampoSelect
                  className="mt-2"
                  htmlFor="tipo"
                  label="Tipo"
                  nameInput="tipo"
                  idInput="tipo"
                  erro={(errors.tipo && touched.tipo) ? (<Alert color="danger">{errors.tipo}</Alert>) : null}
                  lista={tipo_categoria_lista}
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
