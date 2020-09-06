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

      {title === "Bubble Tea" && <p className="sweetness-level">Sweetness Level: 100% - 75% - 50% - 25%</p>}
      {title === "Shaken Iced Tea" && <p className="sweetness-level"> Sweetness Level: 100% - 75% - 50% - 25%</p>}
      {title === "Dodo Yogurt" && <p className="sweetness-level">Sweetness Level: 100% - 50%</p>}
      

      <hr/>
    </div>
  )
};

export default TeaSizing;