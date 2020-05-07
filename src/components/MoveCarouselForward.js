import React from 'react';
import styled from 'styled-components';


const ButtonMoveForward = styled.div`
  height: 20px;
  width: 60px;
  display: block;
  position: relative;
  outline: 1px dashed red;
`

const Container = styled.div`
  padding-left: 20px;
`

var MoveCarouselForward = function(props){
  console.log('PROPS IN MOVING FORWARD CAROSEL: ', props)
  return(

    <ButtonMoveForward onClick={props.moveForward}>
      <Container>
        <svg focusable="false" height="9" width="16">
          <path d="M8.002 8L1 1m7.002 7L15 1.004" stroke="#393939"></path>
        </svg>
      </Container>
    </ButtonMoveForward>
  )
}

export default MoveCarouselForward;