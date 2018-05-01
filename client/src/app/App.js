import React from 'react';
import AppHeader from './Header';
import SideBarMenu from 'cardholder/sidebar/Menu';
import LineItemDisplay from 'cardholder/lineItem/Display';

const App = props => {
  return (
    <div>
      <AppHeader />
      <div className="standard-content-container">
        <SideBarMenu />
        <LineItemDisplay />
      </div>
    </div>
  )
};

export default App;