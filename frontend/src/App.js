import React from "react";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Container } from "react-bootstrap";
import { Router, navigate } from "@reach/router";

export function App() {
  return (
    <Container>
      <Router>
        <Login path='/' gotoHome={() => navigate("/home")} />
        <Home path='/home' />
      </Router>
    </Container>
  );
}
