import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, ListGroup, ListGroupItem, Col, Button } from 'reactstrap';
import apiServer from "../../../services/api_server";

interface CategoriaDadosProps {
  id: string;
  nome: string;
  tipo: string;
  data_cadastro: Date;
}

interface CategoriaDadosParamsProps {
  id: string;
}

const dadosIniciais = {
  id: '',
  nome: '',
  tipo: '',
  data_cadastro: new Date(`${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()} ${new Date().getSeconds()} : ${new Date().getMinutes()} - ${new Date().getHours()}`)
};

export default function CategoriaDados() {
  const [categoriaDados, setCategoriaDados] = useState<CategoriaDadosProps>(dadosIniciais);

  const { id } = useParams<CategoriaDadosParamsProps>();

  useEffect(() => {
    apiServer.get(`categorias/${id}`)
    .then((response) => {
      setCategoriaDados({
        id: response.data.id,
        nome: response.data.nome,
        tipo: response.data.tipo,
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
            <span className='mr-2' style={{fontWeight: 'bold'}}>Id Categoria: </span>
            {categoriaDados.id}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Nome: </span>
            {categoriaDados.nome}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Tipo: </span>
            {categoriaDados.tipo}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Data de cadastro: </span>
            {(categoriaDados.data_cadastro).toString()}
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