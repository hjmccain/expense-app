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
      <div className={`line-item__element -header ${props.cssModifier}`}>
        <p>Project</p>
      </div>
      <div className={`line-item__element -header ${props.cssModifier}`}>
        <p>Client</p>
      </div>
      <div className={`line-item__element -header ${props.cssModifier}`}>
        <p>Comments</p>
      </div>
      <div className={`line-item__element -header ${props.cssModifier}`}>
        <p>Receipt</p>
      </div>
    </div>
  )
};

export default LineItemHeader;