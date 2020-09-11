import React from 'react';
import MenuSection from './menuSection';
// import TeaPricing from './teaPricing';
import TeaSection from './teaSection'
import SpecialsSection from "./specials";

import sushiPlateMenu from "../../data/sushiPlateMenu";
import sushiRollMenu from "../../data/sushiRollMenu";
import sushiSidesMenu from "../../data/sushiSidesMenu";
import milkTea from "../../data/milkTea";
import icedTeaDodo from "../../data/icedTeaDodo";
import specials from "../../data/specials";
import teaExtras from '../../data/drinkExtras';

function Menu() {

  return(
    <div className="main-menu-div">
      <div className="menu-container">
        <div className="menu-title-container">
          <h1 className="menu-title">Sushi</h1>
        </div>
        <MenuSection 
          menuType={sushiPlateMenu} title="Sushi Plates" customClass="plates"
          imgURL={"01.jpg"}/>
        <MenuSection menuType={sushiRollMenu} title="Sushi Rolls" customClass="rolls"/>
        <MenuSection 
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
        <SpecialsSection menuType={specials}/>
        <MenuSection 
          menuType={teaExtras} title="Extras" customClass="tea-extras"
          imgURL={"06.jpg"}/>
      </div>
    

      {/* Special Drinks Menu */}
    </div>
  )
};

export default Menu;