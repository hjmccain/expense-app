import React from 'react';

const SidebarMenuItem = props => {
  return (
    <div className="sidebar-menu__item">
      <a href="#">{props.label}</a>
    </div>
  );
};

export default SidebarMenuItem;