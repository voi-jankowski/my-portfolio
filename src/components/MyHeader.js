import React from "react";
import { Segment, Header } from "semantic-ui-react";
import "../App.css"; // Import the styles.css file

const MyHeader = () => {
  return (
    <Segment id="my-header" padded="very" vertical textAlign="center">
      <Header as="h1">Voi Jankowski</Header>

      <Header as="h3">Full Stack Web Developer</Header>
    </Segment>
  );
};

export default MyHeader;
