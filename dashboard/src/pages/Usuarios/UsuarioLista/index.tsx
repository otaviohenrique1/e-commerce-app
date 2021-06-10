import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Alert } from "reactstrap";
import Campo from "../../../components/Campo";
import { Link } from "react-router-dom";
import apiServer from "../../../services/api_server";
import '../../../styles/scss/usuario/style.scss';
import { useHistory } from "react-router-dom";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import md5 from "md5";

interface FormTypes {
  nome: string;
  email: string;
  senha: string;
}

export default function CadastroUsuarios() {
  const history = useHistory();

  const initialValues = {
    nome: '',
    email: '',
    senha: '',
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    email: Yup.string().required('O campo email é obrigatorio'),
    senha: Yup.string().required('O campo senha é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    // const data = new FormData();
    // data.append('nome', (values.nome).toString());
    // data.append('email', (values.email).toString());
    // data.append('senha', (md5(values.senha).toString()));
    // await apiServer.post('usuarios', data)
    await apiServer.post('usuarios', {
      'nome': (values.nome).toString(),
      'email': (values.email).toString(),
      'senha': (md5(values.senha).toString())
    })
    .then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
    // .catch((error) => {
    //   console.log(error.response);
    // })
    // .catch((error) => {
    //   console.log(error.request);
    // })
    // .catch((error) => {
    //   console.log(error.message);
    // });
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
                  htmlFor="email"
                  label="Email"
                  typeInput="email"
                  nameInput="email"
                  idInput="email"
                  placeholderInput="Digite a email do usuario"
                  erro={(errors.email && touched.email) ? (<Alert color="danger">{errors.email}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="senha"
                  label="Senha"
                  typeInput="password"
                  nameInput="senha"
                  idInput="senha"
                  placeholderInput="Digite a senha do usuario"
                  erro={(errors.senha && touched.senha) ? (<Alert color="danger">{errors.senha}</Alert>) : null}
                />
                <ButtonGroup className="mt-5">
                  <Button color="primary" type="submit">Salvar</Button>
                  <Button color="danger" type="reset">Limpar</Button>
                  <Link to="/" className="btn-item-link">
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

/*
import { Container, Row, Col, Button, ButtonGroup, Form } from "reactstrap";
import Campo from "../../../components/Campo";
import { Link } from "react-router-dom";
import apiServer from "../../../services/api_server";
import '../../../styles/scss/usuario/style.scss';
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import md5 from "md5";

export default function CadastroUsuarios() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const history = useHistory();

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    const data = new FormData();
    data.append('nome', nome);
    data.append('email', email);
    data.append('senha', md5(senha));
    await apiServer.post('/usuarios', data)
    .then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    })
    .catch((error) => {
      console.log(error.response);
    });
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>Cadastro de Usuários</h1>
        </Col>
      </Row>
      <Form onSubmit={(values) => handleSubmitForm(values)}>
        <Campo
          className="mt-2"
          htmlFor="nome"
          label="Nome"
          typeInput="text"
          nameInput="nome"
          idInput="nome"
          placeholderInput="Digite o nome do usuario"
          required
          valueInput={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <Campo
          className="mt-2"
          htmlFor="email"
          label="Email"
          typeInput="email"
          nameInput="email"
          idInput="email"
          placeholderInput="Digite a email do usuario"
          required
          valueInput={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Campo
          className="mt-2"
          htmlFor="senha"
          label="Senha"
          typeInput="password"
          nameInput="senha"
          idInput="senha"
          placeholderInput="Digite a senha do usuario"
          required
          valueInput={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <ButtonGroup className="mt-5">
          <Button color="primary" type="submit">Salvar</Button>
          <Button color="danger" type="reset">Limpar</Button>
          <Link to="/" className="btn-item-link">
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
    </Container>
  );
}
*/