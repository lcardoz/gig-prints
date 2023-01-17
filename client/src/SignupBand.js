import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

const SignupBand = () => {

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

		fetch (`/signup/band`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newSignup)
		})
		.then(res => { 
      if(res.ok) {
        navigate(`/login/band`)
        setErrors(null)
			} else {
				res.json().then(obj => setErrors(obj.errors))
			}
		})
	}

  return (
    <Form onSubmit={onSubmit} >
    <h1>Band Signup</h1> 
    <Form.Field width={4}>
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={handleChange} />
    </Form.Field>
    <Form.Field width={4}>
      <label>Username:</label>
      <input type="text" name="username" value={username} onChange={handleChange} />
    </Form.Field>
    <Form.Field width={4}>
      <label>Password:</label>
      <input type="password" name="password" value={password} onChange={handleChange} />
    </Form.Field>
    {errors ? errors.map((error, i)=><p key={i} >{error}</p>) : null}
    <Button type='submit'>Signup</Button>
  </Form>
  )
}

export default SignupBand;