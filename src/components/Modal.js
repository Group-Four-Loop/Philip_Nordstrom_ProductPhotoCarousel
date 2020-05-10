import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from './Carousel.js';
import MoveCarouselBackwards from './MoveCarouselBackwards.js';
import MoveCarouselForward from './MoveCarouselForward.js';
import ModalColors from './ModalColors.js';

const modalRoot = document.getElementById('modal-root');

const MainModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
`;

const ModalStyle = styled.div`
padding: 20;
background: #fff;
border-radius: 2px;
display: inline-block;
height: auto;
width: 1400px; //1400px is likely max width.
position: relative;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
justify-self: center;
`;

const CloseModal = styled.div`
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
`;

const ClosingModal = styled.div`
  fill: #393939;
  stroke: #393939;
  stroke-width: 2;
  stroke-miterlimit: 10;
`;

const CarouselContainerInModal = styled.div`
  // outline: 1px dashed purple;
  height: 520px;
  width: 60px;
  position: fixed;
  top: 20px;


`;

const ProductGalleryInModal = styled.h1`
  // font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  outline: 1px dashed green;
  height: 910px;  //COME BACK TO THIS
  width: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  float:left;
`;

const MainPhotoContainer = styled.div`
  // border: 1px solid purple;
  overflow: hidden; /* if you don't want #second to wrap below #first */
  float: right;
  height: auto;
  width: 95%;
  // height: 300px;
  // width: auto;
  // display: flex;
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
`

const CloseButton = styled.div`
  // font-size: 1em;
  // margin: 1em;
  // padding: 0.25em 1em;
  // border: 2px solid black;
  // border-radius: 50%;
  // background-color: white;
  // height: 30px;
  // width: 30px;
  position: fixed;
  top: 0;
`;


class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return ReactDOM.createPortal(
      <MainModalContainer>
         <ModalStyle>

          <CloseButton>
            <button onClick={this.props.onClose}>Close</button>
          </CloseButton>


{/*
          <svg focusable="false" height="24" width="24">

            <ClosingModal>
              <circle cx="12" cy="12" r="11"></circle>
            </ClosingModal>

            <CloseModal>
              <path d="M7 7l10 10m0-10L7 17"></path>
            </CloseModal>

          </svg> */}

          <MainPhotoContainer>
            <Picture src={this.props.mainPicture} onClick={this.props.onClose}></Picture>
          </MainPhotoContainer>


          <CarouselContainerInModal>

            {/* <MoveCarouselBackwards
              // moveBackwards={this.props.moveBackwards}
              // moveBackwardsVisible={this.props.state.moveBackwardsVisible}
            /> */}

            <ProductGalleryInModal>
              <Carousel pictures={this.props.pictures} mainPicture={this.props.mainPicture} updateMainPhoto={this.props.updateMainPhoto} />
            </ProductGalleryInModal>

            {/* <MoveCarouselForward
              // moveForward={this.moveForward}
              // moveForwardVisible={this.state.moveForwardVisible}
            /> */}

          </CarouselContainerInModal>

          <ModalColors
            availableColors={this.props.availableColors}
            colorNames={this.props.colorNames}
            changeColorToItemOne={this.props.changeColorToItemOne}
            changeColorToItemTwo={this.props.changeColorToItemTwo}
            changeColorToItemThree={this.props.changeColorToItemThree}
            currentColorName={this.props.currentColorName}
          />

          {/* {this.props.children} //Not sure what this code is supposed to do... */}

        </ModalStyle>
      </MainModalContainer>,

    modalRoot
    )
  }
}

export default Modal;