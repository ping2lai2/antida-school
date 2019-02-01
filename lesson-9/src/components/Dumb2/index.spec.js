import React from 'react';
import { shallow } from 'enzyme'; //you have it in global

// Components
import Dumb2 from '../Dumb2';

function setup() {
  const props = {
    imgPath: 'proptypes/goooodbye'
  };
  const wrapper = shallow(<Dumb2 />);
  return { wrapper, props };
}

describe('Dumb2 Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
