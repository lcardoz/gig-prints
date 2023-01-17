import React from 'react'
import { Button, Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <h1>Login!</h1>
      <h2>I'm a:</h2>
      <Button as={Link} to="/login/band" >Band/Musician</Button>
      <Button as={Link} to="/login/designer" >Poster Designer</Button>
    </Container>

  )
}

export default Login;