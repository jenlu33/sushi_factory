import React from 'react';

function menuImages(props) {
  const url = props.imgURL;
  const customClass = props.customClass;
  return (
    <div className={`menu-imgs ${customClass}`}>
      <img src={`../../assets/images/${url}`} alt="" />
    </div>
  )
};

export default menuImages;