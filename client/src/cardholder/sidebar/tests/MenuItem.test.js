import React from 'react';
import ReactDOM from 'react-dom';
import SidebarMenuItem from '../MenuItem';

it('mounts SidebarMenuItem without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarMenuItem />, div);
});