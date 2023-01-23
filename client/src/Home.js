import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Card, Divider, Icon, Reveal, Grid, Image } from 'semantic-ui-react';
import designer_screenshot from "./designer-screenshot.png";
import band_screenshot from "./band-screenshot.png";
import projects_screenshot from "./projects-screenshot.png";
import Slideshow from './Slideshow';

const Home = ({band, designer, allDesigners, setAllDesigners, allBands, setAllBands}) => {

  // const [allDesigners, setAllDesigners] = useState([]);
  // const [allBands, setAllBands] = useState([]);

  const cardsPerRow = 3;

  if (band) {
    fetch("/designers")
    .then(res => {
      if(res.ok){
        res.json()
        .then(fetchedDesigners => {
          // console.log(fetchedDesigners)
          setAllDesigners(fetchedDesigners)
        })
      }})
    return (
      <div>
      <br />
        <Divider horizontal style={{fontSize: 24}}>Welcome, <i>{band.name}</i></Divider>
          <h3 style={{textAlign: "center"}}>Discover the best and brightest poster designers from around the world:</h3>
          <br/>
        <Grid columns={cardsPerRow} style={{textAlign: "center"}}>
          {allDesigners.map((designer) => (
            <Grid.Column key={designer.id} >
              <Card raised centered as={Link} to={`/designers/${designer.id}`} >
                <Reveal animated='move'>
                  <Reveal.Content visible>
                    <Image className="poster-fixed-size" src={designer.posters.length > 0 ? designer.posters[0].image : "https://imgprd19.hobbylobby.com/a/eb/1a/aeb1a55bc888acb98a75c4cafedb06839eb32fac/1400Wx1400H-752907-1219-px.jpg"} alt={designer.name} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image className="poster-fixed-size" src={designer.image ? designer.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={designer.name} />
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header style={{fontSize: 20}}>
                    {designer.name}
                  </Card.Header>
                  <Card.Description style={{fontSize: 16, color: "black"}}>
                    <Icon className="instagram"></Icon>{designer.instagram}
                    <br />
                    {designer.location ? designer.location : <br /> }                    
                  </Card.Description>
                </Card.Content>
                <Card.Content className="content-fixed-size" style={{fontSize: 16}}>
                  {designer.open_to_work ? <p style={{color: "black"}}><Icon className="check square" color="violet"></Icon>Open To Work!</p> : <br /> }
                </Card.Content>
              </Card>
              <br />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    )

  } else if (designer) {
    fetch("/bands")
    .then(res => {
      if(res.ok){
        res.json()
        .then(fetchedBands => {
          // console.log(fetchedBands)
          setAllBands(fetchedBands)
        })
      }})
    return (
      <div>
        <br />
        <Divider horizontal style={{fontSize: 24}}>Welcome, <i>{designer.name}</i></Divider>
          <h3 style={{textAlign: "center"}}>Discover bands currently on tour:</h3>
          <br/>
        <Grid columns={cardsPerRow} style={{textAlign: "center"}}>
          {allBands.map((band) => (
            <Grid.Column key={band.id} >
              <Card raised centered style={{width:"80%", height: "90%"}} as={Link} to={`/bands/${band.id}`} >
              <Card.Content className='image' >
                <Image className="band-fixed-size" src={band.image ? band.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={band.name} />
              </Card.Content> 
                <Card.Content>
                  <Card.Header style={{fontSize: 20}}>
                    {band.name}
                  </Card.Header>
                  <Card.Description style={{fontSize: 16, color: "black"}}>
                    <Icon className="instagram"></Icon>{band.instagram}
                    <br />
                    {band.location ? band.location : <br /> }                    
                  </Card.Description>
                </Card.Content>
                <Card.Content className="content-fixed-size" style={{fontSize: 16}}>
                  {band.on_tour ? <p style={{color: "black"}}><Icon className="check square" color="violet"></Icon>On Tour!</p> : <br /> }
                </Card.Content>
              </Card>
              <br />
            </Grid.Column>
          ))} 
        </Grid>
      </div>
    )
  } else {
    return (
      <>
        <div>
          <br />
          <Divider horizontal style={{fontSize: 24}}>Welcome to Gig Prints</Divider>
          <br />
          <div style={{backgroundColor:"#6834CC"}}>
            <Slideshow />
          </div>
          <br/>
          <Divider horizontal style={{fontSize: 20}}>Discover - Connect - Create</Divider>
          <br/>
        </div>
      </>
    )
  }
}

export default Home;