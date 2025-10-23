import React from "react";
import "../styles/index.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-column left">
          <a href="https://www.linkedin.com/in/natthanicha-vongjarit-7029b327a" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="footer-column center">
          <a href="https://github.com/callanicha" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="footer-column right">
          <a href="mailto:calla2547@gmail.com">
            Email
          </a>
        </div>
      </div>
      <p className="footer-bottom">
        © 2025 Natthanicha VONGJARIT. All vibes reserved.
      </p>
    </div>
  );
};

export default Footer;
