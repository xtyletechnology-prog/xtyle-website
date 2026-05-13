// components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">
          Ready to transform your digital presence? Let's talk.
        </p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h4>Visit Us</h4>
              <p>123 Innovation Drive<br/>Tech Valley, CA 94025</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h4>Email Us</h4>
              <p>hello@xtyle.tech<br/>support@xtyle.tech</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h4>Call Us</h4>
              <p>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {submitted && (
              <div className="success-message">
                Thank you! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;