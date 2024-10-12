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
    <div className="w-full max-w-lg mx-auto p-6 bg-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gold">Join ComicFix as a Mentor</h2>
      {formSubmitted ? (
        <p className="text-gold font-semibold text-center">Thank you for joining as a mentor! We will be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gold font-medium">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2 p-3 border border-gold bg-black text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gold font-medium">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-2 p-3 border border-gold bg-black text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="expertise" className="text-gold font-medium">Area of Expertise*</label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleInputChange}
              className="mt-2 p-3 border border-gold bg-black text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="linkedin" className="text-gold font-medium">LinkedIn Profile*</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="mt-2 p-3 border border-gold bg-black text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gold font-medium">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your motivation to mentor"
              className="mt-2 p-3 border border-gold bg-black text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gold text-black font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default JoinAsMentorForm;
