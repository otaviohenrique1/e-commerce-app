import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, ListGroup, ListGroupItem, Col, Button } from 'reactstrap';
import apiServer from "../../../services/api_server";

interface UsuarioDadosProps {
  id: string;
  nome: string;
  quantidade: number;
  unidade: string;
  descricao: string;
  preco: number;
  fabricante: string;
}

interface ProdutosDadosParamsProps {
  id: string;
}

const dadosIniciais = {
  id: '',
  nome: '',
  quantidade: 0,
  unidade: '',
  descricao: '',
  preco: 0,
  fabricante: ''
};

export default function ProdutoDados() {
  const [usuarioDados, setUsuarioDados] = useState<UsuarioDadosProps>(dadosIniciais);

  const { id } = useParams<ProdutosDadosParamsProps>();

  useEffect(() => {
    apiServer.get(`produtos/${id}`)
    .then((response) => {
      setUsuarioDados({
        id: response.data.id,
        nome: response.data.nome,
        quantidade: response.data.quantidade,
        unidade: response.data.unidade,
        descricao: response.data.descricao,
        preco: response.data.preco,
        fabricante: response.data.fabricante
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
            <span className='mr-2' style={{fontWeight: 'bold'}}>Id Usuario: </span>
            {usuarioDados.id}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Nome: </span>
            {usuarioDados.nome}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Quantidade: </span>
            {`${usuarioDados.quantidade} ${usuarioDados.unidade}`}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Descricao: </span><br />
            {usuarioDados.descricao}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Preco: </span>
            {usuarioDados.preco}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Fabricante: </span>
            {usuarioDados.fabricante}
          </ListGroupItem>
          <ListGroupItem>
            <Col style={{ textAlign: 'right' }}>
              <Button type="button" color="primary">Comprar</Button>
            </Col>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
}