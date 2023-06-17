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
          <li> <a
            href="https://www.linkedin.com/in/ayaansharif/"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i></a>
          </li>
          <li><a href="https://github.com/ayxxn-shxrif" target="_blank" className="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="https://twitter.com/ayxxn_shxrif" target="_blank" className="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="https://t.me/ayxxn_shxrif" target="_blank" className="contact-icon">
            <i class="fa fa-telegram" aria-hidden="true"></i></a>
          </li>
          <li>
  <a href="https://kaggle.com/ayaansharif" target="_blank" className="contact-icon kaggle-icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 320 512">
      <path d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z"/>
    </svg>
  </a>
          </li>


          </ul>



            <p className="copyright">Ayaan Sharif © 2023</p> 
         </div> 
  );
};

export default Footer;
