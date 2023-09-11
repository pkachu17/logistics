import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>ImEx Cargo LLC</h2>
          <p>Your Trusted Logistics Partner</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@imexcargo.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ImEx Cargo LLC. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
