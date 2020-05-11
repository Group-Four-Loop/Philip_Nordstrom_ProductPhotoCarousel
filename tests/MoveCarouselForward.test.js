import { shallow } from 'enzyme';
import React from 'react';
import MoveCarouselForward from '../src/components/MoveCarouselForward.js';


describe('<MoveCarouselForward />', () => {
  it('can be clicked', () => {
    const wrapper = shallow(<MoveCarouselForward moveForwardVisible={true}/>);
    wrapper.simulate('click');

  });


});
