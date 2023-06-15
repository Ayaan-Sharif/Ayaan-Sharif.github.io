import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faTelegram,
  faKaggle
} from "@fortawesome/free-brands-svg-icons";
/* import { faBolt } from "@fortawesome/free-solid-svg-icons"; */

import "./Footer.scoped.scss";
const ColoredLine = () => (
    <hr
        style={{
            height: 1,
 borderColor: "rgba(255,255,255,.6)",
        }}
    />
);
const Footer = () => {
  return (
    <div className="footer-container">
             <ul className="social-media-list">
          <li><a href="/home" target="_blank" className="contact-icon">
            <i class="fa fa-linkedin" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-telegram" aria-hidden="true"></i></a>
          </li>
      
          </ul>



            <p className="copyright">Ayaan Sharif © 2023</p> 
         </div>
  );
};

export default Footer;
