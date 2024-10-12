import React, { useState } from 'react';

const JoinAsMentorForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    linkedin: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validateForm = () => {
    const { name, email, expertise, linkedin } = formData;
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      expertise.trim() !== '' &&
      linkedin.trim() !== ''
    );
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        expertise: '',
        linkedin: '',
        message: '',
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="mentor-form-container">
      <h2>Join ComicFix as a Mentor</h2>
      {formSubmitted ? (
        <p>Thank you for joining as a mentor! We will be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="mentor-form">
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expertise">Area of Expertise*</label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn Profile*</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your motivation to mentor"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default JoinAsMentorForm;
