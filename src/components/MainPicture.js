import React from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
  height: 540px;
  width: 540px;
  display: block;
  position: relative;
`


var MainPicture = function(props){
  // console.log('MAIN PHOTO: ', props)
  return(
    <div>
      <MainImage src={props.mainPicture} alt="funky fresh shirt" />
    </div>
  )
}

export default MainPicture;