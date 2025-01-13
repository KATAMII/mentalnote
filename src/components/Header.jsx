import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}className='log'>
            <h1>
              <span className="highlight">Mind</span>Ease
            </h1>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
            to="/" 
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/symptom-checker' ? 'active' : ''}`} 
            to="/symptom-checker" 
            onClick={closeMenu}
          >
            Symptom Checker
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/mood-tracker' ? 'active' : ''}`} 
            to="/mood-tracker" 
            onClick={closeMenu}
          >
            Mood Tracker
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/chatbot' ? 'active' : ''}`} 
            to="/chatbot" 
            onClick={closeMenu}
          >
            Chatbot
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/therapist' ? 'active' : ''}`} 
            to="/therapist" 
            onClick={closeMenu}
          >
            Therapists
          </Link>
        </nav>
        
        <button className="login-button">Login</button>
      </div>
    </header>
  );
}

export default Header;
