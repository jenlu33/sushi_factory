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
              <p>Sushi*</p>
            </div>
            <div className="menu">
              <div className="sub-menu-title">
                <h3>Plate Menu</h3>
              </div>

              <div className="sub-menu">
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
                    <p>5 pieces: white tuna roll (White Tuna, Avocado, Cream Cheese, Cucumber, Fish Roe, Eel Sauce)</p>
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

              <div className="sub-menu-title">
                <h3>Sushi Rolls</h3>
              </div>

              <div className="sub-menu">
                <div className="menu-item">
                  <div className="item-description">
                    <p>California Roll</p>
                    <p>6 Pieces: Imitation Crab, Avocado, Fish Roe</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Alaska Roll</p>
                    <p>6 Pieces: Tuna, Salmon, Avocado</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Spicy Tuna Roll</p>
                    <p>6 Pieces: Tuna, Cucumber, Spicy Sauce</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Spicy White Tuna Roll</p>
                    <p>6 Pieces: White Tuna, Cucumber, Spicy Sauce</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Spicy Salmon Roll</p>
                    <p>6 Pieces: Salmon, Cucumber, Spicy Sauce</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Spicy Red Snapper Roll</p>
                    <p>6 Pieces: Red Snapper, Cucumber, Spicy Sauce</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Spicy Yellowtail Roll</p>
                    <p>6 Pieces: Yellowtail, Cucumber, Spicy Sauce</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Eel Roll</p>
                    <p>6 Pieces: Eel, Cucumber, Eel Sauce</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Philadelphia Roll</p>
                    <p>6 Pieces: Smoked Salmon, Cucumber, Cream Cheese</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Grilled Chicken Roll</p>
                    <p>6 Pieces: Grilled Chicken, Avocado, Eel Sauce, Mayo</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Smokey Roll</p>
                    <p>6 Pieces: Smoked Salmon, Avocado</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Tofu Pockets</p>
                    <p>3 Pieces: Filled with Seasoned Rice and Sesame Seeds</p>
                  </div>
                  <p>5.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Tuna Roll</p>
                    <p>6 Pieces: Tuna</p>
                  </div>
                  <p>4.40</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Salmon Roll</p>
                    <p>6 Pieces: Salmon</p>
                  </div>
                  <p>4.40</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Avocado Roll</p>
                    <p>6 Pieces: Avocado</p>
                  </div>
                  <p>3.90</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Cucumber Roll</p>
                    <p>6 Pieces: Cucumber</p>
                  </div>
                  <p>3.90</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Garden Roll</p>
                    <p>5 Pieces: Avocado, Cucumber, Kampyo, Fried Tofu</p>
                  </div>
                  <p>6.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Happy Roll</p>
                    <p>5 Pieces: Fried Tofu, Tamago, Avocado, Cucumber</p>
                  </div>
                  <p>6.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Garden Roll</p>
                    <p>5 Pieces: Avocado, Cucumber, Kampyo, Fried Tofu</p>
                  </div>
                  <p>6.45</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Crab House</p>
                    <p>8 Pieces: California Roll topped with Imitation Crab, Mayo, Crunchy</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Shutem Roll</p>
                    <p>5 Pieces: Shrimp Tempura, Avocado, Cucumber, Chef's Sauce, Mayo, Fish Roe</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Shrimp Pop Roll</p>
                    <p>8 Pieces: Shrimp, Avocado, Cream Cheese, Hot Sauce</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Pink Belly Roll</p>
                    <p>5 Pieces: White Tuna, Avocado, Cucumber, Cream Cheese, Imitation Crab, Chef's Sauce</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>VIP Roll</p>
                    <p>5 Pieces: Tuna, Eel, Avocado, Spicy Sauce, Eel Sauce</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Factory Roll</p>
                    <p>5 Pieces: Tuna, Salmon, Imitation Crab, Avocado, Cream Cheese, Spicy Sauce, Fish Roe</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Black Pearl Roll</p>
                    <p>5 Pieces: Seaweed Salad, Avocado, Imitation Crab, Eel, Chef's Sauce, Mayo, Fish Roe</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Shutem Roll</p>
                    <p>5 Pieces: Shrimp Tempura, Avocado, Cucumber, Chef's Sauce, Mayo, Fish Roe</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Rolling Pop Roll</p>
                    <p>5 Pieces: Tuna, Salmon, Red Snapper, Cucumber, Fish Roe, Eel Sauce</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Sweet Chubby Roll</p>
                    <p>5 Pieces: Imitation Crab, Avocado, Cucumber, Tamago, Cream Cheese, Fish Roe, Crunchy</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Tuna/Salmon Crunch Roll</p>
                    <p>8 Pieces: Choice of Spicy Salmon or Spicy Tuna Roll topped with Eel Sauce, Spicy Mayo, Fish Roe, Crunchy</p>
                  </div>
                  <p>7.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Snowball Roll</p>
                    <p>8 Pieces: California Roll topped with White Tuna and Avocado</p>
                  </div>
                  <p>9.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Rainbow Roll</p>
                    <p>8 Pieces: California Roll topped with 5 Pieces of Chef's Choice Fish</p>
                  </div>
                  <p>9.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Orange Ball Roll</p>
                    <p>8 Pieces: California Roll topped with Salmon</p>
                  </div>
                  <p>9.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Red Tuna Roll</p>
                    <p>8 Pieces: California Roll topped with Tuna and Avocado</p>
                  </div>
                  <p>9.50</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Dragon Roll</p>
                    <p>8 Pieces: Eel Roll topped with Avocado and Crunchy</p>
                  </div>
                  <p>9.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Angry Dragon Roll</p>
                    <p>8 Pieces: Tempura Shrimp and Avocado topped with Imitation Crab, Fish Roe, Spicy Mayo, Eel Sauce, and Crunchy</p>
                  </div>
                  <p>9.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Fish Bowl</p>
                    <p>Seasoned Rice topped with 5 Pieces of Chef's Choice Sashimi, Avocado, Cucumber, Tamago, and Imitation Crab</p>
                  </div>
                  <p>11.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Big Belly Roll</p>
                    <p>10 Pieces: Tempura Shrimp, Chicken, Avocado, Cucumber, Tamago, Imitation Crab, Chef's Sauce, topped with Fish Roe, Mayo, and Eel Sauce</p>
                  </div>
                  <p>12.99</p>
                </div>
                <div className="menu-item">
                  <div className="item-description">
                    <p>Mt. Fuji Roll</p>
                    <p>10 Pieces: Salmon, Red Snapper, Shrimp, Tamago, Imitation Crab, Avocado, Cucumber, Spicy Sauce, Chef's Sauce, topped with Fish Roe, Eel Sauce, and Spicy Mayo</p>
                  </div>
                  <p>12.99</p>
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
              <p>favorites (add star icon)</p>
              <p>available hot (add mug icon)</p>
            </div>

            <div className="menu">
              <div className="sub-menu tea">
                <h3>Bubble Milk Tea </h3>
                <div className="menu-item">
                  <p>Medium</p>
                  <p>menu item price</p>
                </div>
                <div className="menu-item">
                  <p>Large</p>
                  <p>menu item price</p>
                </div>

                <h3>Flavors</h3>
                <div className="tea-flavors">
                  <p>Original</p>
                  <p>Thai</p>
                  <p>Taro</p>
                  <p>Matcha</p>
                  <p>Caramel</p>
                  <p>Hazelnut</p>
                  <p>Red Bean</p>
                  <p>Mango</p>
                  <p>White Peach</p>
                  <p>Strawberry</p>
                  <p>Lychee</p>
                  <p>Honeydew</p>
                  <p>Blueberry</p>
                  <p>Guava</p>
                  <p>Rose</p>
                  <p>Lavender</p>
                  <p>Peach</p>
                  <p>Passion Fruit</p>
                  <p>Winter Melon</p>
                  <p>Honey</p>
                  <p>Coffee</p>
                  <p>Coconut</p>
                  <p>Almond</p>
                  <p>Chocolate</p>
                </div>

                <h3>Extra</h3>
                <div className="menu-item">
                  <p>Extra Bubbles</p>
                  <p>menu item price</p>
                </div>
                <div className="menu-item">
                  <p>Add Jelly</p>
                  <p>menu item price</p>
                </div>
                <div className="menu-item">
                  <p>Make it a Smoothie</p>
                  <p>menu item price</p>
                </div>
                <div className="menu-item">
                  <p>Make it Warm/Hot</p>
                  <p>menu item price</p>
                </div>
                <div className="menu-item">
                  <p>Extra Flavor</p>
                  <p>menu item price</p>
                </div>
                <div className="menu-item">
                  <p>Substitute Soy Milk</p>
                  <p>menu item price</p>
                </div>

                <div className="double-sub-menu-container">
                  <div className="double-sub-menu">
                    <h3>Shaken Iced Tea</h3>
                    <div className="menu-item">
                      <p>Medium</p>
                      <p>000</p>
                    </div>
                    <div className="menu-item">
                      <p>Large</p>
                      <p>000</p>
                    </div>
                    <p>All iced teas also available hot</p>
                  </div>
                  <div className="double-sub-menu">
                    <h3>Iced Dodo Drink</h3>
                    <div className="menu-item">
                      <p>Medium</p>
                      <p>000</p>
                    </div>
                    <div className="menu-item">
                      <p>Large</p>
                      <p>000</p>
                    </div>
                  </div>
                </div>

                <h3>Flavors</h3>
                <div className="tea-flavors">
                  <p>Mango</p>
                  <p>Strawberry</p>
                  <p>Lychee</p>
                  <p>Peach</p>
                  <p>Guava</p>
                  <p>Lemon</p>
                  <p>Rose</p>
                  <p>Honey</p>
                  <p>Lavender</p>
                  <p>Passion Fruit</p>
                  <p>Honeydew</p>
                  <p>White Peach</p>
                  <p>Blueberry</p>
                </div>

                <div className="special-drinks-menu">
                  <p>Specials and Seasonal Drinks</p>
                  <p>4.95</p>
                  <div className="menu-item">
                    <div className="item-description">
                      <p>Tiger Bubble Tea</p>
                      <p>Brown sugar milk tea with brown sugar bubbles</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="item-description">
                      <p>First Love</p>
                      <p>Rose and white peach infused milk tea with bubbles</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="item-description">
                      <p>Matcha Brown Sugar Latte</p>
                      <p>Matcha milk tea with brown sugar bubbles</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="item-description">
                      <p>One in a Melon</p>
                      <p>Winter melon milk tea with brown sugar and bubbles</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="item-description">
                      <p>Pink Lady</p>
                      <p>Rose, white peach, and lemon infused green tea with rainbow jellies</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="item-description">
                      <p>Sweet Green</p>
                      <p>Lychee, honeydew, and honey green tea with lychee jellies</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="item-description">
                      <p>Sunrise</p>
                      <p>Kumquat, lemon, honey, and passion fruit green tea with lychee jellies</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="item-description">
                      <p>Hello Kitty</p>
                      <p>Strawberry and lychee green tea with rainbow jellies</p>
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