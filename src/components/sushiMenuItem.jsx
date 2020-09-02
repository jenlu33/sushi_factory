import React from 'react';

function SushiMenuItem(props) {
  const {name, description, subDescription, price} = props.item;

  return (
    <div className="menu-item">
      <div className="item-description">
        <p>{name}</p>
        <p>{description}</p>
        <p>{subDescription}</p>
      </div>
      <p>{price}</p>
    </div>
  )
};

export default SushiMenuItem;