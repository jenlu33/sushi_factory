import React from 'react';
import SushiMenuSection from './sushiMenuSection';
// import TeaPricing from './teaPricing';
import TeaSection from './teaSection'

import sushiPlateMenu from '../../sushiPlateMenu';
import sushiRollMenu from '../../sushiRollMenu';
import sushiSidesMenu from '../../sushiSidesMenu';
import milkTea from '../../milkTea';
import icedTeaDodo from '../../icedTeaDodo';
import teaExtras from '../../drinkExtras';

function Menu() {

  return(
    <div>
      <div className="menu-container">
        <div className="menu-title-container">
          <h1 className="menu-title">Sushi</h1>
        </div>
        <SushiMenuSection 
          menuType={sushiPlateMenu} title="Sushi Plates" customClass="plates"
          imgURL={"01.jpg"}/>
        <SushiMenuSection menuType={sushiRollMenu} title="Sushi Rolls" customClass="rolls"/>
        <SushiMenuSection 
          menuType={sushiSidesMenu} title="Sides" customClass="sides"
          imgURL={"05.jpg"}
          />
      </div>

      <div className="menu-container">
        <div className="menu-title-container">
          <h1 className="menu-title">Tea</h1>
        </div>
        <TeaSection menuType={milkTea} title="Bubble Tea"/>
        <TeaSection menuType={icedTeaDodo} title="Shaken Iced Tea"/>
        <TeaSection menuType={icedTeaDodo} title="Dodo Yogurt"/>
        <SushiMenuSection 
          menuType={teaExtras} title="Extras" customClass="tea-extras"
          imgURL={"06.jpg"}/>
      </div>
    

      {/* Special Drinks Menu */}
    </div>
  )
};

export default Menu;