import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "This app has been a game-changer for my mental health. The daily mood tracking and AI support helped me understand my patterns and seek help when needed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The symptom checker and therapist matching feature made it so easy to find the right professional help. I'm grateful for this platform.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "The chatbot support is available 24/7, which is amazing. It's like having a supportive friend whenever you need one. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;