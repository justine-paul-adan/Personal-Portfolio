import React from "react";
import "./Footer.css";
import { portfolioData } from "../../data/templateData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get in Touch</h3>
            <p>Let's work together on your next project!</p>
            <a href={`mailto:${portfolioData.email}`} className="email-link">
              {portfolioData.email}
            </a>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {portfolioData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
