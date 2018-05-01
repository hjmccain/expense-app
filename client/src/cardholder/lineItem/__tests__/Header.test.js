import React from 'react';
import ReactDOM from 'react-dom';
import LineItemHeader from '../Header';

it('mounts LineItemHeader without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineItemHeader />, div);
});