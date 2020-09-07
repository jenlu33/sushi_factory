import React from 'react';

function menuImages(props) {
  const url = props.imgURL;
  return (
    <div className="menu-imgs">
      <img src={`../../assets/images/${url}`} alt="" />
    </div>
  )
};

export default menuImages;