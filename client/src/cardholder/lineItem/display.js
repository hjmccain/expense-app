import React from 'react';
import { receipts } from 'cardholder/data/receipts';
import { expenses } from 'cardholder/data/expenses';
import LineItem from './LineItem';
import LineItemHeader from './Header';

const LineItemDisplay = props => {
  return (
    <div className="line-item-display">
      <LineItemHeader />
      {
        Object.entries(props.displayReceipts ? receipts : expenses).map(ary => {
          return <LineItem key={ary[0]} data={ary[1]} />
        })
      }
      <button className="line-item-display__load-more">Load More</button>
    </div>
  );
};

export default LineItemDisplay;