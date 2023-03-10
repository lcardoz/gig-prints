import React from 'react';
import {Image, Grid, Card } from 'semantic-ui-react';

const BandPosterCard = ({band, posters}) => {

  const cardsPerRow = 3;

  const completedBandPosters = posters.filter((poster) => {
    return (
      (poster.band_id === band.id) && (poster.status === "complete")
    )
  })

  // console.log(completedBandPosters)

  return (
    <>
    {completedBandPosters.length > 0 ?
      <>
      <br />
      <Grid centered columns={cardsPerRow} style={{textAlign: "center"}}>
        {completedBandPosters.map((completedPoster) => (
          <Grid.Column key={completedPoster.id} >
            <Card raised centered className="card-fixed-size" >
              <Image className="poster-fixed-size" src={completedPoster.image} />
              <Card.Content style={{textAlign: "center"}}>
                <Card.Header style={{fontSize: 20}}>
                  {completedPoster.designer.name}
                </Card.Header>
                <Card.Description style={{fontSize: 16, textAlign: "center"}}>
                  {completedPoster.date}
                  <br />
                  <br />
                  {completedPoster.venue}
                  <br />
                  <br />
                  {completedPoster.location}
                </Card.Description>
              </Card.Content>
              <Card.Content style={{fontSize: 16, textAlign: "center", color: "black"}}>
                {completedPoster.dimensions}
                <br />
                Edition of {completedPoster.edition}
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </>
    :
    <>
    <p style={{fontSize:"18px", fontStyle:"italic", textAlign: "center"}}>
      Complete projects to add your latest and greatest posters here!
    </p>
    </>
    }
    </>
  )
}

export default BandPosterCard;