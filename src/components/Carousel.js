import React from 'react';
import CarouselPicture from './CarouselPicture.js';
import styled from 'styled-components';

const PictureContainer = styled.div`
  height: 500px;
  width: 60px;
  display: block;
  position: relative;
  overflow-y: hidden;
`;

var Carousel = React.forwardRef((props, ref) => (

  <PictureContainer ref={ref}>

    {props.pictures.map(picture =>
      <CarouselPicture
        picture={picture}
        mainPicture={props.mainPicture}
        mainPictureMatchesPicture={props.mainPicture === picture}
        updateMainPhoto={props.updateMainPhoto}
        key={picture}
      />
    )}

  </PictureContainer>

))

export default Carousel;