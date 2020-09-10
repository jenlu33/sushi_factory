import React from 'react';
import SushiMenuItem from './sushiMenuItem';
import MenuImages from './menuImages';

function MenuSection(props) {
  const {menuType, title, customClass} = props;
  
  return (
    <div className={`menu-section-container ${customClass}-container`}>
      {title === "Sides" && (
        <MenuImages imgURL={props.imgURL} customClass="sides-img" />
      )}
      <div className={`menu-section ${customClass}-section`}>
        <div className="section-title-container">
          <h1 className={`menu-section-title ${customClass}-title`}>{title}</h1>
        </div>
        <div className={`menu-items ${customClass}-items`}>
          {menuType.map((item, i) => (
            <SushiMenuItem
              key={`${customClass} ${i}`}
              item={item}
              customClass={customClass}
            />
          ))}
        </div>
      </div>
      {title === "Sushi Plates" && (
        <MenuImages imgURL={props.imgURL} customClass="plates-img" />
      )}
      {title === "Extras" && (
        <MenuImages imgURL={props.imgURL} customClass="tea-extra-img" />
      )}
    </div>
  );
};

export default MenuSection;