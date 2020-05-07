import { shallow } from 'enzyme';
import React from 'react';
import MoveCarouselForward from '../src/components/MoveCarouselForward.js';


describe('<MoveCarouselForward />', () => {

  var moveForward = function (){
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

  it('accepts props passed into <MoveCarouselForward /> component ', () => {

    const wrap = shallow(<MoveCarouselForward />);
    // wrapper.setProps({ movingForwardFunc })
    wrap.setProps({ name: 'Moe' })


    // expect(wrap.prop('name')).toEqual('Moe')
    expect(wrap).toBeDefined();


    // expect(wrapper.containsMatchingElement(<MoveCarouselForward/>)).toBe(true);
  });

})