import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-main">
        <div className="head">
          <Link to="/" className="sushi-btn">SUSHI FACTORY</Link>
          <p>Sushi and Tea</p>
        </div>
        <div className="nav-btns">
          <Link to="/menu" className="nav-btn">Menu</Link>
          <a href="#order" className="nav-btn">Order</a>
        </div>
      </div>
    )
  } 
}

export default Navbar;