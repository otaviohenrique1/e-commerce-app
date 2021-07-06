import React, { useState } from 'react';
// import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import { AppContextProvider } from '../contexts/AppContext';
import { useAppHook } from '../hooks/AppHook';

export default function PaginaTeste1() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const { handleUsuarioData } = useAppHook();
  const history = useHistory();

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   setUsuarioData({
  //     nome: nome,
  //     email: email
  //   });
  //   history.push('/pagina_teste2')
  // }

  return (
    <Container>
      <AppContextProvider>
        <Row>
          <Form
            // onSubmit={handleSubmit}
            onSubmit={event => {
              event.preventDefault();
              const usuarioData = {
                nome: nome,
                email: email
              };
              handleUsuarioData(usuarioData);
              history.push('/pagina_teste2')
            }}
            style={{
              width: '100%',
              margin: 10,
            }}
          >
            <Col md={12} style={{ textAlign: 'center' }}>
              <h1>Formulario</h1>
            </Col>
            <Col md={12}>
              <Input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                style={{ marginTop: 20 }}
                required
              />
            </Col>
            <Col md={12}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                style={{ marginTop: 10 }}
                required
              />
            </Col>
            <Col md={12}>
              <Button
                type="submit"
                style={{ marginTop: 10 }}
              >
                Salvar
              </Button>
            </Col>
          </Form>
        </Row>
      </AppContextProvider>
    </Container>
  );
}