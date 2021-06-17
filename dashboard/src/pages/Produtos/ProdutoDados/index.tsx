import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, ListGroup, ListGroupItem, Col, Button } from 'reactstrap';
import apiServer from "../../../services/api_server";
import '../../../styles/scss/produtos/style.scss';

interface ProdutoDadosProps {
  id: string;
  nome: string;
  quantidade: number;
  unidade: string;
  descricao: string;
  preco: number;
  fabricante: string;
  categoria: string;
  id_funcionario: string;
  data_cadastro: Date;
}

interface ProdutoDadosParamsProps {
  id: string;
}

const dadosIniciaisProduto = {
  id: '',
  nome: '',
  quantidade: 0,
  unidade: '',
  descricao: '',
  preco: 0.0,
  fabricante: '',
  categoria: '',
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

export default function ProdutoDados() {
  const [produtoDados, setProdutoDados] = useState<ProdutoDadosProps>(dadosIniciaisProduto);
  const [funcionarioDados, setFuncionarioDados] = useState<FuncionarioDadosProps>(dadosIniciaisFuncionario);
  const { id } = useParams<ProdutoDadosParamsProps>();

  useEffect(() => {
    apiServer.get(`produtos/${id}`)
    .then((response) => {
      setProdutoDados({
        id: response.data.id,
        nome: response.data.nome,
        quantidade: response.data.quantidade,
        unidade: response.data.unidade,
        descricao: response.data.descricao,
        preco: response.data.preco,
        fabricante: response.data.fabricante,
        categoria: response.data.categoria,
        id_funcionario: response.data.id_funcionario,
        data_cadastro: response.data.data_cadastro
      });
    })
    .catch((error) => console.log(`Erro => ${error}`));
  }, [id]);

  useEffect(() => {
    apiServer.get(`funcionarios/${produtoDados.id_funcionario}`)
    .then((response) => {
      setFuncionarioDados({
        nome: response.data.nome,
        cargo: response.data.cargo,
      });
    })
    .catch((error) => console.log(`Erro => ${error}`));
  }, [produtoDados.id_funcionario]);

  return (
    <Row>
      <Col md={12} className="mt-4 mb-5">
        <h1>Perfil</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>ID do produto: </span>{produtoDados.id}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Quantidade: </span>
            {(produtoDados.quantidade).toFixed(2).toString()} {produtoDados.unidade}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Descrição: </span>
            <p>{produtoDados.descricao}</p>
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Preço: </span>
            {(produtoDados.preco).toFixed(2).toString()}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Fabricante: </span>{produtoDados.fabricante}
          </ListGroupItem>
          <ListGroupItem>
            <span className='mr-2' style={{fontWeight: 'bold'}}>Categoria/Subcategoria: </span>
            {produtoDados.categoria}
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={12}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>Cadastrado por:</span>
              </Col>
              <Col md={3}>
                <span className='mr-2' style={{fontWeight: 'bold'}}>ID: </span>
                {produtoDados.id_funcionario}
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
            <span className='mr-2' style={{fontWeight: 'bold'}}>Data de cadastro: </span>
            {(produtoDados.data_cadastro).toString()}
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
