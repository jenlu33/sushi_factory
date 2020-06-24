import React from 'react';
import '../assets/stylesheets/menu.css';

class Menu extends React.Component {
  render() {
    return(
      <div className="main-menu-div">
        <div className="menu-title-container">
          <p>Menu</p>
        </div>

        {/* <div className="menu-nav">
          <a href="/menu/sushi">Sushi</a>
          <a href="/menu/tea">Tea</a>
        </div> */}

        <div className="menu-container">
          {/* ----------------------------- SUSHI MENU ----------------------------- */}
          <div className="sushi-menu">
            <div id="sushi" className="menu-subtitle">
              <p>Sushi</p>
            </div>
            <div className="menu">
              <div className="sub-menu">

        
                <h3>Plate Menu</h3>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Sweet Eel Box</p>
                    <p>Eel topped with eel sauce over rice, side of edamame and seaweed salad</p>
                  </div>
                  <p>13.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>White Tuna Combo</p>
                    <p>5 pieces: white tuna roll(White Tuna, Avocado, Cream Cheese, Cucumber, Fish Roe, Eel Sauce)</p>
                    <p>4 pieces white tuna nigiri</p>
                  </div>
                  <p>13.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Roll Combo</p>
                    <p>6 pieces each of California Roll, Cucumber Roll, and Salmon Roll</p>
                  </div>
                  <p>12.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Veggie Roll Combo</p>
                    <p>6 pieces Avocado Roll, Cucumber Roll, and Kampyo Roll</p>
                  </div>
                  <p>11.25</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>All Cooked Sushi</p>
                    <p>6 Pieces: Smoked Salmon Roll</p>
                    <p>6 Pieces Nigiri: Shrimp, Eel, Egg Omelet, Hokkigai, Imitation Crab, Ocotopus</p>
                  </div>
                  <p>13.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Sushi Regular</p>
                    <p>6 Pieces: Salmon Roll</p>
                    <p>6 Pieces Nigiri: Chef's Choice</p>
                  </div>
                  <p>13.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Sushi Super</p>
                    <p>6 Pieces: Salmon Roll</p>
                    <p>8 Pieces Nigiri: Chef's Choice</p>
                  </div>
                  <p>14.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Sushi & Sashimi</p>
                    <p>2 Pieces each: Tuna, Salmon, Red Snapper</p>
                    <p>5 Pieces Nigiri: Chef's Choice</p>
                    <p> 1 Imitation Crab Stick</p>
                  </div>
                  <p>14.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Rainbow Sushi</p>
                    <p>10 Pieces Nigiri: Chef's Choice</p>
                  </div>
                  <p>14.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Rainbow Sashimi</p>
                    <p>12 Pieces: Chef's Choice</p>
                  </div>
                  <p>14.50</p>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------- TEA MENU ----------------------------- */}
          <div className="tea-menu">
            <div id="tea" className="menu-subtitle">
              <p>Tea</p>
            </div>

            <div className="menu">
              <div className="sub-menu">
                <h3>Blah </h3>
                <div className="menu-item">
                  <p>menu item</p>
                  <p>menu item price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;