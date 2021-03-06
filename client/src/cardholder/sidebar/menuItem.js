import React from 'react';

const SidebarMenuItem = props => {
  return (
    <div className="sidebar-menu__element" onClick={e => props.updateDisplay(e, props.isReceipts)}>
      <a href="google.com">{props.label}</a>
    </div>
  );
};

export default SidebarMenuItem;