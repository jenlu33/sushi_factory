import React from 'react';
import TeaPricing from './teaPricing';
import FlavorsMenu from './flavors';
import Flavors from './flavors';

function TeaSection(props) {
  const { menuType, title } = props
  return(
    <div className="tea-section-container">
      <div className="section-title-container">
        <h1 className="menu-section-title tea-title"> { title } </h1>
      </div>
      {title === "Bubble Tea" && 
        <TeaPricing prices={menuType.pricing} title={title} />}
      {title === "Shaken Iced Tea" && 
        <TeaPricing prices={menuType.teaPrice} title={title} />}
      {title === "Dodo Yogurt" && 
        <TeaPricing prices={menuType.dodoPrice} title={title} />}
        <FlavorsMenu flavors = {menuType.flavors} title={title}/>
      
    </div>
  )
};

export default TeaSection;