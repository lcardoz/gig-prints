import React from 'react';
import {Image, Grid, Card } from 'semantic-ui-react';

const DesignerPosterCard = ({designer, posters}) => {

  const cardsPerRow = 3;

  const completedDesignerPosters = posters.filter((poster) => {
    return (
      (poster.designer_id === designer.id) && (poster.status === "complete")
    )
  })

  // console.log(completedDesignerPosters)

  return (
    <>
    <Grid centered columns={cardsPerRow} style={{textAlign: "center"}}>
      {completedDesignerPosters.map((completedPoster) => (
        <Grid.Column key={completedPoster.id} >
          <Card raised centered>
            <Image className="poster-fixed-size" src={completedPoster.image} />
            <Card.Content style={{textAlign: "center"}}>
              <Card.Header style={{fontSize: 20}}>
                {completedPoster.band.name}
              </Card.Header>
              <Card.Description style={{ fontSize: 16, textAlign: "center"}}>
                {completedPoster.date}
                <br />
                <br />
                {completedPoster.venue}
                <br />
                <br />
                {completedPoster.location}
              </Card.Description>
            </Card.Content>
            <Card.Content extra style={{textAlign: "center", fontSize: 16, color: "black"}}>
              {completedPoster.dimensions}
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

export default DesignerPosterCard;