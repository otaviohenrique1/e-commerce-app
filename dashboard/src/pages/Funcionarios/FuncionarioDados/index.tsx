import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, ListGroup, ListGroupItem, Col, Button } from 'reactstrap';
import apiServer from "../../../services/api_server";

interface FuncionarioDadosProps {
  id: string;
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
  ponto_de_referencia: string;
  telefone_contato: string;
  cargo: string;
  salario: number;
  carteira_trabalho: string;
  data_cadastro: Date;
}

interface FuncionarioDadosParamsProps {
  id: string;
}

const dadosIniciais = {
  id: '',
  nome: '',
  email: '',
  senha: '',
  cpf: '',
  rg: '',
  sexo: '',
  data_nascimento: new Date(`${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()} ${new Date().getSeconds()} : ${new Date().getMinutes()} - ${new Date().getHours()}`),
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
  cargo: '',
  salario: 0.0,
  carteira_trabalho: '',
  data_cadastro: new Date(`${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()} ${new Date().getSeconds()} : ${new Date().getMinutes()} - ${new Date().getHours()}`)
};

export default function FuncionarioDados() {
  const [usuarioDados, setUsuarioDados] = useState<FuncionarioDadosProps>(dadosIniciais);
  const { id } = useParams<FuncionarioDadosParamsProps>();

  useEffect(() => {
    apiServer.get(`usuarios/${id}`)
    .then((response) => {
      setUsuarioDados({
        id: response.data.id,
        nome: response.data.nome,
        email: response.data.email,
        senha: response.data.senha,
        cpf: response.data.cpf,
        rg: response.data.rg,
        sexo: response.data.sexo,
        data_nascimento: response.data.data_nascimento,
        telefone: response.data.telefone,
        celular: response.data.celular,
        endereco: response.data.endereco,
        bairro: response.data.bairro,
        numero: response.data.numero,
        complemento: response.data.complemento,
        cep: response.data.cep,
        pais: response.data.pais,
        cidade: response.data.cidade,
        estado: response.data.estado,
        ponto_de_referencia: response.data.ponto_de_referencia,
        telefone_contato: response.data.telefone_contato,
        cargo: response.data.cargo,
        salario: response.data.salario,
        carteira_trabalho: response.data.carteira_trabalho,
        data_cadastro: response.data.data_cadastro
      });
    })
    .catch((error) => console.log(`Erro => ${error}`));
  }, [id]);

  return (
    <Row>
      <Col md={12} className="mt-4 mb-5">
        <h1>Perfil</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>ID do funcionario: </span>{usuarioDados.id}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Nome: </span>{usuarioDados.nome}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Email: </span>{usuarioDados.email}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Senha: </span>
            <input
              type="password"
              readOnly
              value={usuarioDados.senha}
              style={{ border: 0 }}
            />
          </ListGroupItem>
          <ListGroupItem>
            <Col md={4}>
              <span className='mr-2' style={{fontWeight: 'bold'}}>CPF: </span>{usuarioDados.cpf}
            </Col>
            <Col md={4}>
              <span className='mr-2' style={{fontWeight: 'bold'}}>RG: </span>{usuarioDados.rg}
            </Col>
            <Col md={4}>
              <span className='mr-2' style={{fontWeight: 'bold'}}>sexo: </span>{usuarioDados.sexo}
            </Col>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Data de nascimento: </span>
                {(usuarioDados.data_nascimento).toString()}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Telefone: </span>{usuarioDados.telefone}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Celular: </span>{usuarioDados.celular}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Endereço: </span>{usuarioDados.endereco}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Bairro: </span>{usuarioDados.bairro}
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Numero: </span>{usuarioDados.numero}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Complemento: </span>{usuarioDados.complemento}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>CEP: </span>{usuarioDados.cep}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Pais: </span>{usuarioDados.pais}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Cidade: </span>{usuarioDados.cidade}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Estado: </span>{usuarioDados.estado}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Ponto de referência: </span>{usuarioDados.ponto_de_referencia}
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Telefone de contato: </span>{usuarioDados.telefone_contato}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Cargo: </span>{usuarioDados.cargo}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Salario: </span>{(usuarioDados.salario).toFixed(2).toString()}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={6}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Carteira de trabalho: </span>{usuarioDados.carteira_trabalho}
              </Col>
              <Col md={6}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Data de cadastro: </span>{usuarioDados.data_cadastro}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Col style={{ textAlign: 'right' }}>
              <Button type="button" color="primary">Editar</Button>
            </Col>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
}
