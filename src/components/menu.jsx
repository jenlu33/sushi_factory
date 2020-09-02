import React from 'react';
import MenuSection from './menuSection';
import sushiPlateMenu from '../sushiPlateMenu';
import sushiRollMenu from '../sushiRollMenu';
import sushiSidesMenu from '../sushiSidesMenu';

function Menu() {

  return(
    <div>
      <MenuSection menuType={sushiPlateMenu} title="Sushi Plate Menu"/>
      <MenuSection menuType={sushiRollMenu} title="Sushi Roll Menu"/>
      <MenuSection menuType={sushiSidesMenu} title="Sushi Roll Menu"/>
    </div>
  )
};

export default Menu;