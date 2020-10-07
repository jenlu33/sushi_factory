import React from "react";
import ModalImage from "react-modal-image";

function Announcements(props) {
  const {imgUrl, alt, desc} = props;

  return (
    <div className="announcements-info">
      <h3 className="announcements-desc">{desc}</h3>
      {/* <img src={imgUrl} alt={alt} /> */}
      <div className="modal-image">
        <ModalImage 
          small={imgUrl}
          large={imgUrl}
          alt={alt}
          hideDownload = "true"
          />
      </div>
    </div>
  );
}

export default Announcements;