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
`;

const UnderLine = styled.div`
  height: 4px;
  width: 100%;
  background-color: #fff;
  transition: background 0.4s;
  background: ${props => props.matchesMainPicture ? "#737373" : "white"};
  ${Wrapper}:hover & {
    background: #adadad;
  };
`;

var CarouselPicture = function(props){
  console.log('CAROUSEL PICTURE: ', props.matchesMainPicture)
  return(
    <Wrapper>
      <Image src={props.picture} alt="funky fresh shirt" onClick={props.updateMainPhoto} />
      <UnderLine matchesMainPicture={props.mainPictureMatchesPicture}></UnderLine>
    </Wrapper>
  )
}

export default CarouselPicture;