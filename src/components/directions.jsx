import React from "react";

function Directions() {
  return (
    <div className="container-v1">
      <div className="background-div"></div>
      <div className="title-container">
        <h1 className="title-v1">Directions</h1>
      </div>
      <div className="info-box">
        <h4>801 University City Blvd, Suite #15, Blacksburg, VA 24060</h4>
        <h4>We are located inside the University Mall on the left.</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.5901203700055!2d-80.43662708473978!3d37.23370397986162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d9541b8fc8cef%3A0x7e40aa2d99373ccb!2s801%20University%20City%20Blvd%20%2315%2C%20Blacksburg%2C%20VA%2024060!5e0!3m2!1sen!2sus!4v1617727275295!5m2!1sen!2sus" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Directions;