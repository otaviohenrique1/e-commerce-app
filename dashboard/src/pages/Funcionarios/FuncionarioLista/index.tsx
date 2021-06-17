import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Table, Button } from "reactstrap";
import apiServer from "../../../services/api_server";

interface ResponseData {
  id: string;
  nome: string;
  cargo: string;
}

export default function FuncionarioLista() {
  const [funcionarios, setFuncionarios] = useState<ResponseData[]>([]);

  useEffect(() => {
    apiServer.get('funcionarios')
    .then((response) => {
      setFuncionarios(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [funcionarios]);

  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Funcionarios</h1>
      </Col>
      <Col md={12}>
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(funcionarios.length !== 0) ? 
                funcionarios.map((funcionario: ResponseData, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{funcionario.nome}</td>
                      <td>{funcionario.cargo}</td>
                      <td>
                        <Link to={`/categorias/${funcionario.id}`}>
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