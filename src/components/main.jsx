import React from 'react';
import Navbar from './navbar';
import About from './about';
import Order from './order';

class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>Main Page</h1>

        <div className="photos-div">
          <p>photo animation here</p>
        </div>

        {<About />}
        
        {<Order />}
      </div>
    )
  }
}

export default Main;