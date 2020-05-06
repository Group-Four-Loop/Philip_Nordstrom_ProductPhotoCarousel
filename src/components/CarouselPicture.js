import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div``


const Image = styled.img`
  height: 90px;
  width: 100%;
  display: block;
  position: relative;
  cursor: pointer;
  margin-top: 3px;
  margin-bottom: 3px;

`

const UnderLine = styled.div`
  height: 4px;
  width: 100%;
  background-color: #fff;
  ${Wrapper}:hover & {
    background: #737373;
  };
`




var CarouselPicture = function(props){
  return(
    <Wrapper>
      <Image src={props.picture} alt="funky fresh shirt" onClick={props.updateMainPhoto} />
      <UnderLine></UnderLine>
    </Wrapper>
  )
}

export default CarouselPicture;