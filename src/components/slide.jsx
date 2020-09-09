import React from "react";

function Slide(props) {
  const imgUrl = props.imgUrl;
  return(
    <div className="slide-item fade">
      <img src={`../../assets/images/${imgUrl}`} alt=""/>
      <h3>Caption</h3>
    </div>
  )
};

export default Slide;