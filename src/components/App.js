import React from 'react';
import Carousel from './Carousel.js';
import styled from 'styled-components';
import MainPicture from './MainPicture.js';
import MoveCarouselForward from './MoveCarouselForward.js';
import MoveCarouselBackwards from './MoveCarouselBackwards.js';
import axios from 'axios';
import { chev } from '../shapes.js';

const ProductGallery = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  outline: 1px dashed green;
  height: 510px;
  width: 60px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CarouselContainer = styled.div`
  outline: 1px dashed purple;
  height: 520px;
  width: 60px;
`

const MainPhoto = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  outline: 2px solid blue;
  margin: 20px;
  width: 100%
`;

const AppContainer = styled.div`
  color: palevioletred;
  outline: 2px solid black;
  display: flex;
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.carouselRef = React.createRef();

    this.state = {
      pictures: [],
      visiblePictures: [],
      mainPicture: '',
      currentImageIndex: 0,
      currentCarouselYCoord: 0,
      carouselLength: 0,
    };
    this.updateMainPhoto = this.updateMainPhoto.bind(this);
    this.openMainPhotoModul = this.openMainPhotoModul.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackwards = this.moveBackwards.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  updateMainPhoto(event){
    this.setState({
      mainPicture: event.target.src
    })
    console.log(event.target.src)
  }

  openMainPhotoModul(event){
    console.log(event.target)
  }

  moveForward(){
    // Using the variable 'newYCoord' helps avoid possible asyncronous issues w/ setState()
    var newYCoord = (this.state.currentCarouselYCoord + 500 > this.state.carouselLength) ? this.state.currentCarouselYCoord : this.state.currentCarouselYCoord + 500;
    this.setState({
      currentCarouselYCoord: newYCoord
    })
    this.carouselRef.current.scroll({
      left: 0,
      top: newYCoord,
      behavior: 'smooth'
    })
    console.log('MOVE CAROUSEL FORWARD -> REF: ', newYCoord)
  }

  moveBackwards(){
    var newYCoord = (this.state.currentCarouselYCoord === 0) ? this.state.currentCarouselYCoord : this.state.currentCarouselYCoord - 500;
    this.setState({
      currentCarouselYCoord: newYCoord
    })
    this.carouselRef.current.scroll({
      left: 0,
      top: newYCoord,
      behavior: 'smooth'
    })
    console.log('MOVE CAROUSEL BACKWARDS -> REF: ', newYCoord)
  }

  getInfo(){
    let indexOfItem = 0;
    let integerBetweenOneAndThree = function() {
      indexOfItem += Math.floor(Math.random() * (99) + 1);
    }
    integerBetweenOneAndThree();

    axios.get('/items')
    .then(response => {
      // handle success
      this.setState({
        pictures: response.data[indexOfItem].colors.color1,
        mainPicture: response.data[indexOfItem].colors.color1[0],
        carouselLength: response.data[indexOfItem].colors.color1.length * 100
      })
      console.log(response.data[indexOfItem], 'INDEX: ', indexOfItem);
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    //I have commented out .finally() because it doesn't seem to be supported by jest, and it is preventing me from writing more tests.

    // .finally(() => {
    //   // always executed
    // });
  }

  componentDidMount(){
    this.getInfo()
  }

  render() {

    return(
      <div>
        <h1>Nordstrom Photo Gallery</h1>
        <AppContainer>
          <CarouselContainer>
            <MoveCarouselBackwards moveBackwards={this.moveBackwards}/>

            <ProductGallery>
              <Carousel pictures={this.state.pictures} mainPicture={this.state.mainPicture} updateMainPhoto={this.updateMainPhoto} ref={this.carouselRef}/>
            </ProductGallery>

            <MoveCarouselForward moveForward={this.moveForward}/>
          </CarouselContainer>

          <MainPhoto>
            <MainPicture mainPicture={this.state.mainPicture} openMainPhotoModul={this.openMainPhotoModul}/>

          </MainPhoto>



        </AppContainer>
        {/* <div>
        <svg focusable="false" height="9" width="16"><path d="M8.002 8L1 1m7.002 7L15 1.004"></path></svg>

        </div> */}
      </div>
    )
  }

}

export default App;