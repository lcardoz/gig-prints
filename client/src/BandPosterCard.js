import React from 'react';
import {Image, Grid, Card } from 'semantic-ui-react';


const BandPosterCard = ({band}) => {

  const cardsPerRow = 3;

  return (
    <>
      <Grid columns={cardsPerRow}>
        {band.completed_posters.map((completedPoster) => (
          <Grid.Column key={completedPoster.id} >
            <Card centered>
              {/* <img 
                className='card-image'
                src={completedPoster.image}
                alt={completedPoster.designer.name}
              /> */}
              <Image src={completedPoster.image} />
              <Card.Content>
                <Card.Header>
                  {completedPoster.designer.name}
                </Card.Header>
                <Card.Description style={{ fontSize: 20}}>
                  {completedPoster.date}
                  <br />
                  <br />
                  {completedPoster.venue}
                  <br />
                  <br />
                  {completedPoster.location}
                </Card.Description>
              </Card.Content>
              <Card.Content extra style={{ fontSize: 20}}>
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