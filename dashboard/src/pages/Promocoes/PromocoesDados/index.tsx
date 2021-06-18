import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, ListGroup, ListGroupItem, Col, Button } from 'reactstrap';
import apiServer from "../../../services/api_server";

interface PromocaoDadosProps {
  id: string;
  nome: string;
  tema: string;
  produtos: string;
  descricao: string;
  inicio: Date;
  termino: Date;
  id_funcionario: string;
  data_cadastro: Date;
}

interface PromocaoDadosParamsProps {
  id: string;
}

const dadosIniciaisPromocao = {
  id: '',
  nome: '',
  tema: '',
  produtos: '',
  descricao: '',
  inicio: new Date(`${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()}`),
  termino: new Date(`${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()}`),
  id_funcionario: '',
  data_cadastro: new Date(`${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()} ${new Date().getSeconds()} : ${new Date().getMinutes()} - ${new Date().getHours()}`)
};

interface FuncionarioDadosProps {
  nome: string;
  cargo: string;
}

const dadosIniciaisFuncionario = {
  nome: '',
  cargo: ''
};

export default function PromocaoDados() {
  const [promocaoDados, setPromocaoDados] = useState<PromocaoDadosProps>(dadosIniciaisPromocao);
  const [funcionarioDados, setFuncionarioDados] = useState<FuncionarioDadosProps>(dadosIniciaisFuncionario);
  const { id } = useParams<PromocaoDadosParamsProps>();

  useEffect(() => {
    apiServer.get(`promocoes/${id}`)
    .then((response) => {
      setPromocaoDados({
        id: response.data.id,
        nome: response.data.nome,
        tema: response.data.tema,
        produtos: response.data.produtos,
        descricao: response.data.descricao,
        inicio: response.data.inicio,
        termino: response.data.termino,
        id_funcionario: response.data.id_funcionario,
        data_cadastro: response.data.data_cadastro
      });
    })
    .catch((error) => console.log(`Erro => ${error}`));
  }, [id]);

  useEffect(() => {
    apiServer.get(`funcionarios/${promocaoDados.id_funcionario}`)
    .then((response) => {
      setFuncionarioDados({
        nome: response.data.nome,
        cargo: response.data.cargo,
      })
    })
    .catch((erro) => console.log(erro));
  }, [promocaoDados.id_funcionario]);

  return (
    <Row>
      <Col md={12} className="mt-4 mb-5">
        <h1>Perfil</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>ID do funcionario: </span>{promocaoDados.id}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Nome: </span>
            {promocaoDados.nome}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Tema: </span>
            {promocaoDados.tema}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Produtos na promoção: </span>
            {promocaoDados.produtos}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Descrição: </span>
            {promocaoDados.descricao}
          </ListGroupItem>
          <ListGroupItem>
            <Col md={6}>
              <span className='mr-2' style={{fontWeight: 'bold'}}>Inicio: </span>{promocaoDados.inicio}
            </Col>
            <Col md={6}>
              <span className='mr-2' style={{fontWeight: 'bold'}}>Termino: </span>{promocaoDados.termino}
            </Col>
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Data de cadastro: </span>
            {(promocaoDados.data_cadastro).toString()}
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={12}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Cadastrado por:</span>
              </Col>
              <Col md={3}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>ID: </span>
                {promocaoDados.id_funcionario}
              </Col>
              <Col md={5}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Nome: </span>
                {funcionarioDados.nome}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Cargo: </span>
                {funcionarioDados.cargo}
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
