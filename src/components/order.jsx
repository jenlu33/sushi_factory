import React from 'react';

const Order = () => (
  <div className="order-container">
    {/* <div className="background-div order-background"></div> */}

    <div className="order-title-container">
      <h1 className="order-title">How to Order</h1>
    </div>
    <div className="order-info">
      <h3>
        Please call us at <span className="num-highlight">(540) 951-2380</span> to place a pickup or delivery order
      </h3>
      <h4>We are also available on DoorDash, Uber Eats, and Beyond Menu.</h4>
    </div>
  </div>
);

export default Order;