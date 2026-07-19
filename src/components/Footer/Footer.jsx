import React from "react";
import "./Footer.css";

import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />

      <div className="footer">
        <div className="social-links">

          <a
            href="https://github.com/Sanjana-Bhandari"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="GitHub" />
          </a>

          <a
            href="https://www.instagram.com/sanjana_b22/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>

          <a
            href="https://www.linkedin.com/in/sanjana-kumari-9930ab3a2/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>

        </div>
      </div>

      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;