import React from "react";
import { Icon, Item } from "semantic-ui-react";
import "./Project.css"; // Import custom CSS file for Project component

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <Item>
      <Item.Image size="medium" src={image} alt={title} />
      <Item.Content>
        <Item.Header className="project-title">{title}</Item.Header>
        <Item.Description className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            <Icon name="external alternate" size="large" />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size="large" />
          </a>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default Project;
