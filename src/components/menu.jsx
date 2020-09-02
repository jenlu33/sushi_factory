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
            <div className="menu">
              <div className="sub-menu-title">
                <h3>Plate Menu</h3>
              </div>

            <div className="sub-menu-title">
              <h3>Sides</h3>
            </div>
            <div className="sub-menu">
                <div className="menu-item">
                  <div className="item-description">
                    <p>Crunchy Onion</p>
                  </div>
                  <p>1.00</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Miso Soup</p>
                  </div>
                  <p>1.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Sushi Rice</p>
                  </div>
                  <p>2.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Edamame</p>
                    <p>Japanese Soybeans</p>
                  </div>
                  <p>3.95</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Nigiri/Sashimi</p>
                    <p>2 pieces per order</p>
                  </div>
                  <p>3.75</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Seaweed Salad</p>
                  </div>
                  <p>3.95</p>
                </div>
            </div>
            </div>
          </div>

          {/* ----------------------------- TEA MENU ----------------------------- */}
          <div className="tea-menu">
            <div id="tea" className="menu-subtitle">
              <p>Tea</p>
            </div>

            <div className="tea-guide">
              <p><i className="fas fa-star fa-xs"></i>Favorites</p>
              <p><i className="fas fa-mug-hot fa-sm"></i>Available Hot</p>
            </div>

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

                <div className="flavors-menu">
                  <h3>Flavors</h3>
                  <div className="tea-flavors">
                    <p>Original <i className="fas fa-star fa-xs"></i><i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Thai <i className="fas fa-star fa-xs"></i></p>
                    <p>Taro <i className="fas fa-star fa-xs"></i><i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Matcha <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Caramel <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Hazelnut <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Red Bean <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Mango <i className="fas fa-star fa-xs"></i></p>
                    <p>White Peach <i className="fas fa-star fa-xs"></i></p>
                    <p>Strawberry</p>
                    <p>Lychee <i className="fas fa-star fa-xs"></i></p>
                    <p>Honeydew</p>
                    <p>Blueberry</p>
                    <p>Guava</p>
                    <p>Rose <i className="fas fa-star fa-xs"></i><i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Lavender <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Peach</p>
                    <p>Passion Fruit</p>
                    <p>Winter Melon</p>
                    <p>Honey <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Coffee <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Coconut <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Almond <i className="fas fa-mug-hot fa-sm"></i></p>
                    <p>Chocolate <i className="fas fa-mug-hot fa-sm"></i></p>
                  </div>
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

                <div className="flavors-menu">
                  <h3>Flavors</h3>
                  <div className="tea-flavors">
                    <p>Mango <i className="fas fa-star fa-xs"></i></p>
                    <p>Strawberry <i className="fas fa-star fa-xs"></i></p>
                    <p>Lychee <i className="fas fa-star fa-xs"></i></p>
                    <p>Peach</p>
                    <p>Guava</p>
                    <p>Lemon</p>
                    <p>Rose</p>
                    <p>Honey</p>
                    <p>Lavender</p>
                    <p>Passion Fruit</p>
                    <p>Honeydew</p>
                    <p>White Peach <i className="fas fa-star fa-xs"></i></p>
                    <p>Blueberry</p>
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

                <div className="special-drinks-menu">
                  <div className="special-drinks-title">
                    <p>Specials and Seasonal Drinks</p>
                    <p>4.95</p>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>Tiger Bubble Tea</p>
                      <p>Brown sugar milk tea with brown sugar bubbles</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>First Love</p>
                      <p>Rose and white peach infused milk tea with bubbles</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>Matcha Brown Sugar Latte</p>
                      <p>Matcha milk tea with brown sugar bubbles</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>One in a Melon</p>
                      <p>Winter melon milk tea with brown sugar and bubbles</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>Pink Lady</p>
                      <p>Rose, white peach, and lemon infused green tea with rainbow jellies</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>Sweet Green</p>
                      <p>Lychee, honeydew, and honey green tea with lychee jellies</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>Sunrise</p>
                      <p>Kumquat, lemon, honey, and passion fruit green tea with lychee jellies</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>Hello Kitty</p>
                      <p>Strawberry and lychee green tea with rainbow jellies</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="special-item">
                      <p>Fresh Summer Slush</p>
                      <p>Choice of strawberry, blueberry, mango, or original lemonade mixed with green tea and blended</p>
                    </div>
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