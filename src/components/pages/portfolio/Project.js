import React from "react";
import { Icon, Image, Container } from "semantic-ui-react";
import "./Portfolio.css"; // Import custom CSS file for Project component

const Project = ({ title, image, deployedLink, githubLink }) => {
  // Generate a random number between 0 and 2
  const randomFloat = Math.floor(Math.random() * 2);

  // Define the corresponding CSS class based on the random number
  const floatClass = randomFloat === 0 ? "float-left" : "float-right";

  return (
    <div className={`project-float ${floatClass}`}>
      <Image className="project-image" src={image} circular bordered />
      <div className="project-overlay">
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
