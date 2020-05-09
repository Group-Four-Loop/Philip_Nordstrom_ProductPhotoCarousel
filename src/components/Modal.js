import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from './Carousel.js';
import MoveCarouselBackwards from './MoveCarouselBackwards.js';
import MoveCarouselForward from './MoveCarouselForward.js';

const modalRoot = document.getElementById('modal-root');


const MainModalContainer = styled.div`
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
  width: "100%",
  height: "300%"
`

const firstStyle = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
  width: "100%",
  height: "200%"
}

const ModalStyle = styled.div`
  padding: 20,
  background: "#fff",
  borderRadius: "2px",
  display: "inline-block",
  // minHeight: "300px",
  height: "100%",
  width: "100%",
  // max-height: "100%",
  // max-width: "100%",
  // height: auto,
  // margin: "1rem",
  position: "relative",
  // minWidth: "600px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  justifySelf: "center"
  outline: 2px solid orange;

`

const CloseModal = styled.div`
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
`

const ClosingModal = styled.div`
  fill: #393939;
  stroke: #393939;
  stroke-width: 2;
  stroke-miterlimit: 10;
`



const secondStyle = {
  padding: 20,
  background: "#fff",
  borderRadius: "2px",
  display: "inline-block",
  height: "auto",
  width: "1350px", //1400px is likely max width.
  // margin: "1rem",
  position: "relative",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  justifySelf: "center"
}

const CarouselContainerInModal = styled.div`
  // outline: 1px dashed purple;
  height: 520px;
  width: 60px;
`

const ProductGalleryInModal = styled.h1`
  // font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  outline: 1px dashed green;
  height: 510px;
  width: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  float:left;
`;

const MainPhotoContainer = styled.div`
  border: 1px solid purple;
  overflow: hidden; /* if you don't want #second to wrap below #first */
  float: right;
`

class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    // console.log(this.props)
    return ReactDOM.createPortal(
      // <MainModalContainer>
       <div style={firstStyle}>
        <div style={secondStyle}>

          <button onClick={this.props.onClose}>Close</button>
          <svg focusable="false" height="24" width="24">

            <ClosingModal>
              <circle cx="12" cy="12" r="11"></circle>
            </ClosingModal>

            <CloseModal>
              <path d="M7 7l10 10m0-10L7 17"></path>
            </CloseModal>

          </svg>

          <MainPhotoContainer>
            <img src={this.props.mainPicture} height="auto" width="1280px" onClick={this.props.onClose}></img>
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

        </div>
      {/* </MainModalContainer>, */}
      </div>,
    modalRoot
    )
  }
}

export default Modal;