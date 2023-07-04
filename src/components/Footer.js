import React from "react";
import "../App.css"; // Import the styles.css file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/voi-jankowski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/voi-jankowski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/21063446/voi-jankowski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
