import React from 'react';

const SidebarMenuItem = props => {
  return (
    <div className="sidebar-menu__element" onClick={() => props.updateDisplay(props.isReceipts)}>
      <a href="google.com">{props.label}</a>
    </div>
  );
};

export default SidebarMenuItem;