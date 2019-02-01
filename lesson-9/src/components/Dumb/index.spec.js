import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Dumb from '../Dumb';

describe('Dumb test', () => {
  it('should render correctly', () => {
    const output = shallow(<Dumb text="smth" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
