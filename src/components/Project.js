import React from "react";

const Project = ({ title, image, deployedLink, githubLink }) => {
  // return (
  //     <div className="card">
  //     <div className="img-container">
  //         <img
  //         alt={title}
  //         src={image}
  //         />
  //     </div>
  //     <div className="content">
  //         <ul>
  //         <li>
  //             <strong>Name:</strong> {title}
  //         </li>
  //         <li>
  //             <strong>Deployed Link:</strong> {deployedLink}
  //         </li>
  //         <li>
  //             <strong>GitHub Link:</strong> {githubLink}
  //         </li>
  //         </ul>
  //     </div>
  //     </div>
  // );
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
