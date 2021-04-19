// import { requirePropFactory } from "@material-ui/core";
import React from "react";
// import Slide from "./slide";
import { useState, useEffect } from "react";

function SlideShow(props) {
  const imgs = props.imgs;
  const [idx, setIdx] = useState(0);

  // const [imgUrl, setImgUrl] = useState(imgs[0])
  // let [imgIdx, setImgIdx] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImgIdx(imgIdx => imgIdx + 1);
  //     setImgUrl(imgs[imgIdx]);
  //     if (imgIdx === imgs.length - 1) setImgIdx(0);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // });

  useEffect(() => {
    const interval = setInterval(() => {
      const slides = document.querySelectorAll(".slide-item");
      slides[idx].style.display = "block";
        if (idx === 0) {
          slides[slides.length - 1].style.display = "none";
        } else {
          slides[idx - 1].style.display = "none";
        }
      setIdx(idx => idx + 1);
      if (idx === slides.length - 1) setIdx(0);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <div className="slideshow-container">
      {imgs.map((img, i) => 
        <div key={`slide ${i}`} className="slide-item fade">
          {/* Swat -- view images */}
          <img src={process.env.PUBLIC_URL + `/assets/images/${img}`} alt="" />
        </div>
        )}
    </div>
  )
};

export default SlideShow;