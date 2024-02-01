import React from "react";
import { Segment, Image } from "semantic-ui-react";
import "../App.css"; // Import the styles.css file

const MyHeader = () => {
  return (
    <Segment id="my-header" padded="very" vertical textAlign="center">
      <Image src="/assets/Logo_White.png" alt="Voi Jankowski" centered />
    </Segment>
  );
};

export default MyHeader;
