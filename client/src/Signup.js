import React from 'react';
import { Button, Divider, Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Signup = () => {
  
  return (
    <div>
      <br />
      <Divider horizontal style={{fontSize: 20}}>Who Are You?</Divider>
      <Container style={{textAlign: "center"}} >
      <br />
        <Button as={Link} to="/signup/band" className="violet ui button">Band/Musician</Button>
        <br />
        <br />
        <Button as={Link} to="/signup/designer" className="violet ui button">Poster Designer</Button>
      </Container>
    </div>
  )
}

export default Signup;