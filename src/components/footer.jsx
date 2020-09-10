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
        <p>801 University City Blvd, Ste. 15, Blacksburg, VA 24060</p>
      </div>
      <div className="social-handles">
        {/* <p>Follow Us</p> */}
        {/* <a className="footer-link text" href="">
          Uber Eats
        </a>
        <a className="footer-link text" href="">
          DoorDash
        </a> */}
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