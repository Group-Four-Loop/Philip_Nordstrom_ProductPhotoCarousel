import { shallow } from 'enzyme';
import React from 'react';
import Carousel from '../src/components/Carousel.js';
import CarouselPicture from '../src/components/CarouselPicture.js';


describe('<Carousel />', () => {
  it('renders <CarouselPicture /> component exist in <Carousel />', () => {
    const wrapper = shallow(<Carousel pictures={['1','2']} />);
    expect(wrapper.containsMatchingElement(<CarouselPicture/>)).toBe(true);

  });
  it('renders the correct number of carousel pictures', () => {
    const wrapper = shallow(<Carousel pictures={['1','2','3','4','5']} />);
    expect(wrapper.find(CarouselPicture)).toHaveLength(5)

  });


})