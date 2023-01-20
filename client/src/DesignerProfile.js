import React from 'react';
// import { useParams } from 'react-router-dom'
import { Divider, Grid, Header, Image } from 'semantic-ui-react';
import DesignerPosterCard from './DesignerPosterCard';

const DesignerProfile = ({designer, posters}) => {

  // const { id } = useParams()
  // console.log(id)
  // console.log(designer)

  return (
    <>
        <br />
        <Header style={{fontSize: 30, textAlign: "center"}}>{designer.name.toUpperCase()}</Header>
        <br />
        <Grid columns={2} relaxed='very' style={{margin:"2%", fontSize: 20, textAlign: "center"}}>
          <Grid.Column>
            <Image src={designer.image ? designer.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} size='large' centered rounded alt={designer.name}/>
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
        <br />
        <DesignerPosterCard designer={designer} posters={posters} />
        <br />
    </>
  )
}

export default DesignerProfile;