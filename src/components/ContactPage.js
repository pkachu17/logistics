import React, { useState } from 'react';
import './ContactPage.css'; // Import the CSS file for styling

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            className="form-input"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: info@imexcargo.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    </div>
  );
}

export default ContactPage;
