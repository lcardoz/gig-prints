import React, {useEffect} from 'react';
import { Divider, Grid, Header, Image } from 'semantic-ui-react';

const Home = ({band, designer}) => {

  useEffect(() => {
    fetch("/designers")
    .then(res => {
      if(res.ok){
        res.json()
        .then(allDesigners => {
          console.log(allDesigners)
          // console.log(posters)
        })
      }})
  },[])

  if (band) {
    return (
      <>
        <Header style={{fontSize: 24, textAlign: "center"}}>Welcome, <i>{band.name}!</i></Header> 
      </>
    )
  } else if (designer) {
    return (
      <>
        <Header style={{fontSize: 24, textAlign: "center"}}>Welcome, <i>{designer.name}!</i></Header> 
      </>
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