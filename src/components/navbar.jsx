import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
    <div className="navbar-main">
      <div className="navbar-content">
        <div className="head">
          <Link to="/" className="navbar-title">SUSHI FACTORY</Link>
          <h2 className="navbar-sub-title">Sushi and Tea</h2>
        </div>
        <div className="nav-btns">
          <Link to="/menu" className="nav-btn">Menu</Link>
          <Link to="/order" className="nav-btn">Order</Link>
          <Link to="/directions" className="nav-btn">Directions</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;