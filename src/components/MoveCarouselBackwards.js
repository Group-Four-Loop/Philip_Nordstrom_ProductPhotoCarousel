import React from 'react';
import { chev } from '../shapes.js';
import styled from 'styled-components';


const ButtonMoveBackwards = styled.div`
  height: 20px;
  width: 60px;
  display: block;
  position: relative;
  // outline: 2px solid blue;


`


var MoveCarouselBackwards = function(props){
  return(
    <ButtonMoveBackwards onClick={props.moveBackwards}>
      <svg focusable="false" height="9" width="16">
        <path d="M7.998 1L15 8M7.998 1L1 7.996" stroke="#393939"></path>
      </svg>
    </ButtonMoveBackwards>
  )
}

//style={{backgroundColor: 'grey'}}

export default MoveCarouselBackwards;
// style={{backgroundColor: 'grey', fill:'white'}}

{/* <p class="fa fa-angle-down" style="font-size:48px;color:grey"><p/> */}
