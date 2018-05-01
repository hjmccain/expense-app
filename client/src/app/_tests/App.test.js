import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('mounts App without crashing', () => {
  shallow(<App />);
});