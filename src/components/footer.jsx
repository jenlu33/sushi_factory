import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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
        <a
          className="footer-link"
          href="https://www.facebook.com/sushifactoryandtea"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;