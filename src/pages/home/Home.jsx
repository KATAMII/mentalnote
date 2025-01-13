import React from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './howItWorks';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
