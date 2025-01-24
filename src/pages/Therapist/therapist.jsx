import React, { useState } from 'react';
import './Therapist.css';

const Therapist = () => {
  const [filters, setFilters] = useState({ specialization: '', language: '', availability: '' });

  const therapists = [
    {
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Dr. John Doe',
      title: 'Clinical Psychologist',
      specialization: 'Anxiety & Depression',
      experience: '10 years',
      education: 'Ph.D. in Clinical Psychology',
      availability: 'Mon-Fri, 9am - 5pm',
      rating: 4.8
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Dr. Jane Smith',
      title: 'Psychotherapist',
      specialization: 'Relationship Counseling',
      experience: '8 years',
      education: 'M.D. in Psychiatry',
      availability: 'Mon-Sun, 10am - 6pm',
      rating: 4.9
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: 'Dr. Sarah Johnson',
      title: 'Child Psychologist',
      specialization: 'Child & Adolescent Therapy',
      experience: '12 years',
      education: 'Ph.D. in Child Psychology',
      availability: 'Tue-Sat, 8am - 4pm',
      rating: 4.9
    },
    {
      photo: 'https://randomuser.me/api/portraits/men/4.jpg',
      name: 'Dr. Michael Chen',
      title: 'Family Therapist',
      specialization: 'Family & Marriage Counseling',
      experience: '15 years',
      education: 'Ph.D. in Family Therapy',
      availability: 'Mon-Fri, 11am - 7pm',
      rating: 4.7
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/5.jpg',
      name: 'Dr. Emily Rodriguez',
      title: 'Trauma Specialist',
      specialization: 'PTSD & Trauma Recovery',
      experience: '9 years',
      education: 'Psy.D. in Clinical Psychology',
      availability: 'Wed-Sun, 9am - 5pm',
      rating: 4.8
    },
    {
      photo: 'https://randomuser.me/api/portraits/men/6.jpg',
      name: 'Dr. David Wilson',
      title: 'Addiction Specialist',
      specialization: 'Substance Abuse & Recovery',
      experience: '11 years',
      education: 'Ph.D. in Clinical Psychology',
      availability: 'Mon-Sat, 10am - 6pm',
      rating: 4.9
    }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="therapist-container">
      <div className="therapist-header">
        <h1>Find Your Perfect Therapist</h1>
        <p>Begin your journey to wellness with our experienced professionals</p>
      </div>

      <div className="search-container">
        <div className="filter-group">
          <div className="filter-item">
            <label htmlFor="specialization">Specialization</label>
            <select id="specialization" name="specialization" onChange={handleFilterChange}>
              <option value="">All Specializations</option>
              <option value="anxiety">Anxiety & Depression</option>
              <option value="relationships">Relationship Counseling</option>
              <option value="trauma">Trauma & PTSD</option>
              <option value="child">Child & Adolescent</option>
              <option value="family">Family & Marriage</option>
              <option value="addiction">Substance Abuse</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="language">Language</label>
            <select id="language" name="language" onChange={handleFilterChange}>
              <option value="">Any Language</option>
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
              <option value="mandarin">Mandarin</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="availability">Availability</label>
            <select id="availability" name="availability" onChange={handleFilterChange}>
              <option value="">Any Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="weekend">Weekend</option>
            </select>
          </div>
        </div>
      </div>

      <div className="therapist-grid">
        {therapists.map((therapist, index) => (
          <div className="therapist-card" key={index}>
            <div className="therapist-card-header">
              <img src={therapist.photo} alt={therapist.name} className="therapist-photo" />
              <div className="rating">★ {therapist.rating}</div>
            </div>
            <div className="therapist-card-content">
              <h3>{therapist.name}</h3>
              <h4>{therapist.title}</h4>
              <div className="therapist-details">
                <p><strong>Specialization:</strong> {therapist.specialization}</p>
                <p><strong>Experience:</strong> {therapist.experience}</p>
                <p><strong>Education:</strong> {therapist.education}</p>
                <p><strong>Availability:</strong> {therapist.availability}</p>
              </div>
              <div className="therapist-card-actions">
                <button className="view-profile-btn">View Profile</button>
                <button className="book-session-btn">Book Session</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="booking-info">
        <div className="pricing-section">
          <h2>Session Pricing</h2>
          <div className="price-cards">
            <div className="price-card">
              <h3>Single Session</h3>
              <p className="price">$100</p>
              <p>One-time consultation</p>
              <button className="book-now-btn">Book Now</button>
            </div>
            <div className="price-card featured">
              <h3>Monthly Package</h3>
              <p className="price">$360</p>
              <p>4 sessions per month</p>
              <button className="book-now-btn">Book Now</button>
            </div>
            <div className="price-card">
              <h3>Quarterly Package</h3>
              <p className="price">$990</p>
              <p>12 sessions (3 months)</p>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="help-section">
        <h2>Need Help Choosing?</h2>
        <p>Schedule a free 15-minute consultation to find the right therapist for you</p>
        <button className="consultation-btn">Schedule Consultation</button>
      </div>
    </div>
  );
};

export default Therapist;
