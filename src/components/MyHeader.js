import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";

const MyHeader = () => {
  const segmentStyle = {
    // backgroundImage: "url('/assets/background-header.jpg')",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
  };
  return (
    <Segment
      inverted
      padded="very"
      vertical
      textAlign="center"
      style={segmentStyle}
    >
      <Header as="h1">Voi Jankowski</Header>

      <Header as="h3">Full Stack Web Developer</Header>
    </Segment>
  );
};

export default MyHeader;
