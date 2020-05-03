import { shallow } from 'enzyme';
// import enzyme from 'enzyme';
// import sinon from 'sinon';
import App from '../src/components/App.js';
import Temp from '../src/components/Temp.js';

import React from 'react';



describe('<App />', () => {
  it('renders any <Temp /> components exist in <App />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Temp />)).toBe(true);
  });

})
