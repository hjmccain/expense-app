import React from 'react';
import MenuItem from './MenuItem';

const SidebarMenu = props => {
  return (
    <div>
      <MenuItem label="Inbox" />
      <MenuItem label="My Receipts" />
    </div>
  );
};

export default SidebarMenu;