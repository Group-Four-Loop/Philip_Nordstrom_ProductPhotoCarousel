import React from 'react';
import Temp from './Temp.js'
// import CarouselPicture from './CarouselPicture.js';
import Carousel from './Carousel.js';
import styled from 'styled-components';
import MainPicture from './MainPicture.js';


const ProductGallery = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  outline: 2px solid red;
  height: 540px;
  width: 60px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const MainPhoto = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  outline: 2px solid blue;
  margin: 20px;
  width: 100%
`;

const Container = styled.div`

  color: palevioletred;
  outline: 2px solid black;
  display: flex;
`;



var App = function(){
  return(
    <div>
      <h1>Coming to you live from the App component!??</h1>
      <Container>

        <ProductGallery>
          <Carousel />
        </ProductGallery>

        <MainPhoto>
          <MainPicture />
        </MainPhoto>

      </Container>
    </div>
  )
}

export default App;