import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from './Carousel.js';
const modalRoot = document.getElementById('modal-root');


const MainModalContainer = styled.div`
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.3)',
  outline: 2px solid green;
`

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
  margin: "1rem",
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
  height: "300%"
}

const secondStyle = {
  padding: 20,
  background: "#fff",
  borderRadius: "2px",
  display: "inline-block",
  height: "auto",
  width: "1350px", //1400px is likely max width.
  margin: "1rem",
  position: "relative",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  justifySelf: "center"
}

class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    // console.log(this.props)
    return ReactDOM.createPortal(

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

          <img src={this.props.mainPicture} height="auto" width="1200px"></img>

          <Carousel pictures={this.props.pictures} mainPicture={this.props.mainPicture} updateMainPhoto={this.props.updateMainPhoto} />

        </div>
      </div>,
    modalRoot
    )
  }
}

export default Modal;