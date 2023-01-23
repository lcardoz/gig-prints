import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Divider, Container } from 'semantic-ui-react';

const LoginBand = ({setBand}) => {

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  const [errors, setErrors] = useState([])
  let navigate = useNavigate();
  const {username, password} = loginData

  function handleChange (e) {
    const key = e.target.name;
    const value = e.target.value;
    
    setLoginData({
     ...loginData,
      [key]: value
    })
  }

  function onSubmit(e) {
    e.preventDefault()

    const user = {
      username: username.toLowerCase(), 
      password
    }

    // console.log(user)

		fetch (`/login/band`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(res => { 
      if(res.ok) {
				res.json().then(user => {
          setBand(user)
					navigate(`/`)
				})
			} else {
				res.json().then(obj => setErrors(obj.error))
			}
		}
    )
	}


  return (
    <div>
      <br />
      <Divider horizontal style={{fontSize: 20}}>Band Login</Divider>  
      <br />
      <Container style={{ display: "flex", justifyContent: "center", textAlign: "center"}}>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
          </Form.Field>
          {errors ? <div style={{color: "red" }}>{errors}</div> : null}
          <br />
          <Button type='submit' className="violet ui button">Login</Button>
        </Form>
      </Container>
    </div>
  )
}

export default LoginBand;