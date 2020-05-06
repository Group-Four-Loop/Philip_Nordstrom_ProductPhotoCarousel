import React from 'react';
import Carousel from './Carousel.js';
import styled from 'styled-components';
import MainPicture from './MainPicture.js';
import MoveCarouselForward from './MoveCarouselForward.js';
import MoveCarouselBackwards from './MoveCarouselBackwards.js';
import axios from 'axios';

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
      currentCarouselYCoord: 0
    };
    this.updateMainPhoto = this.updateMainPhoto.bind(this);
    this.openMainPhotoModul = this.openMainPhotoModul.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackwards = this.moveBackwards.bind(this);
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
    // helps avoid possible asyncronous issues w/ setState()
    var newYCoord = this.state.currentCarouselYCoord + 100;
    this.setState({
      currentCarouselYCoord: newYCoord
    })
    this.carouselRef.current.scroll({
      left: 0,
      top: newYCoord,
      behavior: 'smooth'
    })
    console.log('CAROUSEL REF: ', this.carouselRef.current)

    // this.setState(prevState => {
    //   if (prevState.currentImageIndex > this.state.pictures.length - 5) {
    //     return {
    //       currentImageIndex: prevState.currentImageIndex
    //     }
    //   } else {
    //     return {
    //       currentImageIndex: prevState.currentImageIndex + 5
    //     }
    //   }
    // })

  }

  moveBackwards(){
    var newYCoord = this.state.currentCarouselYCoord - 100;
    this.setState({
      currentCarouselYCoord: newYCoord
    })
    this.carouselRef.current.scroll({
      left: 0,
      top: newYCoord,
      behavior: 'smooth'
    })
    console.log('CAROUSEL REF: ', this.carouselRef.current)


    // this.setState(prevState => {
    //   if (prevState.currentImageIndex < 5) {
    //     return {
    //       currentImageIndex: prevState.currentImageIndex
    //     }
    //   } else {
    //     return {
    //       currentImageIndex: prevState.currentImageIndex - 5
    //     }
    //   }
    // })
  }

  componentDidMount(){
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
        mainPicture: response.data[indexOfItem].colors.color1[0]
      })
      console.log(response.data[indexOfItem], 'INDEX: ', indexOfItem);
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    });




    // this.setState({
    //   pictures: ['https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/1f6ef202-58c9-4645-9730-1a60fbf11610.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/226b02a3-6caa-442c-b132-7be6b6723517.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/2411e43a-48c5-49e6-aaab-77c4016f7f3d.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/49e60637-1a35-469f-b959-f7ddc9b9156c.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/5b39c29c-fa76-4dea-adda-c7e1aca52723.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/6b927f32-74f4-42f3-b7ab-24c8dac0946c.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/a7db420a-40e1-4f8e-9a0d-5cf3c165b859.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/cd69d398-ad36-4088-896c-c8f29183e4de.jpg'],
    //   mainPicture: 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/1f6ef202-58c9-4645-9730-1a60fbf11610.jpg'
    // })
  }

  render() {
    // var fiveImages = this.state.pictures.slice(this.state.currentImageIndex, this.state.currentImageIndex + 5)

    return(
      <div>
        <h1>Nordstrom Photo Gallery</h1>
        <AppContainer>

          <ProductGallery>
            <Carousel pictures={this.state.pictures} updateMainPhoto={this.updateMainPhoto} ref={this.carouselRef}/>
          </ProductGallery>

          <MainPhoto>
            <MainPicture mainPicture={this.state.mainPicture} openMainPhotoModul={this.openMainPhotoModul}/>
          </MainPhoto>

          <MoveCarouselForward moveForward={this.moveForward}/>
          <MoveCarouselBackwards moveBackwards={this.moveBackwards}/>


        </AppContainer>
      </div>
    )
  }

}

export default App;