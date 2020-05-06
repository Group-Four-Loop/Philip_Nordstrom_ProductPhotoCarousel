import React from 'react';
import styled from 'styled-components';
import pointer from '../shapes.js';

const MainImage = styled.img`
  height: 540px;
  width: 540px;
  display: block;
  position: relative;
  cursor: url(${pointer}) 20 20,pointer!important;
`

var MainPicture = function(props){
  return(
    <div>
      <MainImage src={props.mainPicture} alt="funky fresh shirt" onClick={props.openMainPhotoModul}/>
    </div>
  )
}

export default MainPicture;