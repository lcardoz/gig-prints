import React, {useEffect, useState} from 'react';
import { Grid, Divider, Card, Image, Icon, Button } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const DifferentDesignerProfile = ({posters}) => {
  const {id} = useParams()
  const [differentDesigner, setDifferentDesigner] = useState({});
  const [showContactInfo, setShowContactInfo] = useState(false);
  
  useEffect(() => {
    fetch(`/designers/${id}`)
    .then(res => res.json())
    .then(data => 
      // console.log(data)
      setDifferentDesigner(data)
      )
  },[id])

  // console.log(differentDesigner)

  const cardsPerRow = 3;

  const completedDesignerPosters = posters.filter((poster) => {
    return (
      (poster.designer_id === differentDesigner.id) && (poster.status === "complete")
    )
  })

  const handleToggle = () => {
    setShowContactInfo(!showContactInfo)
  }

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(differentDesigner.name);
      alert('E-mail address copied!');
    } catch (err) {
      console.error('Failed to copy e-mail address: ', err);
    }
  }

  return (
    <>
      <br />
      <Divider horizontal style={{fontSize: 26, textAlign: "center"}}>{differentDesigner.name}</Divider>
        <Grid columns={2} relaxed='very' style={{margin:"2% 2% 2% 2%", fontSize: 20, textAlign: "center"}}>
          <Grid.Column>
            <Image src={differentDesigner.image ? differentDesigner.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} centered rounded alt={differentDesigner.name} style={{maxHeight: "500px", maxWidth: "400px"}}/>
          </Grid.Column>
          <Grid.Column>
            {differentDesigner.open_to_work ? <p><Icon className="check square" color="violet"></Icon>Open To Work!</p> : null}
            {differentDesigner.instagram ? <><p><Icon className="instagram"></Icon>{differentDesigner.instagram}</p></> : null}
            {differentDesigner.location ? <p><Icon className="location arrow" color="violet"></Icon> {differentDesigner.location}</p> : null}
            {differentDesigner.website ? <><p>Get the latest on {differentDesigner.name}<a href={differentDesigner.website} alt="website" style={{color:"#6834CC"}}> here</a></p></> : null} 
            <p style={{fontSize: 16}}>{differentDesigner.bio}</p>
            <Button className="violet ui button" onClick={handleToggle}>{showContactInfo ? "Hide Info" : "Contact Info"}</Button>
            {showContactInfo ? 
            <>
              <p style={{marginTop: "10px"}}>{differentDesigner.email}<Button icon="clone outline" onClick={handleClick} style={{marginLeft: "5px"}}></Button></p>
            </> 
            : <><br /><br /><br /></>
            }
          </Grid.Column>
        </Grid>
        <Divider horizontal style={{fontSize: 20}}>Recent Concert Posters</Divider>  
        <br />
        <br />
        <Grid columns={cardsPerRow} style={{textAlign: "center"}}>
      {completedDesignerPosters.map((completedPoster) => (
        <Grid.Column key={completedPoster.id} >
          <Card raised centered>
            <Image className="poster-fixed-size" src={completedPoster.image} />
            <Card.Content>
              <Card.Header style={{fontSize: 20}}>
                {completedPoster.band.name}
              </Card.Header>
              <Card.Description style={{ fontSize: 16}}>
                {completedPoster.date}
                <br />
                <br />
                {completedPoster.venue}
                <br />
                <br />
                {completedPoster.location}
              </Card.Description>
            </Card.Content>
            <Card.Content extra style={{ fontSize: 16}}>
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

export default DifferentDesignerProfile;