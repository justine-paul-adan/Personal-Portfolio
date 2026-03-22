import "./HeroSection.css";
import { portfolioData } from "../../data/templateData";
import profileImage from "../../utils/profile.jpg";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-content">

          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{portfolioData.name}</span>
          </h1>

          <p className="hero-subtitle">
            Full-Stack Web Developer (React.Js & .NET)
          </p>

          <p className="hero-bio">
            I build fast, modern websites and web applications that help
            businesses grow and scale online.
          </p>

          <div className="hero-trust">
            <span>✔ React & .NET Developer</span>
            <span>✔ 5+ Projects Completed</span>
            <span>✔ Available for Freelance</span>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">View Projects</button>
            <button className="btn btn-secondary">Hire Me</button>
          </div>

          <div className="hero-links">
            <a href={portfolioData.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>

            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <div className="profile-ring">
            <img src={profileImage} alt="Justine profile" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;