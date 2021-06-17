import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Table, Button } from "reactstrap";
import apiServer from "../../../services/api_server";

interface ResponseData {
  id: string;
  nome: string;
  tipo: string;
}

export default function CategoriaLista() {
  const [categorias, setCategorias] = useState<ResponseData[]>([]);

  useEffect(() => {
    apiServer.get('categorias')
    .then((response) => {
      setCategorias(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [categorias]);

  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Categorias e Subcategorias</h1>
      </Col>
      <Col md={12}>
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(categorias.length !== 0) ? 
                categorias.map((categoria: ResponseData, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{categoria.nome}</td>
                      <td>{categoria.tipo}</td>
                      <td>
                        <Link to={`/categorias/${categoria.id}`}>
                          <Button color="primary">Exibir</Button>
                        </Link>
                      </td>
                    </tr>
                  );
                }
              ) : (
              <tr>
                <td colSpan={4}>Lista vazia</td>
              </tr>
              )
            }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}