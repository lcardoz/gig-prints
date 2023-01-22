import React, {useEffect, useState} from 'react';
import { Table, Header, Grid, Divider, Card, Image, Dropdown, Button, Segment } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const DifferentBandProfile = ({posters, setSearch}) => {
  const {id} = useParams()
  const [differentBand, setDifferentBand] = useState({});

  
  useEffect(() => {
    fetch(`/bands/${id}`)
    .then(res => res.json())
    .then(data => 
      // console.log(data)
      setDifferentBand(data)
    )
  },[id])
  // console.log(differentBand)
  // setSearch("");

  const unassignedBandPosters = posters.filter((poster) => {
    return (
      (poster.band_id === differentBand.id) && (poster.status === "unassigned")
    )
  })

  const cardsPerRow = 3;

  const completedBandPosters = posters.filter((poster) => {
    return (
      (poster.band_id === differentBand.id) && (poster.status === "complete")
    )
  })


  return (
    <>
      <br />
        <Header style={{fontSize: 30, textAlign: "center"}}>{differentBand.name}</Header> 
        {/* <br /> */}
        <Grid columns={2} relaxed='very' style={{margin:"2%", fontSize: 20, textAlign: "center"}}>
          <Grid.Column>
            <Image src={differentBand.image ? differentBand.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} size='large' centered rounded alt={differentBand.name}/>
          </Grid.Column>
          <Grid.Column >
            {differentBand.on_tour ? <p>✅ on tour! </p> : null}
            {differentBand.instagram ? <p>IG: {differentBand.instagram}</p> : null}
            {differentBand.website ? <a href={differentBand.website} alt="website">{differentBand.name}'s Website</a> : null} 
            <br />
            <br />
            {differentBand.location ? <p>📍 {differentBand.location}</p> : null}
            <p>{differentBand.bio}</p>
          </Grid.Column>
        </Grid>
        <br />
        <Divider horizontal style={{fontSize: 20}}>Open Poster Commissions</Divider>  
        <br />
        {unassignedBandPosters.length > 0 ? 
        <Table celled padded>
          <Table.Header style={{fontSize: 18, textAlign: "center"}}>
            <Table.Row>
              <Table.HeaderCell singleLine>Concert Date</Table.HeaderCell>
              <Table.HeaderCell singleLine>Venue</Table.HeaderCell>
              <Table.HeaderCell singleLine>Location</Table.HeaderCell>
              <Table.HeaderCell singleLine>Due Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body style={{fontSize: 18, textAlign: "center"}}>
            {unassignedBandPosters.map((eachPoster, index) => (
              <Table.Row key={index}>
                <Table.Cell>{eachPoster.date}</Table.Cell>
                <Table.Cell>{eachPoster.venue}</Table.Cell>
                <Table.Cell>{eachPoster.location}</Table.Cell>
                <Table.Cell>{eachPoster.duedate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>          
        : <>
            <p style={{fontSize:"18px", fontStyle:"italic", textAlign: "center"}}>
              No open poster commissions at the moment.
            </p>
          </>
        }
        <br />
        <Divider horizontal style={{ fontSize: 20}}>Recent Concert Posters</Divider>  
        <br />
        <br />
        <Grid columns={cardsPerRow} style={{textAlign: "center"}}>
        {completedBandPosters.map((completedPoster) => (
          <Grid.Column key={completedPoster.id} >
            <Card raised centered>
              <Image className="poster-fixed-size" src={completedPoster.image} />
              <Card.Content>
                <Card.Header style={{fontSize: 20}}>
                  {completedPoster.designer.name}
                </Card.Header>
                <Card.Description style={{fontSize: 16}}>
                  {completedPoster.date}
                  <br />
                  <br />
                  {completedPoster.venue}
                  <br />
                  <br />
                  {completedPoster.location}
                </Card.Description>
              </Card.Content>
              <Card.Content style={{fontSize: 16}}>
                {completedPoster.dimensions}
                <br />
                <br />
                Edition of {completedPoster.edition}
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
        <br />
    </>
  )
}

export default DifferentBandProfile;