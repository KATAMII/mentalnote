import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          Take the First Step Towards Better Mental Health
        </h2>
        <p className="contact-description">
          Begin your journey to mental wellness today. Our professional therapists are here to support you every step of the way.
        </p>
        <div className="contact-buttons">
          <Link to="/signup" className="contact-button start-free">
            Start Free <FaArrowRight className="button-icon" />
          </Link>
          <Link to="/therapists" className="contact-button contact-therapist">
            Contact Therapist <FaArrowRight className="button-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;