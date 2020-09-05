import React from 'react';

function TeaSizing(props) {
  const { prices, title } = props;
  return(
    <div className="tea-prices">
      {prices.map((price, i) => 
        <div key={`${title} ${i}`} className="tea-price">
          <h3>{price.size}</h3>
          <h3>{price.price}</h3>
        </div>
      )}
      <p>Sweetness Level</p>
      <hr/>
    </div>
  )
};

export default TeaSizing;