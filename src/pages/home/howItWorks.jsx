import React from 'react';
import './howItWorks.css';
import { FaUserPlus, FaChartLine, FaComments, FaClipboardCheck } from 'react-icons/fa';

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Sign Up & Personalize",
      description: "Create your account and customize your profile to get a personalized experience tailored to your needs.",
      color: "#4CAF50" // Green
    },
    {
      icon: <FaChartLine />,
      title: "Track Your Progress",
      description: "Monitor your daily mood patterns and symptoms with our easy-to-use tracking tools.",
      color: "#66BB6A" // Lighter green
    },
    {
      icon: <FaComments />,
      title: "Get Support",
      description: "Connect with our AI support system or find the right therapist for professional guidance.",
      color: "#81C784" // Even lighter green
    },
    {
      icon: <FaClipboardCheck />,
      title: "Receive Insights",
      description: "Get personalized reports and actionable insights to help improve your mental well-being.",
      color: "#A5D6A7" // Softest green
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number" style={{ backgroundColor: step.color }}>
                {index + 1}
              </div>
              <div className="step-icon" style={{ color: step.color }}>
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-connector" 
                   style={{ backgroundColor: step.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;