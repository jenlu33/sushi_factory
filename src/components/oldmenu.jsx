import React from 'react';

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
              <p className="caution">Sushi*</p>
              <p className="hide">* Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</p>
            </div>
          </div>

          {/* ----------------------------- TEA MENU ----------------------------- */}
          <div className="tea-menu">

            <div className="menu">
              <div className="sub-menu tea">
                <h3>Bubble Milk Tea </h3>
                <div className="menu-item">
                  <p>Medium</p>
                  <p>3.75</p>
                </div>
                <div className="menu-item">
                  <p>Large</p>
                  <p>4.75</p>
                </div>

                <p>Sugar level: 100% - 75% - 50% - 25%</p>
                <br/>
                <div className="extra-menu">
                  <h3>Extra</h3>
                  <div className="menu-item">
                    <p>Extra Bubbles</p>
                    <p>0.60</p>
                  </div>
                  <div className="menu-item">
                    <p>Add Jelly</p>
                    <p>0.60</p>
                  </div>
                  <div className="menu-item">
                    <p>Make it a Smoothie</p>
                    <p>0.50</p>
                  </div>
                  <div className="menu-item">
                    <p>Make it Warm/Hot</p>
                    <p>0.50</p>
                  </div>
                  <div className="menu-item">
                    <p>Extra Flavor</p>
                    <p>0.50</p>
                  </div>
                  <div className="menu-item">
                    <p>Substitute Soy Milk</p>
                    <p>1.00</p>
                  </div>
                </div>

                <div className="double-sub-menu-container">
                  <div className="double-sub-menu">
                    <h3>Shaken Iced Tea</h3>
                    <div className="menu-item">
                      <p>Medium</p>
                      <p>2.95</p>
                    </div>
                    <div className="menu-item">
                      <p>Large</p>
                      <p>3.95</p>
                    </div>
                    <p><i className="fas fa-mug-hot fa-sm"></i> All iced teas also available hot </p>
                  </div>
                  <div className="double-sub-menu">
                    <h3>Iced Dodo Drink</h3>
                    <div className="menu-item">
                      <p>Medium</p>
                      <p>3.15</p>
                    </div>
                    <div className="menu-item">
                      <p>Large</p>
                      <p>4.15</p>
                    </div>
                  </div>
                </div>

              

                <div className="extra-menu">
                  <h3>Extra</h3>
                  <div className="menu-item">
                    <p>Add Bubbles</p>
                    <p>0.60</p>
                  </div>
                  <div className="menu-item">
                    <p>Add Jelly</p>
                    <p>0.60</p>
                  </div>
                  <div className="menu-item">
                    <p>Extra Flavor</p>
                    <p>0.50</p>
                  </div>
                  <div className="menu-item">
                    <p>Make it a Slush</p>
                    <p>0.50</p>
                  </div>

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