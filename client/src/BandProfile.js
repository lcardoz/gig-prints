import React, {useState} from 'react';
import { Divider, Table, Grid, Image, Icon, Button } from 'semantic-ui-react';
import BandPosterCard from './BandPosterCard';

const BandProfile = ({band, posters}) => {

  const [showContactInfo, setShowContactInfo] = useState(false);

  const unassignedBandPosters = posters.filter((poster) => {
    return (
      (poster.band_id === band.id) && (poster.status === "unassigned")
    )
  })

  const handleToggle = () => {
    setShowContactInfo(!showContactInfo)
  }

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(band.name);
      alert('E-mail address copied!');
    } catch (err) {
      console.error('Failed to copy e-mail address: ', err);
    }
  }

  // console.log(band)
  // const { id } = useParams()
  // console.log(unassignedBandPosters)

  return (
    <>
      <br />
      <Divider horizontal style={{fontSize: 26}}>{band.name}</Divider>
        <Grid columns={2} relaxed='very' style={{margin:"2% 2% 2% 2%", fontSize: 20, textAlign: "center"}}>
          <Grid.Column>
            <Image src={band.image ? band.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} centered rounded alt={band.name} style={{maxHeight: "500px", maxWidth: "400px"}}/>
          </Grid.Column>
          <Grid.Column>
            {band.on_tour ? <p><Icon className="check square" color="violet"></Icon>On Tour!</p> : <p><Icon className="x" color="violet"></Icon>Not Touring</p>}
            {band.instagram ? <><p><Icon className="instagram"></Icon>{band.instagram}</p></> : null}
            {band.location ? <p><Icon className="location arrow" color="violet"></Icon> {band.location}</p> : null}
            {band.website ? <><p>Get the latest on {band.name}<a href={band.website} alt="website" style={{color:"#6834CC"}}> here</a></p></> : null} 
            <p style={{fontSize: 16}}>{band.bio}</p>
            {band.email ? <Button className="violet ui button" onClick={handleToggle}>{showContactInfo ? "Hide Info" : "Contact Info"}</Button> : null}
            {showContactInfo ? 
            <>
              <p style={{marginTop: "10px"}}>{band.email}<Button icon="clone outline" onClick={handleClick} style={{marginLeft: "5px"}}></Button></p>
            </> 
            : <><br /><br /><br /></>
            }
          </Grid.Column>
        </Grid>
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
        <BandPosterCard band={band} posters={posters} />
        <br />
    </>
  )
}

export default BandProfile;