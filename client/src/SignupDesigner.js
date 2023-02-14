import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Divider, Container } from 'semantic-ui-react';

const SignupDesigner = () => {

  const [signupData, setSignupData] = useState({
    name: "",
    username: "",
    password: "",
  })

  const [errors, setErrors] = useState([])
  let navigate = useNavigate();
  const {name, username, password} = signupData

  function handleChange (e) {
    const key = e.target.name;
    const value = e.target.value;
    
    setSignupData({
     ...signupData,
      [key]: value
    })
  }

  function onSubmit(e) {
    e.preventDefault()

    let newSignup = {
      name: name,
      username: username.toLowerCase(), 
      password
    }

    // console.log(newSignup)

		fetch (`/signup/designer`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newSignup)
		})
		.then(res => { 
      if(res.ok) {
        navigate(`/login/designer`)
        setErrors(null)
			} else {
				res.json().then(obj => setErrors(obj.errors))
			}
		})
	}

  return (
    <div>
      <br />
      <Divider horizontal style={{fontSize: 20}}>Designer Signup</Divider>
      <br />
      <Container style={{ display: "flex", justifyContent: "center", textAlign: "center"}}>
        <Form onSubmit={onSubmit} >
          <Form.Field>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
          </Form.Field>
          {errors ? errors.map((error, i)=><p key={i} style={{color: "red"}} >{error}</p>) : null}
          <br /> 
          <Button type='submit' className="violet ui button">Signup</Button>
        </Form>
      </Container>
    </div>
  )
}

export default SignupDesigner;