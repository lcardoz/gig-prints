import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Divider, Table, Card, Grid, Button, Header, Image, Segment } from 'semantic-ui-react';
import BandPosterCard from './BandPosterCard';
import DesignerPosterCard from './DesignerPosterCard';

const Profile = ({band, designer, posters, setPosters}) => {

  // console.log(band)
  // console.log(designer)
  const { id } = useParams()

  // console.log(band.completed_posters)

  const unassignedBandPosters = posters.filter((poster) => {
    if(band)
    return (
      (poster.band_id === band.id) && (poster.status === "unassigned")
    )
    else 
    return null
  })

  // console.log(unassignedBandPosters)

  if (band) {
  return (
    <>
      <Segment style={{ fontSize: 24, textAlign: "center"}}>
        {id==band.id ? <Button floated='right' primary>Edit Profile</Button> : null}
        <Header>{band.name.toUpperCase()}</Header>
        <br />
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <Image src={band.image} size='medium' centered rounded/>
          </Grid.Column>
          <Grid.Column>
          {band.on_tour ? <p>✅ on tour! </p> : null}
          {band.instagram ? <p>IG: {band.instagram}</p> : null}
            
            <a href={band.website} alt="website">{band.name}'s Website</a>
            <br />
            <br />
            <p>📍 {band.location}</p>
            <p>{band.bio}</p>
          </Grid.Column>
        </Grid>
        <br />
        <Divider horizontal style={{ fontSize: 20}}>Open Poster Commissions</Divider>  
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
            <p style={{fontStyle:"italic"}}>
              No open poster commissions at the moment.
            </p>
          </>
        }
        <br />
        <Divider horizontal style={{ fontSize: 20}}>Recent Concert Posters</Divider>  
        <br />
        <BandPosterCard band={band} posters={posters} />
        <br />
      </Segment>
      </>
    )}
    else if (designer) {
      return (
        <>
        <Segment style={{ fontSize: 24, textAlign: "center"}}>
          {id==designer.id ? <Button floated='right' primary>Edit Profile</Button> : null}
          <Header>{designer.name.toUpperCase()}</Header>
          <br />
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <Image src={designer.image} size='medium' centered rounded/>
            </Grid.Column>
            <Grid.Column>
            {designer.open_to_work ? <p>✅ open to work! </p> : null}
            <p>IG: {designer.instagram}</p>
              <a href={designer.website} alt="website">{designer.name}'s Website</a>
              <br />
              <br />
              <p>📍 {designer.location}</p>
              <p>{designer.bio}</p>
            </Grid.Column>
          </Grid>
          <br />
          <Divider horizontal style={{ fontSize: 20}}>Recent Concert Posters</Divider>  
          <br />
          <DesignerPosterCard designer={designer} posters={posters} />
          <br />
        </Segment>
      </>
    )
  }
}

export default Profile;