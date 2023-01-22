import React from 'react';
// import { useParams } from 'react-router-dom'
import { Divider, Table, Grid, Header, Image } from 'semantic-ui-react';
import BandPosterCard from './BandPosterCard';

const BandProfile = ({band, posters}) => {

  const unassignedBandPosters = posters.filter((poster) => {
    return (
      (poster.band_id === band.id) && (poster.status === "unassigned")
    )
  })

  // console.log(band)
  // const { id } = useParams()
  // console.log(unassignedBandPosters)

  return (
    <>
        <br />
        <Header style={{fontSize: 30, textAlign: "center"}}>{band.name.toUpperCase()}</Header> 
        {/* <br /> */}
        <Grid columns={2} relaxed='very' style={{margin:"2%", fontSize: 20, textAlign: "center"}}>
          <Grid.Column>
            <Image src={band.image ? band.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} size='large' centered rounded alt={band.name}/>
          </Grid.Column>
          <Grid.Column >
            {band.on_tour ? <p>✅ on tour! </p> : null}
            {band.instagram ? <p>IG: {band.instagram}</p> : null}
            {band.website ? <a href={band.website} alt="website">{band.name}'s Website</a> : null} 
            <br />
            <br />
            {band.location ? <p>📍 {band.location}</p> : null}
            <p>{band.bio}</p>
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
        <BandPosterCard band={band} posters={posters} />
        <br />
    </>
  )
}

export default BandProfile;