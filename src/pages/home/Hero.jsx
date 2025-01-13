import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Your journey to mental wellness starts here.</h1>
        <p className="hero-subtitle">
          Track your mood, monitor symptoms and connect with therapists all in one place
        </p>
        <div className="hero-buttons">
          <button className="cta-button primary">Sign up for free</button>
          <button className="cta-button secondary">Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;