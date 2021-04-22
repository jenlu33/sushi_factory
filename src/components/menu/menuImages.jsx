import React from 'react';

function menuImages(props) {
  const url = props.imgURL;
  const customClass = props.customClass;
  return (
    <div className={`menu-imgs ${customClass}`}>
      {/* Added 'process.env.PUBLIC_URL' becuase I was not able to view images locally when building app -- Swat */}
      <img src={process.env.PUBLIC_URL + `/assets/images/${url}`} alt="" />
    </div>
  )
};

export default menuImages;