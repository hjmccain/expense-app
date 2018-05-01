import React from 'react';

const LineItem = props => {
  return (
    <div className="line-item">
      <div className="line-item__element">
        <p>${props.data.total}</p>
      </div>
      <div className="line-item__element">
        <p>{props.data.location}</p>
      </div>
      <div className="line-item__element">
        <p>{props.data.project}</p>
      </div>
      <div className="line-item__element">
        <p>{props.data.client}</p>
      </div>
      <div className="line-item__element">
        <p>{props.data.comments}</p>
      </div>
      <div className="line-item__element">
        <p>{props.data.receipt}</p>
      </div>
    </div>
  );
};

export default LineItem;