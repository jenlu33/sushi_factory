import React from 'react';

function menuImages(props) {
  const url = props.imgURL;
  const customClass = props.customClass;
  return (
    <div className={`menu-imgs ${customClass}`}>
      {/* swat -- view images */}
      <img src={process.env.PUBLIC_URL + `/assets/images/${url}`} alt="" />
    </div>
  )
};

export default menuImages;