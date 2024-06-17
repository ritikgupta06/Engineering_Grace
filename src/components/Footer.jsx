import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:5001/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
          
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setEmail('');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our story, mission, and values.</p>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/shipping">Shipping Information</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul className="social-media">
            <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Engineering Grace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
