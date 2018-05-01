import React from 'react';
import LineItem from './LineItem';
import LineItemHeader from './Header';

const LineItemDisplay = props => {
  return (
    <div className="line-item-display">
      <LineItemHeader />
      <LineItem />
      <LineItem />
      <LineItem />
    </div>
  );
};

export default LineItemDisplay;