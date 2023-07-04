import React from "react";
import { Container, Header, Card } from "semantic-ui-react";
import "./Resume.css"; // Import custom CSS file for Resume component

const Resume = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/13gJ0KhZifEDD9gqVvX2YrINbLB8X9t9a/view?usp=sharing";

  return (
    <section id="resume">
      <Container>
        <Header as="h2">Resume</Header>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
        <Card.Group>
          <Card className="proficiency-card">
            <Card.Content>
              <Card.Description>
                <code>
                  <span className="proficiency-header">
                    Front-end Proficiencies
                  </span>{" "}
                  [
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
              </Card.Description>
            </Card.Content>
          </Card>
          <Card className="proficiency-card">
            <Card.Content>
              <Card.Description>
                <code>
                  <span className="proficiency-header">
                    Back-end Proficiencies
                  </span>{" "}
                  [
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
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </section>
  );
};

export default Resume;
