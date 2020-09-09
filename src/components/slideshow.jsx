import React from "react";
// import Slide from "./slide";
import { useState, useEffect } from "react";

function SlideShow(props) {
  const imgs = props.imgs;
  const [imgUrl, setImgUrl] = useState(imgs[0])
  let [imgIdx, setImgIdx] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setImgUrl(imgs[imgIdx]);
      setImgIdx(imgIdx => imgIdx + 1);
      if (imgIdx === imgs.length - 1) setImgIdx(0);
    }, 3500);

      return () => clearInterval(interval);
  });

  return (
    <div className="slideshow-container">
      <div className="slide-item fade">
        <img src={`../../assets/images/${imgUrl}`} alt="" />
      </div>
      {/* {imgs.map((img, i) => 
        <Slide key={`slide ${i}`} imgUrl={img}/>
        )} */}
      {/* <button className="prev">&#10094;</button> */}
      {/* <button className="next">&#10095;</button> */}
    </div>
  )
};

export default SlideShow;