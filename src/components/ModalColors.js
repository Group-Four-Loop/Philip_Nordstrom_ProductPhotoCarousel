import React from 'react';
import styled from 'styled-components';

const ButtonOne = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 50%;
  background-color: red;
  height: 35px;
  width: 35px;
`;

const ButtonTwo = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 50%;
  background-color: white;
  height: 35px;
  width: 35px;
`;

const ButtonThree = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 50%;
  background-color: blue;
  height: 35px;
  width: 35px;
`;

const ButtonBox = styled.div`
// border: 3px solid #73AD21;
background: white;
position: fixed;
bottom: 0;
width: 100%;
height: 89px;
`

const Text = styled.div`
  margin-left: 18px;
  margin-top: 12px;
`

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