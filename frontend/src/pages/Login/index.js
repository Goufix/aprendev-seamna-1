import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { validateUser } from "../../utils/validateUser";
import * as S from "./styles";

export function Login(props) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const isValidUser = await validateUser(usuario, senha, "https://api.myjson.com/bins/kj4aq");
    if (isValidUser) {
      props.gotoHome();
    } else {
      setError({ error: "Usuário ou senha inválidos" });
    }
  }

  return (
    <S.Row>
      <S.Col>
        {error && <Alert variant='warning'>{error.error}</Alert>}
        <Form onSubmit={handleSubmit} className='pt-3'>
          <Form.Group controlId='usuario'>
            <Form.Label>Usuário:</Form.Label>
            <Form.Control
              type='text'
              placeholder='usuário'
              value={usuario}
              onChange={event => setUsuario(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='senha'>
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              type='password'
              value={senha}
              onChange={event => setSenha(event.target.value)}
            />
          </Form.Group>
          <Button type='submit'>Login</Button>
        </Form>
      </S.Col>
    </S.Row>
  );
}
