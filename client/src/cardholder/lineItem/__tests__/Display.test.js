import React from 'react';
import ReactDOM from 'react-dom';
import LineItemDisplay from '../Display';

it('mounts LineItemDisplay without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineItemDisplay />, div);
});