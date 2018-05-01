import React from 'react';
import { shallow } from 'enzyme';
import LineItemHeader from '../Header';

it('mounts LineItemHeader without crashing', () => {
  shallow(<LineItemHeader />);
});