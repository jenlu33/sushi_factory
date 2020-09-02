import React from 'react';
import SushiMenuItem from './sushiMenuItem';
import sushiMenu from '../sushiMenu';


function SubMenu() {
  return(
    <div>
      {sushiMenu.map((menuItem, i) =>  
        <SushiMenuItem key={`sushiItem${i}`} item={menuItem} />
      )}
    </div>
  )
};

export default SubMenu;