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
          <div className="sushi-menu">
            <div id="sushi" className="menu-subtitle">
              <p>Sushi</p>
            </div>
            <div className="sub-menu">
              <h3>Plate Menu</h3>
              <div className="menu-item">
                <div className="item-description">
                  <p>menu item</p>
                  <p>menu item description</p>
                </div>
                <p>menu item price</p>
              </div>
              <div className="menu-item">
                <div className="item-description">
                  <p>menu item</p>
                  <p>menu item description</p>
                </div>
                <p>menu item price</p>
              </div>
              <div className="menu-item">
                <div className="item-description">
                  <p>menu item</p>
                  <p>menu item description</p>
                </div>
                <p>menu item price</p>
              </div>
            </div>
          </div>

          <div className="tea-menu">
            <div id="tea" className="menu-subtitle">
              <p>Tea</p>
            </div>

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
    )
  }
}

export default Menu;