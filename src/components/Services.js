// components/Services.js
import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: '🚀',
    title: 'Custom Software Development',
    description: 'Tailored enterprise solutions built with cutting-edge tech stacks to solve complex business challenges.',
    features: ['Full-cycle development', 'Cloud-native apps', 'Legacy modernization']
  },
  {
    id: 2,
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that learn, adapt, and drive data-driven decision making for your business.',
    features: ['Predictive analytics', 'NLP solutions', 'Computer vision']
  },
  {
    id: 3,
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that engage users and boost retention.',
    features: ['iOS & Android', 'React Native', 'Flutter']
  },
  {
    id: 4,
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure and migration services for modern enterprises.',
    features: ['AWS/Azure/GCP', 'DevOps', 'Microservices']
  },
  {
    id: 5,
    icon: '🔗',
    title: 'Blockchain Development',
    description: 'Decentralized applications and smart contracts for transparent, secure transactions.',
    features: ['Web3', 'Smart contracts', 'DeFi solutions']
  },
  {
    id: 6,
    icon: '🛡️',
    title: 'Cybersecurity',
    description: 'Comprehensive security assessments and implementation to protect your digital assets.',
    features: ['Penetration testing', 'Compliance', 'Security audits']
  }
];

const ServiceCard = ({ service }) => (
  <div className="service-card">
    <div className="service-icon">{service.icon}</div>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <div className="service-features">
      {service.features.map((feature, idx) => (
        <span key={idx} className="feature-tag">{feature}</span>
      ))}
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">
          Comprehensive technology solutions tailored to your business needs
        </p>
        <div className="services-grid">
          {servicesData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;