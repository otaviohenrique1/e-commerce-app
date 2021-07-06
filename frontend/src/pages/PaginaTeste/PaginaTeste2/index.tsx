import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "reactstrap";
import { AppContextProvider } from '../contexts/AppContext';
import { useAppHook } from '../hooks/AppHook';

export default function PaginaTeste2() {
  const { usuarioData } = useAppHook();

  return (
    <Container>
      <AppContextProvider>
        <Row>
          <Col md={12}>{usuarioData.nome}</Col>
          <Col md={12}>{usuarioData.email}</Col>
          <Col md={12}>
            <Link to="/pagina_teste1">
              <Button></Button>
            </Link>
          </Col>
        </Row>
      </AppContextProvider>
    </Container>
  );
}