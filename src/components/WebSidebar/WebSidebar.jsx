import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./WebSidebar.scss";
import logoS from "../../assets/images/logo-s.png";
import logoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const WebSidebar = () => (
  <div className="web-nav-bar">
    <Link className="logo" to="/">
      <img src={logoS} alt="logo" />
      <img className="logo-subtitle" src={logoSubtitle} alt="logo_subtitle" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/oludahunsi-obafemi-4733171b1/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/OluObafemi2"
        >
          {" "}
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />{" "}
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Obafemi-NG"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />{" "}
        </a>
      </li>
    </ul>
  </div>
);

export default WebSidebar;
