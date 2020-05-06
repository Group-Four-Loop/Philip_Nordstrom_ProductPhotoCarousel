import React from 'react';
import CarouselPicture from './CarouselPicture.js';
import styled from 'styled-components';

const PictureContainer = styled.div`
  height: 550px;
  width: 100%;
  display: block;
  position: relative;
  // background-color: red;
  // margin: 200px;
  overflow-y: hidden;

`

// return <div ref={this.myRef} />;


var Carousel = React.forwardRef((props, ref) => (


  <PictureContainer ref={ref}>

    {props.pictures.map(picture =>
      <CarouselPicture picture={picture} updateMainPhoto={props.updateMainPhoto} key={picture}/>
    )}

  </PictureContainer>

))


export default Carousel;