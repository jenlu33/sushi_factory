import React from 'react';
import SushiMenuItem from './sushiMenuItem';

function menuSection(props) {
  const {menuType, title, customClass} = props;
  
  return (
    <div className={`menu-section-container ${customClass}-container`}>
      {title === "Sides" && (
        <div className="menu-imgs">
          {/* <img
            src="../../assets/images/plates01.jpg"
            alt=""
          />
          */}
        </div>
      )}
      <div className={`menu-section ${customClass}-section`}>
        <h1 className={`menu-section-title ${customClass}-title`}>{title}</h1>
        <div className={`menu-items ${customClass}-items`}>
          {menuType.map((item, i) => (
            <SushiMenuItem key={`${menuType} ${i}`} item={item} />
          ))}
        </div>
      </div>
      {title === "Sushi Plates" && (
        <div className="menu-imgs">
          {/* <img
            src="../../assets/images/plates01.jpg"
            alt=""
          />
          <img
            src="/assets/images/plates02.jpg"
            alt=""
          /> */}
        </div>
      )}
    </div>
  );
};

export default menuSection;