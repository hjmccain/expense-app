import React from 'react';
import ReactDOM from 'react-dom';
import SidebarMenu from '../Menu';

it('mounts SidebarMenu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarMenu />, div);
});