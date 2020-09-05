import React from 'react';
import SushiMenuSection from './sushiMenuSection';
import FlavorsMenu from './flavors';

import TeaHeader from './TeaHeader'

import sushiPlateMenu from '../sushiPlateMenu';
import sushiRollMenu from '../sushiRollMenu';
import sushiSidesMenu from '../sushiSidesMenu';
import milkTea from '../milkTea';
import icedTeaDodo from '../icedTeaDodo';

function Menu() {

  return(
    <div>
      <div className="menu-container">
        <div className="menu-title-container">
          <h1 className="menu-title">Sushi</h1>
        </div>
        <SushiMenuSection menuType={sushiPlateMenu} title="Sushi Plates" customClass="plates"/>
        <SushiMenuSection menuType={sushiRollMenu} title="Sushi Rolls" customClass="rolls"/>
        <SushiMenuSection menuType={sushiSidesMenu} title="Sides" customClass="sides"/>
      </div>

      <div className="menu-container">
        <div className="menu-title-container">
          <h1 className="menu-title">Bubble Tea</h1>
        </div>
        <TeaHeader menuType={milkTea.pricing}/>
        <TeaHeader menuType={icedTeaDodo.teaPrice}/>
        <TeaHeader menuType={icedTeaDodo.dodoPrice}/>
        {/* <FlavorsMenu flavors={milkTea.flavors} /> */}
      </div>
     
      {/* 
      <h1>Iced Tea / Dodo</h1>
      <FlavorsMenu flavors={icedTeaDodo}/> */}

      {/* Special Drinks Menu */}
    </div>
  )
};

export default Menu;