import React from "react";

function Specials(props) {
  const { menuType } = props;
  return (
    <div className="menu-section-container specials-container">
      <div className="specials-title-container">
        <h1 className="specials-title">Beverage Specials</h1>
      </div>

      <div className="specials-items-container">
        <div className="menu-side"></div>
        <div className="specials-items">
          <h3>6.45</h3>
          {menuType.map((item, i) => (
            <div key={`specials ${i}`} className="specials-item">
              <span className="highlight specials-highlight"></span>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="menu-side"></div>
      </div>
    </div>
  );
};

export default Specials;