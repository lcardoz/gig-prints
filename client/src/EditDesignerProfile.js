import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Divider, Form, Input, Button } from 'semantic-ui-react';

const EditDesignerProfile = ({designer, setDesigner}) => {

  let navigate = useNavigate();  

  const [updatedDesignerInfo, setUpdatedDesignerInfo] = useState({
    image: designer.image,
    location: designer.location,
    instagram: designer.instagram,
    website: designer.website,
    bio: designer.bio,
    open_to_work: designer.open_to_work,
    email: designer.email
  })

  const handleChange = (e) => {
    const key= e.target.name;
    const value = e.target.value;
    // const checked = e.target.checked;

    setUpdatedDesignerInfo({
      ...updatedDesignerInfo,
      [key]: value
    })
    // console.log(key, value)
  }

  const handleCheck = (e, {name, checked}) => {
    // const key= e.target.name;
    // const checked = e.target.checked;
    setUpdatedDesignerInfo({
      ...updatedDesignerInfo,
      [name]: checked
    })
    // console.log(`Key: ${name}, Value: ${checked}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('clicked submit')
    console.log(updatedDesignerInfo)

    fetch(`/designers/${designer.id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedDesignerInfo)
    })
    .then(res => res.json())
    .then(updatedDesigner => {
      setDesigner(updatedDesigner)
      navigate(`/designers/${designer.id}`)
    })
  }

  return (
    <div>
      <br />
      <Divider horizontal style={{fontSize: 20}}>Edit Profile</Divider>  
      <br />
        <Form onSubmit={handleSubmit} style={{width: "50%", margin: "0 auto"}}>
        <Form.Checkbox 
          label='Open To Work'
          name="open_to_work"
          checked={updatedDesignerInfo.open_to_work}
          onChange={handleCheck}
        />
          <Form.Field>
            <label>E-mail</label>
            <Input fluid
              name="email"
              value={updatedDesignerInfo.email}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Profile Picture</label>
            <Input fluid
              name="image"
              value={updatedDesignerInfo.image}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <Input fluid
              name="location"
              value={updatedDesignerInfo.location}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Instagram</label>
            <Input fluid
              name="instagram"
              value={updatedDesignerInfo.instagram}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Website</label>
            <Input fluid
              name="website"
              value={updatedDesignerInfo.website}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.TextArea 
            label='Bio'  
            name="bio"
            value={updatedDesignerInfo.bio}
            onChange={handleChange}
          />        
          <br/>
          <div style={{display: "flex", justifyContent: "center"}}>
          <Button type='submit'>Update</Button>
          </div>
        </Form>
        <br/>
        <br/>
    </div>
  )
}

export default EditDesignerProfile;