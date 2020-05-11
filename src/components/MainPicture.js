import React from 'react';
import styled from 'styled-components';
import magnifyingGlass from '../shapes.js';

const Container = styled.div`
  // outline: 2px solid red;
`

const MainImage = styled.img`
  width: 40%;
  height: auto;
  display: block;
  position: relative;
  cursor: url(${magnifyingGlass}) 20 20,pointer!important;
  // outline: 2px solid red;
  margin-left: 40px;
  margin-right: 40px;
`;

var MainPicture = function(props){
  return(
    <Container>
      <MainImage src={props.mainPicture} alt="funky fresh shirt" onClick={props.handleShowMessageClick}/>
    </Container>
  )
}

export default MainPicture;