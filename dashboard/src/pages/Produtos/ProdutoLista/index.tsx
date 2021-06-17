import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Table, Button } from "reactstrap";
import apiServer from "../../../services/api_server";

interface ResponseData {
  id: string;
  nome: string;
  categoria: string;
  quantidade: number;
}

export default function ProdutoLista() {
  const [produtos, setProdutos] = useState<ResponseData[]>([]);

  useEffect(() => {
    apiServer.get('produtos')
    .then((response) => {
      setProdutos(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [produtos]);

  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Produtos</h1>
      </Col>
      <Col md={12}>
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>
                <p>Categoria/</p>
                <p>Subcategoria</p>
              </th>
              <th>Quantidade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(produtos.length !== 0) ? 
                produtos.map((produto: ResponseData, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{produto.nome}</td>
                      <td>{produto.categoria}</td>
                      <td>{(produto.quantidade).toString()}</td>
                      <td>
                        <Link to={`/produtos/${produto.id}`}>
                          <Button color="primary">Exibir</Button>
                        </Link>
                      </td>
                    </tr>
                  );
                }
              ) : (
              <tr>
                <td colSpan={5}>Lista vazia</td>
              </tr>
              )
            }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}