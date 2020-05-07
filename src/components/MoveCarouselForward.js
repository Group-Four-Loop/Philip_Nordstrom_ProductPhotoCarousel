import React from 'react';
import styled from 'styled-components';


const ButtonMoveForward = styled.div`
  height: 20px;
  width: 60px;
  display: block;
  position: relative;
  // outline: 2px solid blue;s


`

var MoveCarouselForward = function(props){
  return(
    <ButtonMoveForward onClick={props.moveForward}>
      <svg focusable="false" height="9" width="16">
        <path d="M8.002 8L1 1m7.002 7L15 1.004" stroke="#393939"></path>
      </svg>
    </ButtonMoveForward>
  )
}

export default MoveCarouselForward;