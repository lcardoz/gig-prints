import React, {useState} from 'react';
// import { useParams } from 'react-router-dom'
import { Divider, Grid, Image, Icon, Button } from 'semantic-ui-react';
import DesignerPosterCard from './DesignerPosterCard';

const DesignerProfile = ({designer, posters}) => {

  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleToggle = () => {
    setShowContactInfo(!showContactInfo)
  }

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(designer.name);
      alert('E-mail address copied!');
    } catch (err) {
      console.error('Failed to copy e-mail address: ', err);
    }
  }

  // const { id } = useParams()
  // console.log(id)
  // console.log(designer)

  return (
    <>
      <br />
      <Divider horizontal style={{fontSize: 26, textAlign: "center"}}>{designer.name}</Divider>
        <Grid columns={2} relaxed='very' style={{margin:"2% 2% 2% 2%", fontSize: 20, textAlign: "center"}}>
          <Grid.Column>
            <Image src={designer.image ? designer.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} centered rounded alt={designer.name} style={{maxHeight: "500px", maxWidth: "400px"}}/>
          </Grid.Column>
          <Grid.Column>
            {designer.open_to_work ? <p><Icon className="check square" color="violet"></Icon>Open To Work!</p> : null}
            {designer.instagram ? <><p><Icon className="instagram"></Icon>{designer.instagram}</p></> : null}
            {designer.location ? <p><Icon className="location arrow" color="violet"></Icon> {designer.location}</p> : null}
            {designer.website ? <><p>Get the latest on {designer.name}<a href={designer.website} alt="website" style={{color:"#6834CC"}}> here</a></p></> : null} 
            <p style={{fontSize: 16}}>{designer.bio}</p>
            <Button className="violet ui button" onClick={handleToggle}>{showContactInfo ? "Hide Info" : "Contact Info"}</Button>
            {showContactInfo ? 
            <>
              <p style={{marginTop: "10px"}}>{designer.name}<Button icon="clone outline" onClick={handleClick} style={{marginLeft: "5px"}}></Button></p>
            </> 
            : <><br /><br /><br /></>
            }
          </Grid.Column>
        </Grid>
        <Divider horizontal style={{fontSize: 20}}>Recent Concert Posters</Divider>  
        <br />
        <br />
        <DesignerPosterCard designer={designer} posters={posters} />
        <br />
    </>
  )
}

export default DesignerProfile;