import React from 'react';
import { shallow } from 'enzyme';
import LineItemDisplay from '../Display';

it('mounts LineItemDisplay without crashing', () => {
  shallow(<LineItemDisplay />);
});