export const validateForm = (formData) => {
  const errors = {};

  // Check if name is empty
  if (formData.name.trim() === "") {
    errors.name = true;
  }

  // Check if email is empty or invalid
  if (formData.email.trim() === "" || !isValidEmail(formData.email)) {
    errors.email = true;
  }

  // Check if message is empty
  if (formData.message.trim() === "") {
    errors.message = true;
  }

  return errors;
};

const isValidEmail = (email) => {
  // Simple email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
