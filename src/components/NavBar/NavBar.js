import React from "react";
import { Link } from "react-router-dom";

import DarkModeButton from "./DarkModeButton/DarkModeButton";

import "./NavBar.scoped.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser,faTerminal, faUser,faEnvelope} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
      
        <li className="nav-link">
          <Link to="/">
          <FontAwesomeIcon icon={faHouseUser} /> Home
          </Link>
        </li>
       
        <li className="nav-link">
          <Link to="/experience">
         <FontAwesomeIcon icon={faTerminal} /> Projects
          </Link>
        </li>
        
         <li className="nav-link">
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} /> About
          </Link>
        </li>
        
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
        </li>

        
      </ul>
      <DarkModeButton />

    </nav>
  );
};

export default NavBar;
