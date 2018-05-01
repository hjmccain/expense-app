import React, { Component } from 'react';
import AppHeader from './Header';
import SideBarMenu from 'cardholder/sidebar/Menu';
import LineItemDisplay from 'cardholder/lineItem/Display';

class App extends Component {
  state = {
    displayReceipts: true
  }

  updateDisplay = boolean => this.setState({ displayReceipts: boolean });

  render() {
    return (
      <div className="app-container">
        <AppHeader />
        <div className="app-container__content">
          <SideBarMenu updateDisplay={this.updateDisplay.bind(this)} />
          <LineItemDisplay displayReceipts={this.state.displayReceipts} />
        </div>
      </div>
    )
  }
};

export default App;