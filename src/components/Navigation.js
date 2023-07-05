import React from "react";
import { Menu, Container } from "semantic-ui-react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Container>
      <Menu pointing secondary stackable>
        <Menu.Item
          name="About"
          active={currentPage === "About"}
          onClick={() => handlePageChange("About")}
        >
          About Me
        </Menu.Item>

        <Menu.Item
          name="Portfolio"
          active={currentPage === "Portfolio"}
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </Menu.Item>

        <Menu.Item
          name="Contact"
          active={currentPage === "Contact"}
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </Menu.Item>

        <Menu.Item
          name="Resume"
          active={currentPage === "Resume"}
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </Menu.Item>
      </Menu>
    </Container>
  );
}

export default Navigation;
