import React from "react";
import { Container, Header } from "semantic-ui-react";
import "./Resume.css"; // Import custom CSS file for Resume component

const Resume = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1YLzP4XDYEDFxxemPhHGZjWhejxq0iCND/view?usp=sharing";

  return (
    <Container id="resume">
      <br />
      <Header as="h2">Resume</Header>

      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ui medium right floated image"
      >
        <img
          src="assets\resume-screenshot.png"
          alt="Resume"
          className="resume-image"
        />
      </a>

      <br />
      <br />

      <code>
        <span className="proficiency-header">Front-end Proficiencies</span> [
        <br />
        &nbsp;&nbsp;"HTML",
        <br />
        &nbsp;&nbsp;"CSS",
        <br />
        &nbsp;&nbsp;"JavaScript",
        <br />
        &nbsp;&nbsp;"JQuery",
        <br />
        &nbsp;&nbsp;"React",
        <br />
        &nbsp;&nbsp;"Bootstrap",
        <br />
        &nbsp;&nbsp;"Materialize"
        <br />]
      </code>

      <br />
      <br />

      <code>
        <span className="proficiency-header">Back-end Proficiencies</span> [
        <br />
        &nbsp;&nbsp;"APIs",
        <br />
        &nbsp;&nbsp;"Node",
        <br />
        &nbsp;&nbsp;"Express",
        <br />
        &nbsp;&nbsp;"MySQL, Sequelize",
        <br />
        &nbsp;&nbsp;"MongoDB, Mongoose",
        <br />
        &nbsp;&nbsp;"REST"
        <br />]
      </code>
    </Container>
  );
};

export default Resume;
