import React from 'react';
import ReactDOM from 'react-dom';
import LineItem from '../LineItem';

it('mounts LineItem without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineItem />, div);
});