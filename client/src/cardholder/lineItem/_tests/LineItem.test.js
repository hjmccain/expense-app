import React from 'react';
import { shallow } from 'enzyme';
import LineItem from '../LineItem';

it('mounts LineItem without crashing', () => {
  shallow(<LineItem />);
});