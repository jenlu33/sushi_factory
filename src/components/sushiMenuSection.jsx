import React from 'react';
import SushiMenuItem from './sushiMenuItem';
import MenuImages from './menuImages';

function sushiMenuSection(props) {
  const {menuType, title, customClass} = props;
  
  return (
    <div className={`menu-section-container ${customClass}-container`}>
      {title === "Sides" && (
        <div className="menu-imgs">
          <MenuImages imgURL={props.imgURL} />
        </div>
      )}
      <div className={`menu-section ${customClass}-section`}>
        <div className="section-title-container">
          <h1 className={`menu-section-title ${customClass}-title`}>{title}</h1>
        </div>
        <div className={`menu-items ${customClass}-items`}>
          {menuType.map((item, i) => (
            <SushiMenuItem key={`${menuType} ${i}`} item={item} />
          ))}
        </div>
      </div>
      {title === ("Sushi Plates" || "Extras") && (
        <MenuImages imgURL={props.imgURL}/>
      )}
    </div>
  );
};

export default sushiMenuSection;