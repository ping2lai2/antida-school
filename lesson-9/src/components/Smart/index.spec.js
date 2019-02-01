import React from 'react';
import { shallow } from 'enzyme'; //you have it in global

// Components
import Smart from '../Smart';

it('should handle state changes', () => {
  const output = shallow(
    <Smart />
  );
 
  
  expect(output.state().flag).toEqual(false);
  output.find('button').simulate('click');
  expect(output.state().flag).toEqual(true);
});
