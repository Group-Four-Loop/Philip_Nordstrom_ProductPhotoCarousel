import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import React from 'react';
import CarouselPicture from '../src/components/CarouselPicture.js';



describe('<App />', () => {

  var data = {
    mainPicture:"https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/2742dd0a-a638-4028-9123-628deaf38292.jpg",
    picture:"https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/2742dd0a-a638-4028-9123-628deaf38292.jpg",
    mainPictureMatchesPicture:true,
    updateMainPhoto:{function(){return ''}},
    key:"https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/2742dd0a-a638-4028-9123-628deaf38292.jpg"
  }


  it('Is defined', () => {
    let wrapper = shallow(<CarouselPicture data={data}/>);
    wrapper.setProps({data});
    expect(wrapper).toBeDefined();

  });

})





// it('Passes renders <Image/> element', () => {
//   const wrap = shallow(<CarouselPicture />);
//   wrap.setProps(data);

//   expect(
//     wrap.containsMatchingElement(
//       <Imagee/>
//     )
//   ).toBeFalsey()


// })
