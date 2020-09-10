import React from 'react';

function SushiMenuItem(props) {
  const {name, description, subDescription, price} = props.item;
  const {customClass} = props;

  return (
    <div className={`sushi-menu-item ${customClass}-item`}>
      <span className={`highlight ${customClass}-highlight`}></span>
      <div className={`item-top specials`}>
        <p>{name}</p>
        <p>{price && price.toFixed(2)}</p>
      </div>
      <div className="item-bottom">
        <p>{description}</p>
        <p>{subDescription}</p>
      </div>
    </div>
  );
};

export default SushiMenuItem;