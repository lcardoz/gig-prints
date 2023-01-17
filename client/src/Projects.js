import React, {useState, useEffect} from 'react'
import { Table, Divider, Select, Form, Input, Button, Header } from 'semantic-ui-react';


const Projects = ({band, designer, update}) => {

  // console.log(band)
  // console.log(band.posters)
  // console.log(designer)

  const [allDesigners, setAllDesigners] = useState([])
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [newProjectFormData, setNewProjectFormData] = useState({
    band_id: band.id,
    designer_id: "",
    image: "",
    date: "",
    venue: "",
    location: "",
    edition: "",
    status: "unassigned",
    duedate: "",
    budget: "",
    dimensions: ""
  })

  useEffect(() => {
    fetch("/designers")
    .then(res => {
      if(res.ok) {
        res.json()
        .then(allDesigners => {
          setAllDesigners(allDesigners)
        })
      }
    })
  },[update])

  // let designerOptions = allDesigners.map((eachDesigner, i) => {
  // eachDesigner.name
  // }
  // )

  console.log(showAddProjectForm)

  function toggleForm () {
    setShowAddProjectForm(showAddProjectForm => !showAddProjectForm)
    // console.log(showAddProjectForm)
    console.log('clicked!')
  }

  function handleAddNewProject () {
    
  }

  if (band) {
  return (
    <>
      <Header style={{ fontSize: 24, textAlign: "center"}}>MY PROJECTS</Header>
      <Table celled padded>
      <Table.Header style={{textAlign: "center"}}>
        <Table.Row>
          <Table.HeaderCell singleLine>Concert Date</Table.HeaderCell>
          <Table.HeaderCell singleLine>Venue</Table.HeaderCell>
          <Table.HeaderCell singleLine>Location</Table.HeaderCell>
          <Table.HeaderCell singleLine>Poster Designer</Table.HeaderCell>
          <Table.HeaderCell singleLine>Edition</Table.HeaderCell>
          <Table.HeaderCell singleLine>Dimensions</Table.HeaderCell>
          <Table.HeaderCell singleLine>Budget</Table.HeaderCell>
          <Table.HeaderCell>Image Link</Table.HeaderCell>
          <Table.HeaderCell singleLine>Due Date</Table.HeaderCell>
          <Table.HeaderCell singleLine>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body style={{textAlign: "center"}}>
        {band.posters.map((eachPoster, index) => (
            <Table.Row key={index}>
              <Table.Cell>{eachPoster.date}</Table.Cell>
              <Table.Cell>{eachPoster.venue}</Table.Cell>
              <Table.Cell>{eachPoster.location}</Table.Cell>
              {eachPoster.designer != null ? <Table.Cell>{eachPoster.designer.name}</Table.Cell>  : <Table.Cell style={{color: "red"}}>TBD</Table.Cell> }
              <Table.Cell>{eachPoster.edition}</Table.Cell>
              <Table.Cell>{eachPoster.dimensions}</Table.Cell>
              <Table.Cell>{eachPoster.budget}</Table.Cell>
              {eachPoster.image != null ? <Table.Cell><a href={eachPoster.image} alt="image link">Image Link</a></Table.Cell> : <Table.Cell style={{color: "red"}}>TBD</Table.Cell> }
              <Table.Cell>{eachPoster.duedate}</Table.Cell>
              {eachPoster.status === "unassigned" ? <Table.Cell style={{color: "red"}}>{eachPoster.status}</Table.Cell> : <Table.Cell>{eachPoster.status}</Table.Cell>}
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
    <Button onClick={toggleForm} floated='right' primary>{showAddProjectForm ? '- Hide Form' : '+ New Project'}</Button>
    
    {showAddProjectForm ?
    <>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Concert Date</label>
            <Input fluid placeholder='i.e. "April 20, 2024"' />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <Input fluid placeholder='i.e. "Fox Theater"' />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <Input fluid placeholder='i.e. "Oakland, CA"' />
          </Form.Field>
          <Form.Field>
            <label>Poster Artist</label>
            <Select fluid placeholder='Leave Blank or Choose Designer'/>
          </Form.Field>
        </Form.Group>
      </Form>
      </>
    : <></>}
  
  
  
  </>
  )}
  else if (designer) {
    return (
      <>
        <Header style={{ fontSize: 24, textAlign: "center"}}>MY PROJECTS</Header>
        <Table celled padded>
        <Table.Header style={{textAlign: "center"}}>
          <Table.Row>
            <Table.HeaderCell singleLine>Band</Table.HeaderCell>
            <Table.HeaderCell singleLine>Concert Date</Table.HeaderCell>
            <Table.HeaderCell singleLine>Venue</Table.HeaderCell>
            <Table.HeaderCell singleLine>Location</Table.HeaderCell>
            <Table.HeaderCell singleLine>Edition</Table.HeaderCell>
            <Table.HeaderCell singleLine>Dimensions</Table.HeaderCell>
            <Table.HeaderCell singleLine>Fee</Table.HeaderCell>
            <Table.HeaderCell>Image Link</Table.HeaderCell>
            <Table.HeaderCell singleLine>Due Date</Table.HeaderCell>
            <Table.HeaderCell singleLine>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body style={{textAlign: "center"}}>
          {designer.posters.map((eachPoster, index) => (
            <Table.Row key={index}>
              <Table.Cell>{eachPoster.band.name}</Table.Cell>
              <Table.Cell>{eachPoster.date}</Table.Cell>
              <Table.Cell>{eachPoster.venue}</Table.Cell>
              <Table.Cell>{eachPoster.location}</Table.Cell>
              <Table.Cell>{eachPoster.edition}</Table.Cell>
              <Table.Cell>{eachPoster.dimensions}</Table.Cell>
              <Table.Cell>{eachPoster.budget}</Table.Cell>
              <Table.Cell><a href={eachPoster.image} alt="image link">Image Link</a></Table.Cell>
              <Table.Cell>{eachPoster.duedate}</Table.Cell>
              <Table.Cell>{eachPoster.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <Button floated='right' primary>+ New Project</Button> */}
    </>
    )}
}

export default Projects;