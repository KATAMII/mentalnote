import React from 'react'
import './header.css'

function Header() {
  return (
    <header className="header">
    <div className="header__container">
      <h1 className="header__title">Mental Note</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="/" className="header__link">Home</a></li>
          <li className="header__nav-item"><a href="/symptom-checker" className="header__link">Symptom Checker</a></li>
          <li className="header__nav-item"><a href="/mood-tracker" className="header__link">Mood Tracker</a></li>
          <li className="header__nav-item"><a href="/chatbot" className="header__link">Chatbot</a></li>
          <li className="header__nav-item"><a href="/therapist" className="header__link">Therapist</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header
