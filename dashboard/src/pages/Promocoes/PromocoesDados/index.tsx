import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, ListGroup, ListGroupItem, Col, Button } from 'reactstrap';
// import apiTeste4 from '../../../services/api_teste/api_teste_4';
import apiServer from "../../../services/api_server";

interface UsuarioDadosProps {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

interface QuadrinhosDadosParamsProps {
  id: string;
}

const dadosIniciais = {
  id: '',
  nome: '',
  email: '',
  senha: ''
};

export default function UsuarioDados() {
  const [usuarioDados, setUsuarioDados] = useState<UsuarioDadosProps>(dadosIniciais);

  const { id } = useParams<QuadrinhosDadosParamsProps>();

  useEffect(() => {
    apiServer.get(`usuarios/${id}`)
    .then((response) => {
      setUsuarioDados({
        id: response.data.id,
        nome: response.data.nome,
        email: response.data.email,
        senha: response.data.senha,
      });
    })
    .catch((error) => console.log(`Erro => ${error}`));
  }, [id]);

  // useEffect(() => {
  //   apiTeste4.find((item) => {
  //     if (item.id === id) {
  //       setUsuarioDados({
  //         id: item.id,
  //         name: item.name,
  //         email: item.email,
  //         senha: item.senha
  //       })
  //     }
  //     return '';
  //   });
  // }, [id]);

  return (
    <Row>
      <Col md={12} className="mt-4 mb-5">
        <h1>Perfil</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
        <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Id Usuario: </span>
            {usuarioDados.id}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Nome: </span>
            {usuarioDados.nome}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Email: </span>
            {usuarioDados.email}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Senha: </span>
            <input
              type="password"
              readOnly
              value={usuarioDados.senha}
              style={{
                border: 0,
              }}
            />
            {/* {usuarioDados.senha} */}
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