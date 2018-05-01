import React from 'react';
import { receipts } from 'cardholder/data/receipts';
import LineItem from './LineItem';
import LineItemHeader from './Header';

const LineItemDisplay = props => {
  return (
    <div className="line-item-display">
      <LineItemHeader />
      {
        Object.entries(receipts).map(ary => {
          return <LineItem key={ary[0]} data={ary[1]} />
        })
      }
    </div>
  );
};

export default LineItemDisplay;