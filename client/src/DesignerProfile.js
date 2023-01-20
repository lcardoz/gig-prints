import React from 'react';
import { useParams } from 'react-router-dom'
import { Divider, Grid, Button, Header, Image, Segment } from 'semantic-ui-react';
import DesignerPosterCard from './DesignerPosterCard';

const DesignerProfile = ({designer, posters}) => {

  const { id } = useParams()
  
  console.log(id)
  console.log(designer)

  return (
    <>
      <Segment style={{fontSize: 24, textAlign: "center"}}>
        {id==designer.id ? <Button floated='right' primary>Edit Profile</Button> : null}
        <br />
        <Header>{designer.name.toUpperCase()}</Header>
        <br />
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <Image src={designer.image} size='medium' centered rounded/>
          </Grid.Column>
          <Grid.Column>
            {designer.open_to_work ? <p>✅ open to work! </p> : null}
            {designer.instagram ? <p>IG: {designer.instagram}</p> : null}
            {designer.website ? <a href={designer.website} alt="website">{designer.name}'s Website</a> : null}
            <br />
            <br />
            {designer.location ? <p>📍 {designer.location}</p> : null}
            <p>{designer.bio}</p>
          </Grid.Column>
        </Grid>
        <br />
        <Divider horizontal style={{fontSize: 20}}>Recent Concert Posters</Divider>  
        <br />
        <DesignerPosterCard designer={designer} posters={posters} />
        <br />
      </Segment>
    </>
  )
}

export default DesignerProfile;