import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from "reactstrap";
import apiServer from "../../../services/api_server";

interface ResponseData {
  id: string;
  nome: string;
  email: string;
}

export default function UsuarioLista() {
  const [usuarios, setUsuarios] = useState<ResponseData[]>([]);

  useEffect(() => {
    apiServer.get('usuarios')
    .then((response) => {
      setUsuarios(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [usuarios]);

  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Usuarios</h1>
      </Col>
      <Col md={12}>
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(usuarios.length !== 0) ? 
                usuarios.map((usuario: ResponseData, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{usuario.nome}</td>
                      <td>{usuario.email}</td>
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