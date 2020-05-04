import React from 'react';
import CarouselPicture from './CarouselPicture.js';
import styled from 'styled-components';

const PictureContainer = styled.div`
  height: 100px;
  width: 100%;
  display: block;
  position: relative;
`

var Carousel = function(props){
  // console.log(props.pictures)
  return(
    <div>
      <PictureContainer>

        {props.pictures.map(picture => <CarouselPicture picture={picture}/>)}

      </PictureContainer>



      {/* <CarouselPicture />
      <CarouselPicture />
      <CarouselPicture />
      <CarouselPicture /> */}

    </div>
  )
}


export default Carousel;