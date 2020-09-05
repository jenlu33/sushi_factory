import React from 'react';

function TeaSizing(props) {
  const { prices } = props;
  return(
    <div>
      {prices.map(price => 
      <div>
        <h3>{price.size}</h3>
        <h3>{price.price}</h3>
      </div>
        )}
    </div>
  )
};

export default TeaSizing;