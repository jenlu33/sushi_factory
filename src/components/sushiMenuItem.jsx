import React from 'react';

function SushiMenuItem(props) {
  const {name, description, subDescription, price} = props.item;

  return (
    <div className="sushi-menu-item">
      <div className="item-top">
        <p>{name}</p>
        <p>{price.toFixed(2)}</p>
      </div>
      <div className="item-bottom">
        <p>{description}</p>
        <p>{subDescription}</p>
      </div>
    </div>
  );
};

export default SushiMenuItem;