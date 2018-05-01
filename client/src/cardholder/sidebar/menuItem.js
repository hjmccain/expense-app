import React from 'react';

const SidebarMenuItem = props => {
  return (
    <div className="sidebar-menu__item">
      <a href="google.com">{props.label}</a>
    </div>
  );
};

export default SidebarMenuItem;