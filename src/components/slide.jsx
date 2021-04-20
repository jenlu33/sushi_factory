import { requirePropFactory } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";

function Slide(props) {
  const img = props.img;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const slides = document.querySelectorAll(".slide-item");
      // console.log(slides[idx]);
      // console.log(idx);
      // slides[idx].style.display = "block";
      // slides[idx - 1].style.display = "none";
      setIdx(idx => idx + 1);
      if (idx === slides.length - 1) setIdx(0);
    }, 2000);

    return () => clearInterval(interval);
  });


  const showSlides = () => {
    const slides = document.querySelectorAll(".slide-item");
    
      slides[idx].style.display = "block";
      console.log(slides[idx]);

    // console.log("hello");
  }
  

  return(
    <div>
      <div className="slide-item fade">
        {/* Added 'process.env.PUBLIC_URL' becuase I was not able to view images locally when building app -- Swat */}
        <img src={process.env.PUBLIC_URL + `/assets/images/${img}`} alt=""/>
      </div>
      {/* <button className="but" onClick={showSlides}>click me</button> */}
    </div>
  )
};

export default Slide;