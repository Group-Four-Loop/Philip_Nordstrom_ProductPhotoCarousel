import { shallow } from 'enzyme';
import React from 'react';


import App from '../src/components/App.js';
import Carousel from '../src/components/Carousel.js';
import MainPicture from '../src/components/MainPicture.js';
import MoveCarouselForward from '../src/components/MoveCarouselForward.js';
import MoveCarouselBackwards from '../src/components/MoveCarouselBackwards.js';



describe('<App />', () => {
  it('renders <MainPicture /> , <Carousel />, <MoveCarouselForward />, <MoveCarouselBackwards /> components exist in <App />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Carousel/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<MainPicture/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<MoveCarouselForward/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<MoveCarouselBackwards/>)).toBe(true);

  });




})
