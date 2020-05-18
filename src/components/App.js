import React from 'react';
import Carousel from './Carousel.js';
import styled from 'styled-components';
import MainPicture from './MainPicture.js';
import MoveCarouselForward from './MoveCarouselForward.js';
import MoveCarouselBackwards from './MoveCarouselBackwards.js';
import axios from 'axios';
import Modal from './Modal.js';
import ModalColors from './ModalColors.js';

const ProductGallery = styled.div`
  // outline: 1px dashed green;
  height: 510px;
  width: 60px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CarouselContainer = styled.div`
  // outline: 1px dashed purple;
  height: 520px;
  width: 60px;
`;

const MainPhoto = styled.div`
  // outline: 2px solid blue;
  margin: 20px;
  width: 100%;
`;

const AppContainer = styled.div`
  // outline: 2px solid black;
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
      moveForwardVisible: true,
      moveBackwardsVisible: false,
      showModal: false,
      availableColors: [],
      colorNames: [],
      currentColorName: '',
      currentColorIndexSelected: '',
      buttonOneSelected: true,
      buttonTwoSelected: false,
      buttonThreeSelected: false,
      node: ''
    };

    this.updateMainPhoto = this.updateMainPhoto.bind(this);
    this.openMainPhotoModul = this.openMainPhotoModul.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackwards = this.moveBackwards.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.handleShowMessageClick = this.handleShowMessageClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.changeColorToItemOne = this.changeColorToItemOne.bind(this);
    this.changeColorToItemTwo = this.changeColorToItemTwo.bind(this);
    this.changeColorToItemThree = this.changeColorToItemThree.bind(this);

  }

  updateMainPhoto(event){
    this.setState({
      mainPicture: event.target.src
    })
  }



  openMainPhotoModul(event){
    // console.log(event.target)
    //this method does nothing!
  }

  handleShowMessageClick(){
    this.setState({ showModal: true });
  }

  handleCloseModal(){
    this.setState({ showModal: false });
  }

  changeColorToItemOne(){
    this.setState({
      pictures: this.state.availableColors.color1,
      mainPicture: this.state.availableColors.color1[0],
      carouselLength: this.state.availableColors.color1.length * 100,
      currentColorName: this.state.colorNames[0],
      currentColorIndexSelected: 0,
      buttonOneSelected: true,
      buttonTwoSelected: false,
      buttonThreeSelected: false
    })
  }

  changeColorToItemTwo(){
    this.setState({
      pictures: this.state.availableColors.color2,
      mainPicture: this.state.availableColors.color2[0],
      carouselLength: this.state.availableColors.color2.length * 100,
      currentColorName: this.state.colorNames[1],
      currentColorIndexSelected: 1,
      buttonOneSelected: false,
      buttonTwoSelected: true,
      buttonThreeSelected: false
    })
  }

  changeColorToItemThree(){
    this.setState({
      pictures: this.state.availableColors.color3,
      mainPicture: this.state.availableColors.color3[0],
      carouselLength: this.state.availableColors.color3.length * 100,
      currentColorName: this.state.colorNames[2],
      currentColorIndexSelected: 2,
      buttonOneSelected: false,
      buttonTwoSelected: false,
      buttonThreeSelected: true
    })
  }



  moveForward(){
    // Using the variable 'newYCoord' helps avoid possible asyncronous issues w/ setState()
    var newYCoord = (this.state.currentCarouselYCoord + 500 > this.state.carouselLength) ? this.state.currentCarouselYCoord : this.state.currentCarouselYCoord + 500;

    //PLEASE NOTE: THIS IS GOING TO BE A BUG IF THERE ARE MORE THAN 10 OR LESS THAN 5 PICTURES.

    // console.log('CAROUSEL Y-COORD: ',this.state.currentCarouselYCoord, 'CAROUSEL LENGTH: ', this.state.carouselLength, 'NEW COORD: ', newYCoord)

    // var isForwardButtonVisibile;
    // var isBackwardsButtonVisible;

    // if (this.state.carouselLength - newYCoord < 500) {
    //   isForwardButtonVisibile === false;
    //   isBackwardsButtonVisible === true;
    // } else {
    //   isForwardButtonVisibile === true;
    //   isBackwardsButtonVisible === false;
    // }

    // isForwardButtonVisibile === true;
    // isBackwardsButtonVisible === true;


    this.setState({
      currentCarouselYCoord: newYCoord,
      moveForwardVisible: false,//isForwardButtonVisibile,
      moveBackwardsVisible: true//isBackwardsButtonVisible
    })
    this.state.node.scroll({
      left: 0,
      top: newYCoord,
      behavior: 'smooth'
    })
  }

  moveBackwards(){
    var newYCoord = (this.state.currentCarouselYCoord === 0) ? this.state.currentCarouselYCoord : this.state.currentCarouselYCoord - 500;
    this.setState({
      currentCarouselYCoord: newYCoord,
      moveForwardVisible: true,
      moveBackwardsVisible: false
    })
    // this.carouselRef
    this.state.node.scroll({
      left: 0,
      top: newYCoord,
      behavior: 'smooth',
      // transition-duration: '5s'
    })
  }

  getInfo(){
    let indexOfItem = 0;
    let integerBetweenOneAndThree = function() {
      indexOfItem += Math.floor(Math.random() * (99) + 1);
    }
    integerBetweenOneAndThree();

    axios.get('/items/')
    .then(response => {
      // handle success
      this.setState({
        pictures: response.data[indexOfItem].colors.color1,
        mainPicture: response.data[indexOfItem].colors.color1[0],
        carouselLength: response.data[indexOfItem].colors.color1.length * 100,
        availableColors: response.data[indexOfItem].colors,
        colorNames: response.data[indexOfItem].colorNames,
        currentColorName: response.data[indexOfItem].colorNames[0],
        node: this.carouselRef.current,
        currentColorIndexSelected: 0,
        buttonOneSelected: true,
        buttonTwoSelected: false,
        buttonThreeSelected: false,

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
        <AppContainer>
          <CarouselContainer>
            <MoveCarouselBackwards moveBackwards={this.moveBackwards} moveBackwardsVisible={this.state.moveBackwardsVisible}/>

            <ProductGallery>
              <Carousel pictures={this.state.pictures} mainPicture={this.state.mainPicture} updateMainPhoto={this.updateMainPhoto} ref={this.carouselRef} />
            </ProductGallery>

            <MoveCarouselForward moveForward={this.moveForward} moveForwardVisible={this.state.moveForwardVisible}/>
          </CarouselContainer>

          <MainPhoto>
            <MainPicture mainPicture={this.state.mainPicture} openMainPhotoModul={this.openMainPhotoModul} handleShowMessageClick={this.handleShowMessageClick} />
          </MainPhoto>



        </AppContainer>
        {/* <div>
        <svg focusable="false" height="9" width="16"><path d="M8.002 8L1 1m7.002 7L15 1.004"></path></svg>

        </div> */}
        {this.state.showModal ? (
              <Modal
                mainPicture={this.state.mainPicture}
                onClose={this.handleCloseModal}
                pictures={this.state.pictures}
                updateMainPhoto={this.updateMainPhoto}
                ref={this.carouselRef}
                availableColors={this.state.availableColors}
                colorNames={this.state.colorNames}
                changeColorToItemOne={this.changeColorToItemOne}
                changeColorToItemTwo={this.changeColorToItemTwo}
                changeColorToItemThree={this.changeColorToItemThree}
                currentColorName={this.state.currentColorName}
                currentColorIndexSelected={this.state.currentColorIndexSelected}
                buttonOneSelected={this.state.buttonOneSelected}
                buttonTwoSelected={this.state.buttonTwoSelected}
                buttonThreeSelected={this.state.buttonThreeSelected}
                // moveForward={this.moveForward}
                // moveForwardVisible={this.state.moveForwardVisible}
                // moveBackwards={this.moveBackwards}
                // moveBackwardsVisible={this.state.moveBackwardsVisible}
                >
              </Modal>
          ) : null}

      </div>
    )
  }

}

export default App;