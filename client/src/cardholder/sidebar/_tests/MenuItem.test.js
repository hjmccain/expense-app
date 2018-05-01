import React from 'react';
import { shallow } from 'enzyme';
import SidebarMenuItem from '../MenuItem';

it('mounts SidebarMenuItem without crashing', () => {
  shallow(<SidebarMenuItem />);
});