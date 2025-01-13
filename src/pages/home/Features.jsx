import React from 'react';
import { Link } from 'react-router-dom';
import './features.css';
import { FaStethoscope, FaChartLine, FaRobot, FaUserMd } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaStethoscope />,
      title: "Symptom Checker",
      description: "Monitor signs of depression with clinically validated tools. Track your mental health journey with professional assessment tools.",
      link: "/symptom-checker",
      linkText: "Check Symptoms"
    },
    {
      icon: <FaChartLine />,
      title: "Mood Monitor",
      description: "Track your daily mood patterns and identify emotional triggers. Get insights into your mental well-being with our advanced monitoring tools.",
      link: "/mood-tracker",
      linkText: "Track Mood"
    },
    {
      icon: <FaRobot />,
      title: "Chatbot Support",
      description: "24/7 AI-powered emotional support and guidance. Have meaningful conversations whenever you need someone to talk to.",
      link: "/chat-support",
      linkText: "Start Chat"
    },
    {
      icon: <FaUserMd />,
      title: "Professional Therapists",
      description: "Connect with licensed therapists for personalized mental health support. Schedule private sessions at your convenience.",
      link: "/therapists",
      linkText: "Find Therapist"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="features-title">What We Offer</h2>
        <p className="features-subtitle">
          Comprehensive mental health support tools at your fingertips
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <Link to={feature.link} className="feature-link">
                {feature.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
