import { useState } from "react";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";




const ConcertGoIndex = ({ args, currentEvent }) => {
  return(
    <>
    
    <div className="grid grid-cols-3 gap-8">
      { currentEvent?.map(({ currentEvent, city, state, venue, artist, date, show_time, genre, images, id }) => {
        return(
          <Card key={ currentEvent }
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Concert Image"
    src= { images }
  />
  <CardBody>
    <CardTitle tag="h5">
      { artist }
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      { genre } 
    </CardSubtitle>
    <CardText>
      { venue }
      <br/>
      { city }, { state } 
      <br/> 
      { date } @ { show_time }
    </CardText>
    <Button>
      View Event
    </Button>
  </CardBody>
</Card>
        )

      })}
    </div>
    
    </>
  )
}
	

export default ConcertGoIndex;
