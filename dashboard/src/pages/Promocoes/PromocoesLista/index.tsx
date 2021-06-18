import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Table, Button } from "reactstrap";
import apiServer from "../../../services/api_server";

interface ResponseData {
  id: string;
  nome: string;
  inicio: Date;
  termino: Date;
}

export default function PromocoesLista() {
  const [promocoes, setPromocoes] = useState<ResponseData[]>([]);

  useEffect(() => {
    apiServer.get('promocoes')
    .then((response) => {
      setPromocoes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [promocoes]);

  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Promoções</h1>
      </Col>
      <Col md={12}>
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Inicio</th>
              <th>Termino</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(promocoes.length !== 0) ? 
                promocoes.map((promocao: ResponseData, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{promocao.nome}</td>
                      <td>{promocao.inicio}</td>
                      <td>{promocao.termino}</td>
                      <td>
                        <Link to={`/promocoes/${promocao.id}`}>
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