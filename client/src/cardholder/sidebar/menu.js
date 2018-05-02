import React from 'react';
import MenuItem from './MenuItem';

const SidebarMenu = props => {
  return (
    <div className="sidebar-menu">
      <MenuItem label="Inbox" isReceipts={false} updateDisplay={props.updateDisplay} />
      <MenuItem label="My Receipts" isReceipts={true} updateDisplay={props.updateDisplay} />
    </div>
  );
};

export default SidebarMenu;