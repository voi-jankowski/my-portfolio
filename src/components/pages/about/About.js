import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const About = () => {
  return (
    <section id="about">
      <Container text>
        <br />
        <Header as="h2">About Me</Header>
        <Image
          src="assets/profile-zoom.jpg"
          floated="right"
          size="medium"
          circular
        />

        <br />
        <p>
          Voi here - full stack Web Developer with an extensive background in
          real-time problem solving, intensive teamwork and management with a
          focus on delivering client satisfaction down to the last detail.
        </p>
        <br />
        <p>
          I studied American Literature at Warsaw University and went on to work
          as a Head Chef in high-pressure and fine dining kitchens across
          London. With my combined love of problem solving and bringing
          complicated ideas to life, I'm now in the brilliant world of web
          development.
        </p>
        <br />
        <p>
          I've collaborated on multiple projects, available within my portfolio,
          including complex applications. I love the challenge of working both
          independently and within a multi-disciplined team, and I really shine
          when it comes to producing unique solutions that exceed expectations.
        </p>
      </Container>
    </section>
  );
};

export default About;
