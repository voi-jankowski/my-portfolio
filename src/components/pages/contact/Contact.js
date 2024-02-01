import React from "react";
import { Container, Form, Button, Header } from "semantic-ui-react";

const Contact = () => {
  return (
    <Container id="contact">
      <br />
      <Header as="h2">Contact Me</Header>
      <br />
      <Form
        action="https://formsubmit.co/wojtek.wacek.dola@gmail.com"
        method="POST"
      >
        <Form.Field required>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Name" />
        </Form.Field>
        <Form.Field required>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" placeholder="Email" />
        </Form.Field>
        <Form.Field required>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
