import React from 'react';

const LineItemHeader = props => {
  return (
    <div className="line-item -header">
      <div className="line-item__element -header">
        <p>Total</p>
      </div>
      <div className="line-item__element -header">
        <p>Location</p>
      </div>
      <div className="line-item__element -header">
        <p>Project</p>
      </div>
      <div className="line-item__element -header">
        <p>Client</p>
      </div>
      <div className="line-item__element -header">
        <p>Comments</p>
      </div>
      <div className="line-item__element -header">
        <p>Receipt</p>
      </div>
    </div>
  )
};

export default LineItemHeader;