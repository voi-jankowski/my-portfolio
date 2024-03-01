import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import "./Resume.css"; // Import custom CSS file for Resume component

const Resume = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/18Eacg4k6jtv3p9-jT4P2HS5Lf1bBFZaB/view?usp=sharing";

  return (
    <Container id="resume">
      <br />
      <Header as="h2">Resume</Header>
      <Grid stackable reversed="mobile" columns={2}>
        <Grid.Column>
          <Container id="code-container">
            <br />
            <code>
              <span className="proficiency-header">
                Front-end Proficiencies
              </span>{" "}
              [
              <br />
              &nbsp;&nbsp;<span className="custom-color">HTML</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">CSS</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">JavaScript</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">JQuery</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">React</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">TypeScript</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">Bootstrap</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">Materialize</span>
              <br />]
            </code>

            <br />
            <br />

            <code>
              <span className="proficiency-header">Back-end Proficiencies</span>{" "}
              [
              <br />
              &nbsp;&nbsp;<span className="custom-color">APIs</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">Node</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">Express</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">MySQL, Sequelize</span>
              ,
              <br />
              &nbsp;&nbsp;
              <span className="custom-color">MongoDB, Mongoose</span>,
              <br />
              &nbsp;&nbsp;<span className="custom-color">REST</span>
              <br />]
            </code>
          </Container>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <br />
          <br />
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui medium image"
          >
            <img
              src="assets\resume-screenshot.png"
              alt="Resume"
              className="resume-image"
            />
            <span className="resume-overlay">Go to Resume</span>
          </a>

          <br />
          <br />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Resume;
