import React from 'react';
import { receipts } from 'cardholder/data/receipts';
import { expenses } from 'cardholder/data/expenses';
import LineItem from './LineItem';
import LineItemHeader from './Header';

const LineItemDisplay = props => {
  return (
    <div className="line-item-display">
      <LineItemHeader cssModifier={'-null'} />
      {
        Object.entries(expenses).map(ary => {
          return <LineItem key={ary[0]} data={ary[1]} cssModifier={''} />
        })
      }
    </div>
  );
};

export default LineItemDisplay;