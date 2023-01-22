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
      <Grid columns={cardsPerRow} style={{textAlign: "center"}}>
        {completedBandPosters.map((completedPoster) => (
          <Grid.Column key={completedPoster.id} >
            <Card raised centered>
              <Image className="poster-fixed-size" src={completedPoster.image} />
              <Card.Content>
                <Card.Header style={{fontSize: 20}}>
                  {completedPoster.designer.name}
                </Card.Header>
                <Card.Description style={{fontSize: 16}}>
                  {completedPoster.date}
                  <br />
                  <br />
                  {completedPoster.venue}
                  <br />
                  <br />
                  {completedPoster.location}
                </Card.Description>
              </Card.Content>
              <Card.Content style={{fontSize: 16}}>
                {completedPoster.dimensions}
                <br />
                <br />
                Edition of {completedPoster.edition}
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </>
  )
}

export default BandPosterCard;