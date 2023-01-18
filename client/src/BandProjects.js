import React, {useState, useEffect} from 'react';
import { Table, Select, Form, Input, Header } from 'semantic-ui-react';

const statusOptions = [
  { key: 'unassigned', text: 'unassigned', value: 'unassigned' },
  { key: 'in progress', text: 'in progress', value: 'in progress' },
  { key: 'complete', text: 'complete', value: 'complete' },
]

const BandProjects = ({band, designer, update, posters, setPosters}) => {

  // console.log(band)
  // console.log(band.posters)
  // console.log(band.id)

  const [allDesigners, setAllDesigners] = useState([])
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [newProjectFormData, setNewProjectFormData] = useState({
    band_id: band.id,
    designer_id: "",
    // image: "",
    date: "",
    venue: "",
    location: "",
    edition: "",
    status: "",
    duedate: "",
    budget: "",
    dimensions: ""
  })

  useEffect(() => {
    fetch("/designers")
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => {
          setAllDesigners(data.map(designerOption => ({key: designerOption.id, text: designerOption.name, value: designerOption.id})))
        })
      }
    })
  },[])

  // console.log(allDesigners)
  // console.log(showAddProjectForm)

  function toggleForm () {
    setShowAddProjectForm(showAddProjectForm => !showAddProjectForm)
    // console.log(showAddProjectForm)
    // console.log('clicked!')
  }

  function handleChange(e) {
		const key= e.target.name;
		const value = e.target.value;

    // console.log(input.value)

    setNewProjectFormData({
      ...newProjectFormData,
      [key]: value
    });
	}

  function handleSelect(e,input) {
    const key= input.name;
		const value = input.value;

    // console.log(key)

    setNewProjectFormData({
      ...newProjectFormData,
      [key]: value
    });
  }

  function createProject (e) {
    e.preventDefault()

    // console.log(newProjectFormData)

    fetch('/posters', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newProjectFormData)
    })
      .then(res => {
        if(res.ok) {
          res.json()
          .then(newPoster => {
            setPosters([...posters, newPoster])
            setNewProjectFormData({
              band_id: band.id,
              designer_id: "",
              // image: "",
              date: "",
              venue: "",
              location: "",
              edition: "",
              status: "",
              duedate: "",
              budget: "",
              dimensions: ""
            })
            toggleForm ()
            // console.log(posters)
          })
        }
      })
  }

  const bandPosters = posters.filter((poster) => {
    return (
      poster.band_id === band.id
    )
  })

  // console.log(bandPosters)

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
          <Table.HeaderCell singleLine>Edition Size</Table.HeaderCell>
          <Table.HeaderCell singleLine>Dimensions</Table.HeaderCell>
          <Table.HeaderCell singleLine>Budget</Table.HeaderCell>
          <Table.HeaderCell>Image Link</Table.HeaderCell>
          <Table.HeaderCell singleLine>Due Date</Table.HeaderCell>
          <Table.HeaderCell singleLine>Status</Table.HeaderCell>
          {/* <h3>Edit</h3> */}
        </Table.Row>
      </Table.Header>
      <Table.Body style={{textAlign: "center"}}>
        {bandPosters.map((eachPoster, index) => (
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
    <button onClick={toggleForm} style={{float: "right"}}>{showAddProjectForm ? '- Hide Form' : '+ New Project'}</button>
    <br />
    <br />
    {showAddProjectForm ?
      <>
        <Form onSubmit={createProject}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Concert Date</label>
              <Input fluid 
                placeholder='i.e. April 20, 2024' 
                name="date"
                value={newProjectFormData.date} 
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <Input fluid 
                placeholder='i.e. Fox Theater'
                name="venue"
                value={newProjectFormData.venue} 
                onChange={handleChange} 
              />
            </Form.Field>
            <Form.Field>
              <label>Location</label>
              <Input fluid 
                placeholder='i.e. Oakland, CA' 
                name="location"
                value={newProjectFormData.location} 
                onChange={handleChange} 
              />
            </Form.Field>
            <Form.Field>
              <label>Poster Designer</label>
              <Select fluid 
                placeholder='Select or Leave Blank' 
                name="designer_id"
                // value={designer_id.value}
                options={allDesigners} 
                onChange={handleSelect}
              />
            </Form.Field>
            <Form.Field>
              <label>Edition Size</label>
              <Input fluid 
                placeholder='i.e. 1000' 
                name="edition"
                value={newProjectFormData.edition} 
                onChange={handleChange} 
              />
            </Form.Field>
            <Form.Field>
              <label>Dimensions</label>
              <Input fluid 
                placeholder='i.e. 18x24' 
                name="dimensions"
                value={newProjectFormData.dimensions} 
                onChange={handleChange} 
              />
            </Form.Field>
            <Form.Field>
              <label>Budget</label>
              <Input fluid 
                placeholder='i.e. $25,000'
                name="budget"
                value={newProjectFormData.budget} 
                onChange={handleChange} 
              />
            </Form.Field>
            <Form.Field>
              <label>Due Date</label>
              <Input fluid 
                placeholder='i.e. 3/20/2024'
                name="duedate"
                value={newProjectFormData.duedate} 
                onChange={handleChange} 
              />
            </Form.Field>
            <Form.Field>
              <label>Status</label>
              <Select fluid 
                placeholder='Select'
                name="status"
                // value={newProjectFormData.status}
                options={statusOptions} 
                onChange={handleSelect} 
              />
            </Form.Field>
          </Form.Group>
          <input type="submit" value="Submit" style={{float: "right"}} />
        </Form>
      </>
      : <></>}
    </>
  )
}

export default BandProjects;