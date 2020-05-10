import React from 'react';
import styled from 'styled-components';

const ButtonOne = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid white;
border-radius: 50%;
background-color: #EF745A;
height: 35px;
width: 35px;
outline: none;
box-shadow:  0 0 0 0.5px grey;
&:hover {
  box-shadow: 0 0 0 2px grey;
}
`;

const ButtonTwo = styled.button`
  font-size: 1em;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: #80F96A;
  height: 35px;
  width: 35px;
  outline: none;
  box-shadow:  0 0 0 0.5px grey;
  &:hover {
    box-shadow: 0 0 0 2px grey;
  }
`;

//YOU ARE WORKING ON THIS BUTTON
const ButtonThree = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: #858FF2;
  height: 35px;
  width: 35px;
  outline: none;
  box-shadow:  0 0 0 0.5px grey;
  &:hover {
    box-shadow: 0 0 0 2px grey;
  }
`;

const ButtonBox = styled.div`
// border: 3px solid #73AD21;
background: white;
position: fixed;
bottom: 0;
// left: 60px;
width: 100%;
height: 89px;
`

const Text = styled.div`
  margin-left: 18px;
  margin-top: 12px;
  font: Brandon Text;
  font-weight: 400;
  font-size: 0.9rem;
  color: #393939;
`;

//Color:3 {props.colorNames[2]}

var ModalColors = function(props){
  console.log(props)
  return(

    <ButtonBox>
      <Text>Color: {props.currentColorName}</Text>
      <ButtonOne onClick={props.changeColorToItemOne}></ButtonOne>
      <ButtonTwo onClick={props.changeColorToItemTwo}></ButtonTwo>
      <ButtonThree onClick={props.changeColorToItemThree}></ButtonThree>
    </ButtonBox>

  )
}

export default ModalColors;