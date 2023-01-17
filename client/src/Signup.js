import React from 'react'
import { Button, Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
    <h1>Signup!</h1>
    <h2>I'm a:</h2>
    <Button as={Link} to="/signup/band" >Band/Musician</Button>
    <Button as={Link} to="/signup/designer" >Poster Designer</Button>
  </Container>
  )
}

export default Signup