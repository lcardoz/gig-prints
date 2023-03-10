import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Card, Divider, Icon, Reveal, Grid, Image } from 'semantic-ui-react';
import Slideshow from './Slideshow';

const Home = ({band, designer, allDesigners, setAllDesigners, allBands, setAllBands}) => {

  const [showFiltered, setShowFiltered] = useState(false)
  const filteredDesigners = allDesigners.filter((designer) => {
    if (showFiltered) {
      return designer.open_to_work === true
    }
    else {
      return true
    }
  })
  const filteredBands = allBands.filter((band) => {
    if (showFiltered) {
      return band.on_tour === true
    }
    else {
      return true
    }
  })

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
      <div >  
      <br />
        <Divider horizontal style={{fontSize: 24}}>Welcome, <i>{band.name}</i></Divider>
          <h3 style={{textAlign: "center"}}>Explore Poster Designers</h3>
          <div style={{textAlign: "center"}}>
            <label>
              <input id="filter-checkbox" type="checkbox" name="filter" checked={showFiltered} onChange={e=>setShowFiltered(e.target.checked)}/>
              Only Show Poster Designers Open To Work
            </label>
          </div>   
          <br/>
        <Grid centered columns={cardsPerRow} style={{textAlign: "center"}}>
          {filteredDesigners.map((designer) => (
            <Grid.Column key={designer.id} >
              <Card id="hover-card" raised centered as={Link} to={`/designers/${designer.id}`}  >
                <Reveal animated='move'>
                  <Reveal.Content visible>
                    <Image className="poster-fixed-size" src={designer.posters.length > 0 ? designer.posters[0].image : "https://imgprd19.hobbylobby.com/a/eb/1a/aeb1a55bc888acb98a75c4cafedb06839eb32fac/1400Wx1400H-752907-1219-px.jpg"} alt={designer.name} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image className="poster-fixed-size" src={designer.image ? designer.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={designer.name} />
                  </Reveal.Content>
                </Reveal>
                <Card.Content >
                  <Card.Header style={{fontSize: 20, textAlign: "center"}}>
                    {designer.name}
                  </Card.Header>
                  <Card.Description style={{fontSize: 16, textAlign: "center"}}>
                    {designer.instagram ? <><Icon className="instagram"></Icon>{designer.instagram} <br /></> : null}
                    <br />
                    {designer.location ? designer.location : <br /> }                    
                  </Card.Description>
                </Card.Content>
                <Card.Content className="content-fixed-size" style={{fontSize: 16, textAlign: "center"}}>
                  {designer.open_to_work ? <p style={{color: "black"}}><Icon className="check square" color="violet"></Icon>Open To Work!</p> : <p style={{color: "black"}}><Icon className="x" color="violet"></Icon>Not Taking Commissions</p> }
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
      <div >
        <br />
        <Divider horizontal style={{fontSize: 24}}>Welcome, <i>{designer.name}</i></Divider>
          <h3 style={{textAlign: "center"}}>Explore Bands</h3>
          <div style={{textAlign: "center"}}>
            <label>
              <input id="filter-checkbox" type="checkbox" name="filter" checked={showFiltered} onChange={e=>setShowFiltered(e.target.checked)}/>
              Only Show Bands Currently On Tour
            </label>
          </div>   
          <br/>
        <Grid centered columns={cardsPerRow} style={{textAlign: "center"}}>
          {filteredBands.map((band) => (
            <Grid.Column key={band.id} >
              <Card id="hover-card" raised centered style={{width:"80%", height: "90%"}} as={Link} to={`/bands/${band.id}`} >
              <Card.Content >
                <Image className="band-fixed-size" src={band.image ? band.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={band.name} />
              </Card.Content> 
                <Card.Content style={{textAlign: "center"}}>
                  <Card.Header style={{fontSize: 20}}>
                    {band.name}
                  </Card.Header>
                  <Card.Description style={{fontSize: 16}}>
                    {band.instagram ? <><Icon className="instagram"></Icon>{band.instagram} <br /></> : null}
                    {band.location ? band.location : <br /> }                    
                  </Card.Description>
                </Card.Content>
                <Card.Content className="content-fixed-size" style={{fontSize: 16, textAlign: "center"}}>
                  {band.on_tour ? <p style={{color: "black"}}><Icon className="check square" color="violet"></Icon>On Tour!</p> : <p style={{color: "black"}}><Icon className="x" color="violet"></Icon>Not Touring</p> }
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
          <Divider horizontal style={{fontSize: 24}}>Welcome to Gig Prints</Divider>
          <div style={{backgroundColor:"#6834CC"}}>
            <Slideshow />
          </div>
          <Divider horizontal style={{fontSize: 20, marginBottom: "0px"}}>Discover - Connect - Create</Divider>
          <br/>
        </div>
      </>
    )
  }
}

export default Home;