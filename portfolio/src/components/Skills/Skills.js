import React from "react";
import "./Skills.css";
import { portfolioData } from "../../data/templateData";
import * as SiIcons from "react-icons/si";

function Skills() {
  const getIcon = (iconName) => {
    const Icon = SiIcons[iconName];
    return Icon ? <Icon className="skill-icon-svg" /> : <span>{iconName}</span>;
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Tools and technologies I work with
        </p>
        <div className="skills-grid">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{getIcon(skill.icon)}</span>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
