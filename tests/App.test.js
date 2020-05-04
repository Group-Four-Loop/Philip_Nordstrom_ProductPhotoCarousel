import { shallow } from 'enzyme';
import React from 'react';

import App from '../src/components/App.js';
import Carousel from '../src/components/Carousel.js';
import MainPicture from '../src/components/MainPicture.js';



describe('<App />', () => {
  it('renders any <Temp /> components exist in <App />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Carousel />)).toBe(true);
    expect(wrapper.containsMatchingElement(<MainPicture />)).toBe(true);

  });

})
