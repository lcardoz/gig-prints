import React, {useEffect, useState} from 'react';
import { Header, Grid, Divider, Card, Image, Dropdown, Button, Segment } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const DifferentDesignerProfile = ({posters}) => {
  const {id} = useParams()
  const [differentDesigner, setDifferentDesigner] = useState({});
  
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

  return (
    <>
        <br />
        <Header style={{fontSize: 26, textAlign: "center"}}>{differentDesigner.name}</Header>
        <br />
        <Grid columns={2} relaxed='very' style={{margin:"0% 2% 2% 2%", fontSize: 20, textAlign: "center"}}>
          <Grid.Column>
            <Image src={differentDesigner.image ? differentDesigner.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} centered rounded alt={differentDesigner.name} style={{maxHeight: "600px"}}/>
          </Grid.Column>
          <Grid.Column>
            {differentDesigner.open_to_work ? <p>✅ open to work! </p> : null}
            {differentDesigner.instagram ? <p>IG: {differentDesigner.instagram}</p> : null}
            {differentDesigner.website ? <a href={differentDesigner.website} alt="website">{differentDesigner.name}'s Website</a> : null}
            <br />
            <br />
            {differentDesigner.location ? <p>📍 {differentDesigner.location}</p> : null}
            <p style={{fontSize: 16}}>{differentDesigner.bio}</p>
          </Grid.Column>
        </Grid>
        <br />
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