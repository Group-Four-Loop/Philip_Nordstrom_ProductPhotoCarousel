import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100px;
  width: 100%;
  display: block;
  position: relative;
`


var CarouselPicture = function(props){
  console.log(props)
  return(
    <div>
      <Image src={props.picture} alt="funky fresh shirt" />
    </div>
  )
}

export default CarouselPicture;