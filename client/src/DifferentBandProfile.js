import React, {useEffect, useState} from 'react';
import { Table, Grid, Divider, Card, Image, Button, Icon } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const DifferentBandProfile = ({posters}) => {
  const {id} = useParams()
  const [differentBand, setDifferentBand] = useState({});
  const [showContactInfo, setShowContactInfo] = useState(false);
  
  useEffect(() => {
    fetch(`/bands/${id}`)
    .then(res => res.json())
    .then(data => 
      // console.log(data)
      setDifferentBand(data)
    )
  },[id])
  // console.log(differentBand)

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

  const handleToggle = () => {
    setShowContactInfo(!showContactInfo)
  }

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(differentBand.name);
      alert('E-mail address copied!');
    } catch (err) {
      console.error('Failed to copy e-mail address: ', err);
    }
  }

  return (
    <>
      <br />
      <Divider horizontal style={{fontSize: 26, textAlign: "center"}}>{differentBand.name}</Divider> 
        <Grid columns={2} relaxed='very' style={{margin:"2% 2% 2% 2%", fontSize: 20, textAlign: "center"}}>
          <Grid.Column centered>
            <Image src={differentBand.image ? differentBand.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} centered rounded alt={differentBand.name} style={{maxHeight: "500px", maxWidth: "400px"}}/>
          </Grid.Column>
          <Grid.Column>
            {differentBand.on_tour ? <p><Icon className="check square" color="violet"></Icon>On Tour!</p> : <p><Icon className="x" color="violet"></Icon>Not Touring</p>}
            {differentBand.instagram ? <><p><Icon className="instagram"></Icon>{differentBand.instagram}</p></> : null}
            {differentBand.location ? <p><Icon className="location arrow" color="violet"></Icon> {differentBand.location}</p> : null}
            {differentBand.website ? <><p>Get the latest on {differentBand.name}<a href={differentBand.website} alt="website" style={{color:"#6834CC"}}> here</a></p></> : null} 
            <p style={{fontSize: 16}}>{differentBand.bio}</p>
            {differentBand.email ? <Button className="violet ui button" onClick={handleToggle}>{showContactInfo ? "Hide Info" : "Contact Info"}</Button> : null}
            {showContactInfo ? 
            <>
              <p style={{marginTop: "10px"}}>{differentBand.email}<Button icon="clone outline" onClick={handleClick} style={{marginLeft: "5px"}}></Button></p>
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
        {completedBandPosters.length > 0 ?
          <>
          <br />
            <Grid centered columns={cardsPerRow} style={{textAlign: "center"}}>
              {completedBandPosters.map((completedPoster) => (
                <Grid.Column key={completedPoster.id} >
                  <Card raised centered>
                    <Image className="poster-fixed-size" src={completedPoster.image} />
                    <Card.Content style={{textAlign: "center"}}>
                      <Card.Header style={{fontSize: 20}}>
                        {completedPoster.designer.name}
                      </Card.Header>
                      <Card.Description style={{fontSize: 16, textAlign: "center"}}>
                        {completedPoster.date}
                        <br />
                        <br />
                        {completedPoster.venue}
                        <br />
                        <br />
                        {completedPoster.location}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content style={{fontSize: 16, textAlign: "center", color: "black"}}>
                      {completedPoster.dimensions}
                      <br />
                      Edition of {completedPoster.edition}
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid>
          </>
          :
          <>
            <p style={{fontSize:"18px", fontStyle:"italic", textAlign: "center"}}>
              {differentBand.name} hasn't commissioned any posters yet... Check back soon!
            </p>
          </>
        }
        <br />
    </>
  )
}

export default DifferentBandProfile;