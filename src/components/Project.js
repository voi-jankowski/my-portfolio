import React from "react";
import { Card, Icon } from "semantic-ui-react";
import "./Project.css"; // Import custom CSS file for Project component

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <Card className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <Card.Content>
        <Card.Header className="project-title">{title}</Card.Header>
        <Card.Description className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            <Icon name="external alternate" size="large" />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size="large" />
          </a>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Project;
