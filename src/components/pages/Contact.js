import React, { useState } from "react";
import { Container, Form, Button } from "semantic-ui-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation or data processing here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <Container>
        <h2>Contact Me</h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
            />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
