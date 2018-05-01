import React from 'react';

const AppHeader = props => {
  return (
    <div className="app-container__header">
      <h3 className="app-container__header__element -welcome">Welcome!</h3>
      <div className="app-container__header__element">
        <a href="google.com">My profile</a>
      </div>
    </div>
  );
};

export default AppHeader;