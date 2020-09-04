import React from 'react';
import MenuSection from './menuSection';
import FlavorsMenu from './flavors'

import sushiPlateMenu from '../sushiPlateMenu';
import sushiRollMenu from '../sushiRollMenu';
import sushiSidesMenu from '../sushiSidesMenu';
import milkTea from '../milkTea';
import icedTeaDodo from '../icedTeaDodo';

function Menu() {

  return(
    <div>
      <div className="sushi-menu-container">
        <h1>Sushi</h1>
        <MenuSection menuType={sushiPlateMenu} title="Sushi Plates" customClass="plates"/>
        <MenuSection menuType={sushiRollMenu} title="Sushi Rolls" customClass="rolls"/>
        <MenuSection menuType={sushiSidesMenu} title="Sides" customClass="sides"/>
      </div>

      <h1>Bubble Tea</h1>
     
      {/* <FlavorsMenu flavors={milkTea}/>
      <h1>Iced Tea / Dodo</h1>
      <FlavorsMenu flavors={icedTeaDodo}/> */}

      {/* Special Drinks Menu */}
    </div>
  )
};

export default Menu;