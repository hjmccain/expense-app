import React from 'react';

const AppHeader = props => {
  return (
    <div className="app-header">
      <h3 className="app-header__element -welcome">Welcome!</h3>
      <div className="app-header__element">
        <a href="google.com">My profile</a>
      </div>
    </div>
  );
};

export default AppHeader;