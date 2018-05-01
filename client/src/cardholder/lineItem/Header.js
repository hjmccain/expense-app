import React from 'react';

const LineItemHeader = props => {
  return (
    <div className="line-item -header">
      <div className="line-item__element -header">
        Total
      </div>
      <div className="line-item__element -header">
        Location
      </div>
      <div className="line-item__element -header">
        Project
      </div>
      <div className="line-item__element -header">
        Client
      </div>
      <div className="line-item__element -header">
        Comments
      </div>
      <div className="line-item__element -header">
        Receipt
      </div>
    </div>
  )
};

export default LineItemHeader;