import React from "react";
import { Container, Form, Button } from "semantic-ui-react";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <h2>Contact Me</h2>
        <br />
        <Form>
          <Form.Field required error="Please enter your name">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Name" />
          </Form.Field>
          <Form.Field required error="Please enter your email address">
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" placeholder="Email" />
          </Form.Field>
          <Form.Field required error="Please enter your message">
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
