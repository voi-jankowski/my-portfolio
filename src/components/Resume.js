import React from "react";

const Resume = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/13gJ0KhZifEDD9gqVvX2YrINbLB8X9t9a/view?usp=sharing";

  return (
    <section id="resume">
      <h2>Resume</h2>
      <br />
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
        View Resume
      </a>
      <br />
      <br />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Materialize</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
    </section>
  );
};

export default Resume;
