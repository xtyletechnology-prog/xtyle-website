// components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Xtyle Technology</h2>
            <div className="about-highlight">
              <span className="highlight-text">Innovation Meets Excellence</span>
            </div>
            <p>
              Founded in 2015, Xtyle Technology has grown from a small startup 
              to a leading IT software company, delivering innovative solutions 
              to Fortune 500 companies and innovative startups alike.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Agile Development Methodology</span>
              </div>
              <div className="about-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>24/7 Technical Support</span>
              </div>
              <div className="about-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>ISO 27001 Certified Security</span>
              </div>
              <div className="about-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Global Delivery Centers</span>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-desc">Client Retention</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9</span>
                <span className="stat-desc">Client Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50M+</span>
                <span className="stat-desc">Lines of Code</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-grid">
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;