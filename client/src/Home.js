import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Card, Reveal, Grid, Header, Image } from 'semantic-ui-react';

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
      <>
        <Header style={{fontSize: 24, textAlign: "center"}}>Welcome, <i>{band.name}!</i></Header> 
        <h3 style={{textAlign: "center"}}>Touring soon? Need some cool posters? 
          <br/>
          <br/>
          Discover the best and brightest poster designers from around the world:
        </h3>
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
                  <Card.Description style={{fontSize: 16}}>
                    {designer.instagram}
                    <br />
                    {designer.location ? designer.location : <br /> }                    
                  </Card.Description>
                </Card.Content>
                <Card.Content className="content-fixed-size" style={{fontSize: 16}}>
                  {designer.open_to_work ? <p>✅ open to work! </p> : <br /> }
                </Card.Content>
              </Card>
              <br />
            </Grid.Column>
          ))}
        </Grid>
      </>
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
      <div style={{margin: "2%"}}>
        <Header style={{fontSize: 24, textAlign: "center"}}>Welcome, <i>{designer.name}!</i></Header> 
        <h3 style={{textAlign: "center"}}>Need a new poster project? 
          <br/>
          <br/>
          Discover bands currently on tour:
        </h3>
        <br/>
        <Grid columns={cardsPerRow} style={{textAlign: "center"}}>
          {allBands.map((band) => (
            <Grid.Column key={band.id} >
              <Card raised centered style={{width:"91%"}} as={Link} to={`/bands/${band.id}`} >
              <Card.Content className='image' >
                <Image className="band-fixed-size" src={band.image ? band.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={band.name} />
              </Card.Content> 
                <Card.Content>
                  <Card.Header style={{fontSize: 20}}>
                    {band.name}
                  </Card.Header>
                  <Card.Description style={{fontSize: 16}}>
                    {band.instagram}
                    <br />
                    {band.location ? band.location : <br /> }                    
                  </Card.Description>
                </Card.Content>
                <Card.Content className="content-fixed-size" style={{fontSize: 16}}>
                  {band.on_tour ? <p>✅ on tour! </p> : <br /> }
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
        <Header style={{fontSize: 24, textAlign: "center"}}>Welcome, <i>please login or signup to begin!</i></Header>
      </>
    )
  }

  // return (
  //   <div>
  //   { band ? <><h2>Welcome, band!</h2></> : null }
  //   { designer ? <><h2>Welcome, designer!</h2></> : null }
  //   { !band && !designer ? <><h2>Welcome, to the homepage!</h2></> : null }
  //   </div>
  // )
}

export default Home;