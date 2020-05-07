import React from 'react';
import styled from 'styled-components';
import pointer from '../shapes.js';

const Container = styled.div`
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  outline: 2px solid red;
`

const MainImage = styled.img`
  height: 540px;
  width: 540px;
  display: block;
  position: relative;
  cursor: url(${pointer}) 20 20,pointer!important;
`

var MainPicture = function(props){
  return(
    <Container>
      <MainImage src={props.mainPicture} alt="funky fresh shirt" onClick={props.openMainPhotoModul}/>
    </Container>
  )
}

export default MainPicture;