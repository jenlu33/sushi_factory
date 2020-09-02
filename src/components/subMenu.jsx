import React from 'react';
import SushiMenuItem from './sushiMenuItem';
import sushiPlateMenu from '../sushiPlateMenu';
import sushiRollMenu from '../sushiRollMenu';

function SubMenu() {
  return(
    <div>
      <h1>Sushi Plate Menu</h1>
      {sushiPlateMenu.map((plateItem, i) =>  
        <SushiMenuItem key={`sushiPlateItem ${i}`} item={plateItem} />
      )}
      <h1>Sushi Roll Menu</h1>
      {sushiRollMenu.map((roll, i) => 
        <SushiMenuItem key={`sushiRollItem ${i}`} item={roll} />
      )}
    </div>
  )
};

export default SubMenu;