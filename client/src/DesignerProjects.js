import React, {useState} from 'react'
import { Table, Button, Form, Divider } from 'semantic-ui-react';

const DesignerProjects = ({band, designer, update, posters, setPosters}) => {
  
  const [editingId, setEditingId] = useState(null);
  const [updatedImage, setUpdatedImage] = useState({})

  const designerPosters = posters.filter((poster) => {
    return (
      (poster.designer_id === designer.id) && (poster.status !== 'unassigned')
    )
  })

  // console.log(designerPosters)
 
  const handleEdit = (id) => {
    setEditingId(id);
    // console.log(id);
    // console.log('clicked edit')
  }

  const handleChange = (e) => {
    setUpdatedImage({[e.target.name]: e.target.value})
    // console.log(e.target.name)
    // console.log(e.target.value)
    // console.log('handled change!')
  }
  // console.log(updatedImage)
  
  const handleSave = (id) => {
    // console.log(id)
    // send PATCH request with formData
    fetch(`/posters/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedImage),
    })
    .then(res => res.json())
    .then(updatedImageData => {
      // update data in the state
      const newPosters = posters.map(poster => {
        if (poster.id === updatedImageData.id) {
          return updatedImageData
        } else {
          return poster
        }
      })
      setPosters(newPosters)
      setEditingId(null);
      // console.log(updatedImageData)
      // console.log(newPosters)
      // console.log('saved & updated')
    })
  }
  
  return (
    <>
      <br />
      <Divider horizontal style={{fontSize: 20}}>My Projects</Divider>
      <Table celled style={{marginTop: "35px"}}>
        <Table.Header style={{textAlign: "center"}}>
          <Table.Row>
            <Table.HeaderCell singleLine>Band</Table.HeaderCell>
            <Table.HeaderCell singleLine>Concert Date</Table.HeaderCell>
            <Table.HeaderCell singleLine>Venue</Table.HeaderCell>
            <Table.HeaderCell singleLine>Location</Table.HeaderCell>
            <Table.HeaderCell singleLine>Edition</Table.HeaderCell>
            <Table.HeaderCell singleLine>Dimensions</Table.HeaderCell>
            <Table.HeaderCell singleLine>Fee</Table.HeaderCell>
            <Table.HeaderCell singleLine>Image Link</Table.HeaderCell>
            <Table.HeaderCell singleLine>Due Date</Table.HeaderCell>
            <Table.HeaderCell singleLine>Status</Table.HeaderCell>
            <Table.HeaderCell singleLine>Update Project</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body style={{textAlign: "center"}}>
          {designerPosters.map((eachPoster) => (
            <Table.Row key={eachPoster.id}>
              <Table.Cell>{eachPoster.band.name}</Table.Cell>
              <Table.Cell>{eachPoster.date}</Table.Cell>
              <Table.Cell>{eachPoster.venue}</Table.Cell>
              <Table.Cell>{eachPoster.location}</Table.Cell>
              <Table.Cell>{eachPoster.edition}</Table.Cell>
              <Table.Cell>{eachPoster.dimensions}</Table.Cell>
              <Table.Cell>{eachPoster.budget}</Table.Cell>
              <Table.Cell>
                {editingId === eachPoster.id ?
                  <Form.Input fluid
                    name="image"
                    value={eachPoster.image}
                    onChange={handleChange}
                  />
                : eachPoster.image != null ? <><a href={eachPoster.image} alt="image link">Image Link</a></> : <><p style={{color: "red"}}>TBD</p></> 
                }
              </Table.Cell>
              <Table.Cell>{eachPoster.duedate}</Table.Cell>
              <Table.Cell>{eachPoster.status}</Table.Cell>
              <Table.Cell>
              {editingId === eachPoster.id ? 
                <Button fluid onClick={() => handleSave(eachPoster.id)} style={{color: "green"}}>Save</Button>
              : <Button fluid onClick={() => handleEdit(eachPoster.id)}>Edit</Button>
              }
            </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

export default DesignerProjects;