import React from 'react';
import { shallow } from 'enzyme';
import SidebarMenu from '../Menu';

it('mounts SidebarMenu without crashing', () => {
  shallow(<SidebarMenu />);
});