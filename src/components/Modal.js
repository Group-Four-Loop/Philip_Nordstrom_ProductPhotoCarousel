import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from './Carousel.js';
const modalRoot = document.getElementById('modal-root');


// const MainModalContainer = styled.div`
//   position: 'absolute',
//   top: '0',
//   bottom: '0',
//   left: '0',
//   right: '0',
//   display: 'grid',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: 'rgba(0,0,0,0.3)',
//   outline: 1px dashed green;
// `

// const ModalStyle = styled.div`
//   padding: 20,
//   background: '#fff',
//   borderRadius: '2px',
//   display: 'inline-block',
//   minHeight: '300px',
//   margin: '1rem',
//   position: 'relative',
//   minWidth: '300px',
//   boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
//   justifySelf: 'center',
// `

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

class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    // console.log(this.props)
    return ReactDOM.createPortal(

      <div
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.3)"
        }}
        // onClick={this.props.onClose}
      >
        <div
          style={{
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
          }}
        >
          {this.props.children}
          <hr />
          <button onClick={this.props.onClose}>Close</button>
            <svg focusable="false" height="24" width="24">
              <ClosingModal>
                <circle cx="12" cy="12" r="11"></circle>
              </ClosingModal>

              <CloseModal>
                <path d="M7 7l10 10m0-10L7 17"></path>
              </CloseModal>

            </svg>
          <img src={this.props.mainPicture} height="800" width="auto"></img>
          <Carousel pictures={this.props.pictures} mainPicture={this.props.mainPicture} updateMainPhoto={this.props.updateMainPhoto} />
        </div>
      </div>,
    modalRoot
    )
  }
}

export default Modal;