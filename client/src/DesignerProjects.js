import React, {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// import {useParams} from 'react-router-dom'
import { Table, Header } from 'semantic-ui-react';

const DesignerProjects = ({band, designer, update, posters, setPosters}) => {
  
  const designerPosters = posters.filter((poster) => {
    return (
      (poster.designer_id === designer.id) && (poster.status !== 'unassigned')
    )
  })

  // console.log(designerPosters)
  
  
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
          {designerPosters.map((eachPoster, index) => (
            <Table.Row key={index}>
              <Table.Cell>{eachPoster.band.name}</Table.Cell>
              <Table.Cell>{eachPoster.date}</Table.Cell>
              <Table.Cell>{eachPoster.venue}</Table.Cell>
              <Table.Cell>{eachPoster.location}</Table.Cell>
              <Table.Cell>{eachPoster.edition}</Table.Cell>
              <Table.Cell>{eachPoster.dimensions}</Table.Cell>
              <Table.Cell>{eachPoster.budget}</Table.Cell>
              {eachPoster.image != null ? <Table.Cell><a href={eachPoster.image} alt="image link">Image Link</a></Table.Cell> : <Table.Cell style={{color: "red"}}>TBD</Table.Cell> }
              <Table.Cell>{eachPoster.duedate}</Table.Cell>
              <Table.Cell>{eachPoster.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

export default DesignerProjects;