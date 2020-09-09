import React from 'react';
import About from './about';
import Order from './order';
import SlideShow from "./slideshow";

function Main() {
  const imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg" ];
  // "04.jpg","05.jpg", "06.jpg"

  return(
    <div className="splash-container">
      
      <div className="splash-title-container">
        <h1 className="splash-title">Welcome</h1>
        <span className="splash-highlight"></span>
      </div>

      <SlideShow imgs={imgs}/>
      {/* <p>We offer a large variety of sushi takeout and delicious milk teas</p> */}

      <div className="hours-container">
        <h2>Hours</h2>
        <h3>Hours here</h3>
      </div>

      {/* {<About />} */}
      
      {/* {<Order />} */}
    </div>
  )
}

export default Main;