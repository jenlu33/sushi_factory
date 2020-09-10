import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYelp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-contact">
        <p>(540) 951-2380</p>
      </div>
      <div className="footer-address">
        <a href="https://www.google.com/maps/place/Sushi+Factory/@37.233704,-80.4366271,17z/data=!3m1!4b1!4m5!3m4!1s0x884d958d86d93203:0xe2baedae399e9f15!8m2!3d37.233704!4d-80.4344384">
          801 University City Blvd, Ste. 15, Blacksburg, VA 24060
        </a>
        {/* <p>801 University City Blvd, Ste. 15, Blacksburg, VA 24060</p> */}
      </div>
      <div className="social-handles">
        <a
          className="footer-link"
          href="https://www.facebook.com/sushifactoryandtea"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          className="footer-link"
          href="https://www.yelp.com/biz/sushi-factory-blacksburg?osq=sushi"
        >
          <FontAwesomeIcon icon={faYelp} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;