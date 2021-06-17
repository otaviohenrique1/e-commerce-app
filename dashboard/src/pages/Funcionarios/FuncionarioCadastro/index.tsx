import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Alert } from "reactstrap";
// import { Container, Row, Col, Button, ButtonGroup, Alert, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import Campo from "../../../components/Campo";
import { Link } from "react-router-dom";
// import apiServer from "../../../services/api_server";
import '../../../styles/scss/funcionarios/style.scss';
// import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { estado_lista, sexo_lista } from "../../../utils/listas";
// import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import CampoSelect from "../../../components/CampoSelect";

interface FormTypes {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  rg: string;
  sexo: string;
  data_nascimento: Date;
  telefone: string;
  celular: string;
  endereco: string;
  bairro: string;
  numero: string;
  complemento: string;
  cep: string;
  pais: string;
  cidade: string;
  estado: string;
  cargo: string;
  salario: number;
  carteira_trabalho: string;
  ponto_de_referencia: string;
  telefone_contato: string;
}

export default function FuncionarioCadastro() {
  // const history = useHistory();

  const initialValues = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    rg: '',
    sexo: '',
    data_nascimento: new Date(`${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`),
    telefone: '',
    celular: '',
    endereco: '',
    bairro: '',
    numero: '',
    complemento: '',
    cep: '',
    pais: '',
    cidade: '',
    estado: '',
    cargo: '',
    salario: 0,
    carteira_trabalho: '',
    ponto_de_referencia: '',
    telefone_contato: ''
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    email: Yup.string().required('O campo email é obrigatorio'),
    senha: Yup.string().required('O campo senha é obrigatorio'),
    cpf: Yup.string().required('O campo cpf é obrigatorio'),
    rg: Yup.string().required('O campo rg é obrigatorio'),
    sexo: Yup.string().required('O campo sexo é obrigatorio'),
    data_nascimento: Yup.date().required('O campo data_nascimento é obrigatorio'),
    telefone: Yup.string().required('O campo telefone é obrigatorio'),
    celular: Yup.string().required('O campo celular é obrigatorio'),
    endereco: Yup.string().required('O campo endereco é obrigatorio'),
    bairro: Yup.string().required('O campo bairro é obrigatorio'),
    numero: Yup.string().required('O campo numero é obrigatorio'),
    complemento: Yup.string().required('O campo complemento é obrigatorio'),
    cep: Yup.string().required('O campo cep é obrigatorio'),
    pais: Yup.string().required('O campo pais é obrigatorio'),
    cidade: Yup.string().required('O campo cidade é obrigatorio'),
    estado: Yup.string().required('O campo estado é obrigatorio'),
    cargo: Yup.string().required('O campo cargo é obrigatorio'),
    salario: Yup.number().required('O campo salario é obrigatorio'),
    carteira_trabalho: Yup.string().required('O campo carteira_trabalho é obrigatorio'),
    ponto_de_referencia: Yup.string().required('O campo ponto_de_referencia é obrigatorio'),
    telefone_contato: Yup.string().required('O campo telefone_contato é obrigatorio')
  });

  async function handleSubmitForm(values: FormTypes) {
    alert('Cadastro realizado com sucesso!');
    console.log(values);
    
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
                  placeholderInput="Digite o nome"
                  erro={(errors.nome && touched.nome) ? (<Alert color="danger">{errors.nome}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="email"
                  label="Email"
                  typeInput="email"
                  nameInput="email"
                  idInput="email"
                  placeholderInput="Digite o email"
                  erro={(errors.email && touched.email) ? (<Alert color="danger">{errors.email}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="senha"
                  label="Senha"
                  typeInput="password"
                  nameInput="senha"
                  idInput="senha"
                  placeholderInput="Digite o senha"
                  erro={(errors.senha && touched.senha) ? (<Alert color="danger">{errors.senha}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="cpf"
                  label="cpf"
                  typeInput="number"
                  nameInput="cpf"
                  idInput="cpf"
                  placeholderInput="Digite o cpf"
                  erro={(errors.cpf && touched.cpf) ? (<Alert color="danger">{errors.cpf}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="rg"
                  label="rg"
                  typeInput="number"
                  nameInput="rg"
                  idInput="rg"
                  placeholderInput="Digite o rg"
                  erro={(errors.rg && touched.rg) ? (<Alert color="danger">{errors.rg}</Alert>) : null}
                />
                <CampoSelect
                  className="mt-2"
                  htmlFor="sexo"
                  label="Sexo"
                  nameInput="sexo"
                  idInput="sexo"
                  erro={(errors.sexo && touched.sexo) ? (<Alert color="danger">{errors.sexo}</Alert>) : null}
                  lista={sexo_lista}
                />
                {/* <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <Label htmlFor="sexo">Sexo</Label>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Field
                      className="form-control"
                      type="select"
                      name="sexo"
                      id="sexo"
                    >
                      <option>Selecione</option>
                      <option>Masculino</option>
                      <option>Feminino</option>
                    </Field>
                  </InputGroup>
                  <span>{(errors.sexo && touched.sexo) ? (<Alert color="danger">{errors.sexo}</Alert>) : null}</span>
                </FormGroup> */}
                <Campo
                  className="mt-2"
                  htmlFor="data_nascimento"
                  label="Data de nascimento"
                  typeInput="date"
                  nameInput="data_nascimento"
                  idInput="data_nascimento"
                  placeholderInput="Digite a data de nascimento"
                  erro={(errors.data_nascimento && touched.data_nascimento) ? (<Alert color="danger">{errors.data_nascimento}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="telefone"
                  label="Telefone"
                  typeInput="number"
                  nameInput="telefone"
                  idInput="telefone"
                  placeholderInput="Digite o telefone"
                  erro={(errors.telefone && touched.telefone) ? (<Alert color="danger">{errors.telefone}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="celular"
                  label="Celular"
                  typeInput="number"
                  nameInput="celular"
                  idInput="celular"
                  placeholderInput="Digite a data de nascimento"
                  erro={(errors.celular && touched.celular) ? (<Alert color="danger">{errors.celular}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="endereco"
                  label="Endereço"
                  typeInput="text"
                  nameInput="endereco"
                  idInput="endereco"
                  placeholderInput="Digite o endereco"
                  erro={(errors.endereco && touched.endereco) ? (<Alert color="danger">{errors.endereco}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="bairro"
                  label="Bairro"
                  typeInput="text"
                  nameInput="bairro"
                  idInput="bairro"
                  placeholderInput="Digite o bairro"
                  erro={(errors.bairro && touched.bairro) ? (<Alert color="danger">{errors.bairro}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="numero"
                  label="Numero"
                  typeInput="number"
                  nameInput="numero"
                  idInput="numero"
                  placeholderInput="Digite o numero"
                  erro={(errors.numero && touched.numero) ? (<Alert color="danger">{errors.numero}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="complemento"
                  label="Complemento"
                  typeInput="text"
                  nameInput="complemento"
                  idInput="complemento"
                  placeholderInput="Digite o complemento"
                  erro={(errors.complemento && touched.complemento) ? (<Alert color="danger">{errors.complemento}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="cep"
                  label="CEP"
                  typeInput="number"
                  nameInput="cep"
                  idInput="cep"
                  placeholderInput="Digite o cep"
                  erro={(errors.cep && touched.cep) ? (<Alert color="danger">{errors.cep}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="cidade"
                  label="Cidade"
                  typeInput="text"
                  nameInput="cidade"
                  idInput="cidade"
                  placeholderInput="Digite o cidade"
                  erro={(errors.cidade && touched.cidade) ? (<Alert color="danger">{errors.cidade}</Alert>) : null}
                />
                <CampoSelect
                  className="mt-2"
                  htmlFor="estado"
                  label="Estado"
                  nameInput="estado"
                  idInput="estado"
                  erro={(errors.estado && touched.estado) ? (<Alert color="danger">{errors.estado}</Alert>) : null}
                  lista={estado_lista}
                />
                {/* Arrumar com select */}
                {/* <Campo
                  className="mt-2"
                  htmlFor="estado"
                  label="Estado"
                  typeInput="text"
                  nameInput="estado"
                  idInput="estado"
                  placeholderInput="Digite o estado"
                  erro={(errors.estado && touched.estado) ? (<Alert color="danger">{errors.estado}</Alert>) : null}
                /> */}
                <Campo
                  className="mt-2"
                  htmlFor="cargo"
                  label="Cargo"
                  typeInput="text"
                  nameInput="cargo"
                  idInput="cargo"
                  placeholderInput="Digite o cargo"
                  erro={(errors.cargo && touched.cargo) ? (<Alert color="danger">{errors.cargo}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="salario"
                  label="Salario"
                  typeInput="number"
                  nameInput="salario"
                  idInput="salario"
                  placeholderInput="Digite o salario"
                  erro={(errors.salario && touched.salario) ? (<Alert color="danger">{errors.salario}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="carteira_trabalho"
                  label="Carteira de trabalho"
                  typeInput="number"
                  nameInput="carteira_trabalho"
                  idInput="carteira_trabalho"
                  placeholderInput="Digite a carteira de trabalho"
                  erro={(errors.carteira_trabalho && touched.carteira_trabalho) ? (<Alert color="danger">{errors.carteira_trabalho}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="ponto_de_referencia"
                  label="Ponto de referencia"
                  typeInput="number"
                  nameInput="ponto_de_referencia"
                  idInput="ponto_de_referencia"
                  placeholderInput="Digite o ponto de referencia"
                  erro={(errors.ponto_de_referencia && touched.ponto_de_referencia) ? (<Alert color="danger">{errors.ponto_de_referencia}</Alert>) : null}
                />
                <Campo
                  className="mt-2"
                  htmlFor="telefone_contato"
                  label="Telefone de contato"
                  typeInput="number"
                  nameInput="telefone_contato"
                  idInput="telefone_contato"
                  placeholderInput="Digite o telefone de contato"
                  erro={(errors.telefone_contato && touched.telefone_contato) ? (<Alert color="danger">{errors.telefone_contato}</Alert>) : null}
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
