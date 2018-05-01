import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../Header';

test('mounts AppHeader without crashing', () => {
  shallow(<AppHeader />);
});