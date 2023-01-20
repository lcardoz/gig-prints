import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Divider, Form, Input, Button } from 'semantic-ui-react';

const EditBandProfile = ({band, setBand}) => {

let navigate = useNavigate();  

// const [isChecked, setIsChecked] = useState(and.on_tour);

const [updatedBandInfo, setUpdatedBandInfo] = useState({
  image: band.image,
  location: band.location,
  instagram: band.instagram,
  website: band.website,
  bio: band.bio,
  on_tour: band.on_tour
})
 
const handleChange = (e) => {
  const key= e.target.name;
	const value = e.target.value;
  // const checked = e.target.checked;

  setUpdatedBandInfo({
    ...updatedBandInfo,
    [key]: value
  })
  // console.log(key, value)
}

const handleCheck = (e, {name, checked}) => {
  // const key= e.target.name;
  // const checked = e.target.checked;
  setUpdatedBandInfo({
    ...updatedBandInfo,
    [name]: checked
  })
  // console.log(`Key: ${name}, Value: ${checked}`)
}

const handleSubmit = (e) => {
  e.preventDefault()

  console.log('clicked submit')
  console.log(updatedBandInfo)

  fetch(`/bands/${band.id}`, {
    method: 'PATCH',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updatedBandInfo)
  })
  .then(res => res.json())
  .then(updatedBand => {
    setBand(updatedBand)
    navigate(`/bands/${band.id}`)
  })
}

  return (
    <div >
      <br />
      <Divider horizontal style={{fontSize: 20}}>Edit Profile</Divider>  
      <br />
        <Form onSubmit={handleSubmit} style={{width: "50%", margin: "0 auto"}}>
        <Form.Checkbox 
          label='On Tour'
          name="on_tour"
          checked={updatedBandInfo.on_tour}
          onChange={handleCheck}
        />
          <Form.Field>
            <label>Profile Picture</label>
            <Input fluid
              name="image"
              value={updatedBandInfo.image}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <Input fluid
              name="location"
              value={updatedBandInfo.location}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Instagram</label>
            <Input fluid
              name="instagram"
              value={updatedBandInfo.instagram}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Website</label>
            <Input fluid
              name="website"
              value={updatedBandInfo.website}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.TextArea 
            label='Bio'  
            name="bio"
            value={updatedBandInfo.bio}
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

export default EditBandProfile;