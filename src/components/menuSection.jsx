import React from 'react';
import SushiMenuItem from './sushiMenuItem';

function menuSection(props) {
  const {menuType, title} = props;
  
  return(
    <div>
      <h1>{title}</h1>
      {menuType.map((item, i) =>  
        <SushiMenuItem key={`${menuType} ${i}`} item={item} />
      )}
    </div>
  )
};

export default menuSection;