import React from 'react';
import Navbar from './navbar';
import About from './about';
import Menu from './menu';

class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        {<About />}
      
      </div>
    )
  }
}

export default Main;