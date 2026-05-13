// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Next-Gen IT Solutions
          </div>
          <h1 className="hero-title">
            Innovating Tomorrow's
            <span className="gradient-text"> Digital World</span>
          </h1>
          <p className="hero-description">
            Xtyle Technology delivers cutting-edge software solutions, 
            AI-powered applications, and enterprise-grade digital transformations 
            that drive business growth.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Start Your Journey
            </button>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Excellence</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <pre><code>{`<XtyleTech>
  <innovation> 
    unlimited.create()
  </innovation>
  <future>
    build.sustainable()
  </future>
</XtyleTech>`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;