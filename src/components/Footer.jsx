import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">MindfulSpace</div>
          <p className="footer-description">
            Empowering individuals through accessible mental health support and professional guidance.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">
              <FaArrowRight /> Home
            </a>
            <a href="#" className="footer-link">
              <FaArrowRight /> About Us
            </a>
            <a href="#" className="footer-link">
              <FaArrowRight /> Services
            </a>
            <a href="#" className="footer-link">
              <FaArrowRight /> Contact
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">
              <FaArrowRight /> Online Therapy
            </a>
            <a href="#" className="footer-link">
              <FaArrowRight /> Counseling
            </a>
            <a href="#" className="footer-link">
              <FaArrowRight /> Mental Health Tips
            </a>
            <a href="#" className="footer-link">
              <FaArrowRight /> Resources
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-description">
            Subscribe to our newsletter for mental health tips and updates.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} MindfulSpace. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <a href="#" className="footer-bottom-link">Terms of Service</a>
          <a href="#" className="footer-bottom-link">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;