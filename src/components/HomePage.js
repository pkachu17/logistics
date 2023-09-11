import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import backgroundImage from '../images/cargo1.jpeg'; // Import your background image

function HomePage() {
  return (
    <div className="home-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Our Logistics Company</h1>
        <p>
          We provide reliable logistics services to meet your shipping needs.
          Our experienced team ensures that your goods are handled with care
          and delivered on time.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fast and Secure Shipping</li>
          <li>Global Reach</li>
          <li>Competitive Pricing</li>
          <li>24/7 Customer Support</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
