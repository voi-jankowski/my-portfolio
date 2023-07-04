import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";
import "../App.css"; // Import the styles.css file

const MyHeader = () => {
  const segmentStyle = {
    // backgroundImage: "url('/assets/background-header.jpg')",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
  };
  return (
    <Segment
      className="header"
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
