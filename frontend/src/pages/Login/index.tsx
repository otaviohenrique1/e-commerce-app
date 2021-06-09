import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Alert } from "reactstrap";
import Campo from "../../components/Campo";
import { Link, useHistory } from "react-router-dom";
import '../../styles/scss/login/style.scss';
import { BsChatSquareDots } from "react-icons/bs";
import apiServer from "../../services/api_server";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { useAppContext } from "../../contexts/AppContext";
// import md5 from "md5";

interface FormTypes {
  email: string;
  senha: string;
}

export default function Login() {
  const { setUsuarioData } = useAppContext();

  const initialValues = {
    email: '',
    senha: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email()
      .required('O campo email é obrigatorio'),
    senha: Yup
      .string()
      .min(8)
      .max(32)
      // .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
      .required('O campo senha é obrigatorio'),
  });

  const history = useHistory();

  async function handleSubmitForm(values: FormTypes) {
    return apiServer.post('usuarios/login', {
      email: values.email,
      senha: values.senha,
    }, {
      auth: {
        username: values.email,
        password: values.senha,
        // password: (md5(values.senha)).toString()
      }
    })
    .then((data) => {
      // console.log(data.data.dataUser);
      // console.log(values.email);
      // console.log(values.senha);
      // console.log(md5(values.senha));
      setUsuarioData({
        id: data.data.dataUser.id,
        nome: data.data.dataUser.nome,
        email: data.data.dataUser.email,
      });
      history.push('/home');
    })
    .catch((error) => {
      alert('Usuario ou senha invalidos');
      // console.log(error);
      // console.log(values.email);
      // console.log(values.senha);
      // console.log(md5(values.senha));
      // return;
    });
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-3 mt-5">
          <h1><BsChatSquareDots size={40} className='mr-3'/>Marvel-App</h1>
        </Col>
        <Col md={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
            // onSubmit={(values) => handleSubmitForm(values)}
          >
            {({errors, touched}) => (
              <Form>
                <Campo
                  className="mt-5"
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
                <Row className="mt-5">
                  <Col md={12} className="button-container">
                    <ButtonGroup>
                      <Button
                        color="primary"
                        type="submit"
                        className="btn-entrar"
                      >
                        Entrar
                      </Button>
                      <Button color="danger" type="reset">Limpar</Button>
                      <Link to="/usuarios/cadastro" className="botao-link">
                        <Button
                          color="info"
                          type="button"
                          className="btn-novo-usuario"
                        >
                          Novo usuario
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}
