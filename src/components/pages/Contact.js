import React, { useState } from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { validateForm, isValidEmail } from "../../utils/helpers";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation or data processing
    const errors = validateForm(formData);
    setFormErrors(errors);
    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Perform any necessary form submission or data processing here
      console.log(formData);
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact">
      <Container>
        <h2>Contact Me</h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Field required error={formErrors.name}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <span className="error-message">Name is required</span>
            )}
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
            {formErrors.name && (
              <span className="error-message">Invalid email address</span>
            )}
          </Form.Field>
          <Form.Field required error={formErrors.message}>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
            />
            {formErrors.message && (
              <span className="error-message">Message is required</span>
            )}
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
