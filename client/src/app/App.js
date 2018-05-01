import React from 'react';
import AppHeader from './Header';
import SideBarMenu from 'cardholder/sidebar/Menu';
import LineItemDisplay from 'cardholder/lineItem/Display';

const App = props => {
  return (
    <div className="app-container">
      <AppHeader />
      <div className="app-container__content">
        <SideBarMenu />
        <LineItemDisplay />
      </div>
    </div>
  )
};

export default App;