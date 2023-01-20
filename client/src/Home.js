import React from 'react';

const Home = ({band, designer}) => {

  if (band) {
    return (
      <div>
        <h2>Welcome, {band.name}!</h2>
      </div>
    )
  } else if (designer) {
    return (
      <div>
        <h2>Welcome, {designer.name}!</h2>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Welcome, Please Login or Signup!</h2>
      </div>
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