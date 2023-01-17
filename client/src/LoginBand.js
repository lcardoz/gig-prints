import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

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
    <Form onSubmit={onSubmit}>
    <h1>Band Login</h1> 
    <Form.Field width={4}>
      <label>Username:</label>
      <input type="text" name="username" value={username} onChange={handleChange} />
    </Form.Field>
    <Form.Field width={4}>
      <label>Password:</label>
      <input type="password" name="password" value={password} onChange={handleChange} />
    </Form.Field>
    {errors ? <div style={{color: "red" }}>{errors}</div> : null}
    <Button type='submit'>Login</Button>
  </Form>
  )
}

export default LoginBand