import React, { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup, Alert, Nav, NavLink, TabContent, TabPane, NavItem } from "reactstrap";
import Campo from "../../../components/Campo";
import { Link } from "react-router-dom";
// import apiServer from "../../../services/api_server";
import '../../../styles/scss/usuario/style.scss';
// import { useHistory } from "react-router-dom";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { FormTypesPessoaFisica, FormTypesPessoaJuridica } from "./FormTypes";
// import { FormTypes, FormTypesPessoaFisica, FormTypesPessoaJuridica } from "./FormTypes";
// import md5 from "md5";
import classnames from 'classnames';
import CampoSelect from "../../../components/CampoSelect";
import { estado_lista, sexo_lista } from "../../../utils/listas";

export default function CadastroUsuarios() {
  // const history = useHistory();
  const [activeTab, setActiveTab] = useState<string>('1');

  const toggle = (tab: string) => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  let dia = new Date(`${new Date().getDate()}`);
  let mes = new Date(`${new Date().getMonth() + 1}`);
  let ano = new Date(`${new Date().getFullYear()}`);
  let dataInicial = new Date(`${dia}/${mes}/${ano}`);

  const initialValuesPessoaFisica = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    rg: '',
    sexo: '',
    data_nascimento: dataInicial,
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
    ponto_de_referencia: '',
    telefone_contato: '',
    data_cadastro: dataInicial,
  };

  const initialValuesPessoaJuridica = {
    razao_social: '',
    cnpj: '',
    email: '',
    senha: '',
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
    ponto_de_referencia: '',
    telefone_contato: '',
    isento_inscricao_estadual: false,
    numero_inscricao_estadual: '',
    contribuinte: false,
    data_cadastro: dataInicial,
  };

  const validationSchemaPessoaFisica = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    email: Yup.string().required('O campo email é obrigatorio'),
    senha: Yup.string().required('O campo senha é obrigatorio'),
    cpf: Yup.string().required('O campo cpf é obrigatorio'),
    rg: Yup.string().required('O campo rg é obrigatorio'),
    sexo: Yup.string().required('O campo sexo é obrigatorio'),
    data_nascimento: Yup.date().required('O campo data de nascimento é obrigatorio'),
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
    ponto_de_referencia: Yup.string().required('O campo ponto de referencia é obrigatorio'),
    telefone_contato: Yup.string().required('O campo telefone de contato é obrigatorio'),
    data_cadastro: Yup.date().required('O campo data_cadastro é obrigatorio'),
  });

  const validationSchemaPessoaJuridica = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    email: Yup.string().required('O campo email é obrigatorio'),
    senha: Yup.string().required('O campo senha é obrigatorio'),
    cpf: Yup.string().required('O campo cpf é obrigatorio'),
    rg: Yup.string().required('O campo rg é obrigatorio'),
    sexo: Yup.string().required('O campo sexo é obrigatorio'),
    data_nascimento: Yup.date().required('O campo data de nascimento é obrigatorio'),
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
    ponto_de_referencia: Yup.string().required('O campo ponto de referencia é obrigatorio'),
    telefone_contato: Yup.string().required('O campo telefone de contato é obrigatorio'),
    razao_social: Yup.string().required('O campo razao social é obrigatorio'),
    cnpj: Yup.string().required('O campo cnpj é obrigatorio'),
    isento_inscricao_estadual: Yup.boolean().required('O campo isento_inscricao_estadual é obrigatorio'),
    numero_inscricao_estadual: Yup.string().required('O campo numero_inscricao_estadual é obrigatorio'),
    contribuinte: Yup.boolean().required('O campo contribuinte é obrigatorio'),
    data_cadastro: Yup.date().required('O campo data_cadastro é obrigatorio'),
  });

  async function handleSubmitFormPessoaFisica(values: FormTypesPessoaFisica) {
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
    /* Colocar o data_cadastro */
  }

  async function handleSubmitFormPessoaJuridica(values: FormTypesPessoaJuridica) {
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
    /* Colocar o data_cadastro */
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>Cadastro de Usuários</h1>
        </Col>
        <Col md={12}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >Pessoa Fisica</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >Pessoa Juridica</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              {/* Pessoa Fisica */}
              <Formulario
                initialValues={initialValuesPessoaFisica}
                validationSchema={validationSchemaPessoaFisica}
                handleSubmitForm={(values: FormTypesPessoaFisica) => handleSubmitFormPessoaFisica(values)}
                tipoFormulario={"1"}
              />
            </TabPane>
            <TabPane tabId="2">
              {/* Pessoa Juridica */}
              <Formulario
                initialValues={initialValuesPessoaJuridica}
                validationSchema={validationSchemaPessoaJuridica}
                handleSubmitForm={(values: FormTypesPessoaJuridica) => handleSubmitFormPessoaJuridica(values)}
                tipoFormulario={"2"}
              />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
}

interface FormularioProps {
  initialValues: any;
  validationSchema: any;
  handleSubmitForm: any;
  tipoFormulario?: string;
}

function Formulario({initialValues, validationSchema, handleSubmitForm, tipoFormulario}: FormularioProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmitForm}
    >
      {({errors, touched}) => (
        <Form>
          {(tipoFormulario === "1") && (
            <>
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
            </>
          )}
          {(tipoFormulario === "2") && (
            <>
              <Campo
                className="mt-2"
                htmlFor="razao_social"
                label="Razão social"
                typeInput="text"
                nameInput="razao_social"
                idInput="razao_social"
                placeholderInput="Digite o razão social do usuario"
                erro={(errors.razao_social && touched.razao_social) ? (<Alert color="danger">{errors.razao_social}</Alert>) : null}
              />
              <Campo
                className="mt-2"
                htmlFor="cnpj"
                label="CNPJ"
                typeInput="number"
                nameInput="cnpj"
                idInput="cnpj"
                placeholderInput="Digite o CNPJ do usuario"
                erro={(errors.cnpj && touched.cnpj) ? (<Alert color="danger">{errors.cnpj}</Alert>) : null}
              />
            </>
          )}
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
          {(tipoFormulario === "2") && (
            <>
              <Campo
                className="mt-2"
                htmlFor="isento_inscricao_estadual"
                label="isento_inscricao_estadual"
                typeInput="checkbox"
                nameInput="isento_inscricao_estadual"
                idInput="isento_inscricao_estadual"
                erro={(errors.isento_inscricao_estadual && touched.isento_inscricao_estadual) ? (<Alert color="danger">{errors.isento_inscricao_estadual}</Alert>) : null}
              />
              <Campo
                className="mt-2"
                htmlFor="numero_inscricao_estadual"
                label="numero_inscricao_estadual"
                typeInput="number"
                nameInput="numero_inscricao_estadual"
                idInput="numero_inscricao_estadual"
                placeholderInput="Digite a numero_inscricao_estadual do usuario"
                erro={(errors.numero_inscricao_estadual && touched.numero_inscricao_estadual) ? (<Alert color="danger">{errors.numero_inscricao_estadual}</Alert>) : null}
              />
              <Campo
                className="mt-2"
                htmlFor="contribuinte"
                label="Contribuinte"
                typeInput="checkbox"
                nameInput="contribuinte"
                idInput="contribuinte"
                erro={(errors.contribuinte && touched.contribuinte) ? (<Alert color="danger">{errors.contribuinte}</Alert>) : null}
              />
            </>
          )}
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
  );
}
