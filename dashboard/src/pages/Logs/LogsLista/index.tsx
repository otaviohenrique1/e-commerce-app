import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Table, Button } from "reactstrap";
import apiServer from "../../../services/api_server";

interface LogsResponseData {
  id: string;
  id_funcionario: string;
  tempo_acesso: Date;
  data_acesso: Date;
}

export default function LogsLista() {
  const [logs, setLogs] = useState<LogsResponseData[]>([]);

  useEffect(() => {
    apiServer.get('logs')
    .then((response) => {
      setLogs(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [logs]);

  return (
    <Row>
      <Col md={12} className="mt-5 mb-5">
        <h1>Logs</h1>
      </Col>
      <Col md={12}>
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Tempo de acesso</th>
              <th>Data de acesso</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(logs.length !== 0) ? 
                logs.map((log: LogsResponseData, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{log.tempo_acesso}</td>
                      <td>{log.data_acesso}</td>
                      <td>
                        <Link to={`/logs/${log.id}`}>
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