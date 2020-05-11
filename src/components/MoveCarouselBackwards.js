import React from 'react';
import styled from 'styled-components';

const ButtonMoveBackwards = styled.div`
  height: 20px;
  width: 60px;
  display: block;
  position: relative;
  // outline: 1px dashed blue;
  cursor: pointer;
`;

const UpArrowPlaceHolder = styled.div`
height: 20px;
width: 60px;
display: block;
position: relative;
`;

const Container = styled.div`
  padding-left: 20px;
`;

var MoveCarouselBackwards = function(props){
  if (props.moveBackwardsVisible === true) {
    return(
      <ButtonMoveBackwards onClick={props.moveBackwards}>
        <Container>

          {/* MIGHT NEED TO CONVERT THE BELOW FROM IN-LINE CSS TO STYLED COMPONENTS */}
          <svg focusable="false" height="9" width="16">
            <path d="M7.998 1L15 8M7.998 1L1 7.996" stroke="#393939"></path>
          </svg>

        </Container>
      </ButtonMoveBackwards>
    )
  } else {
    return(
      <UpArrowPlaceHolder></UpArrowPlaceHolder>
    );
  }
}

export default MoveCarouselBackwards;