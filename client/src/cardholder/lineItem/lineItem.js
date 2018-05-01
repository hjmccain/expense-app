import React from 'react';

const LineItem = props => {
  return (
    <div className="line-item">
      <div className="line-item__element">
        <p>Total</p>
      </div>
      <div className="line-item__element">
        <p>Location</p>
      </div>
      <div className="line-item__element">
        <p>Project</p>
      </div>
      <div className="line-item__element">
        <p>Client</p>
      </div>
      <div className="line-item__element">
        <p>Comments</p>
      </div>
      <div className="line-item__element">
        <p>Receipt</p>
      </div>
    </div>
  );
};

export default LineItem;