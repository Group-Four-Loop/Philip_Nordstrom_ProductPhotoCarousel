import React from 'react';
import styled from 'styled-components';
import pointer from '../shapes.js'

const MainImage = styled.img`
  height: 540px;
  width: 540px;
  display: block;
  position: relative;
  cursor: url(pointer) 20 20,pointer!important;

`

console.log(pointer)

// data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iNDEiIHdpZHRoPSI0MSI+PHN0eWxlPi5zdDF7ZmlsbDpub25lO3N0cm9rZTojMzkzOTM5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjxjaXJjbGUgY3g9IjIwLjUiIGN5PSIyMC41IiByPSIyMCIgb3BhY2l0eT0iLjgiIGZpbGw9IiNmZmYiLz48ZyBpZD0iX3gzQ19Hcm91cF94M0VfXzdfIj48cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgtNDQuOTg0IDI2Ljc1IDI2Ljc1KSIgY2xhc3M9InN0MSIgZD0iTTI1LjUgMjNoMi40djcuNWgtMi40eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMy44IDIzLjhsLTEtMSIvPjxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjE3LjgiIGN5PSIxNy44IiByPSI3Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LjIgMTcuOGg3TTE3LjggMTQuMnY3Ii8+PC9nPjwvc3ZnPg




var MainPicture = function(props){
  // console.log('MAIN PHOTO: ', props)
  return(
    <div>
      <MainImage src={props.mainPicture} alt="funky fresh shirt" />
    </div>
  )
}

export default MainPicture;