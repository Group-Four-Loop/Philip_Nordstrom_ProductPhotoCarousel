import React from 'react';
import { chev } from '../shapes.js';
import styled from 'styled-components';


const ButtonMoveBackwards = styled.div`
  height: 20px;
  width: 60px;
  display: block;
  position: relative;
  // outline: 1px dashed blue;
  cursor: pointer;

`

const Container = styled.div`
  padding-left: 20px;
`

var MoveCarouselBackwards = function(props){
  // console.log('PROPS IN MOVING backwards CAROSEL: ', props)
  if (props.moveBackwardsVisible === true) {
    return(
      <ButtonMoveBackwards onClick={props.moveBackwards}>
        <Container>
          <svg focusable="false" height="9" width="16">
            <path d="M7.998 1L15 8M7.998 1L1 7.996" stroke="#393939"></path>
          </svg>
        </Container>
      </ButtonMoveBackwards>
    )
  } else {
    return null;
  }
}

//style={{backgroundColor: 'grey'}}

export default MoveCarouselBackwards;
// style={{backgroundColor: 'grey', fill:'white'}}

{/* <p class="fa fa-angle-down" style="font-size:48px;color:grey"><p/> */}
