import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, ListGroup, ListGroupItem, Col, Button } from 'reactstrap';
import apiServer from "../../../services/api_server";

interface LogDadosProps {
  id: string;
  id_funcionario: string;
  tempo_acesso: Date;
  data_acesso: Date;
}

interface LogDadosParamsProps {
  id: string;
}

const dadosIniciaisLog = {
  id: '',
  id_funcionario: '',
  tempo_acesso: new Date(`${new Date().getSeconds()} : ${new Date().getMinutes()} - ${new Date().getHours()}`),
  data_acesso: new Date(`${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()}`)
};

interface FuncionarioDadosProps {
  nome: string;
  cargo: string;
}

const dadosIniciaisFuncionario = {
  nome: '',
  cargo: ''
};

export default function LogDados() {
  const [logDados, setLogDados] = useState<LogDadosProps>(dadosIniciaisLog);
  const [funcionarioDados, setFuncionarioDados] = useState<FuncionarioDadosProps>(dadosIniciaisFuncionario);
  const { id } = useParams<LogDadosParamsProps>();

  useEffect(() => {
    apiServer.get(`logs/${id}`)
    .then((response) => {
      setLogDados({
        id: response.data.id,
        id_funcionario: response.data.id_funcionario,
        tempo_acesso: response.data.tempo_acesso,
        data_acesso: response.data.data_acesso
      });
    })
    .catch((error) => console.log(`Erro => ${error}`));
  }, [id]);

  useEffect(() => {
    apiServer.get(`funcionarios/${logDados.id_funcionario}`)
    .then((response) => {
      setFuncionarioDados({
        nome: response.data.nome,
        cargo: response.data.cargo,
      })
    })
    .catch((erro) => console.log(erro));
  }, [logDados.id_funcionario]);

  return (
    <Row>
      <Col md={12} className="mt-4 mb-5">
        <h1>Perfil</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          <ListGroupItem>
            <Row>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>ID do Log: </span>
                {logDados.id}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Hora do acesso: </span>
                {(logDados.tempo_acesso).toDateString()}
              </Col>
              <Col md={4}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Data do acesso: </span>
                {(logDados.data_acesso).toDateString()}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={12}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Dados do funcionario:</span>
              </Col>
              <Col md={3}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>ID: </span>
                {logDados.id_funcionario}
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
