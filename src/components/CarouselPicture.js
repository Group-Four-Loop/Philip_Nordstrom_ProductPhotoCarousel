import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100px;
  width: 100%;
  display: block;
  position: relative;
  cursor: pointer;
`

// const CarouselElement = styled.div`
//   height: 100%;
//   right: 0;
//   position: absolute;
//   display: none;
//   overflow-y: auto;
//   top: 0;
//   left: 0;
// `


var CarouselPicture = function(props){
  return(
    // <CarouselElement>
      <Image src={props.picture} alt="funky fresh shirt" onClick={props.updateMainPhoto} />
    // </CarouselElement>
  )
}

export default CarouselPicture;