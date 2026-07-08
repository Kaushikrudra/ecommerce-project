// src/pages/Contact.js
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import PageWrapper from '../components/PageWrapper';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! Our Atelier team will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageWrapper>
      <div className="contact-container">
        <header className="contact-header">
          <span className="contact-subtitle">CUSTOMER CARE</span>
          <h1 className="contact-title">CONTACT ATELIER</h1>
          <p className="contact-intro">
            For inquiries regarding our tailored streetwear collections, orders, or private Atelier appointments, please reach out to us.
          </p>
        </header>

        <div className="contact-grid">
          {/* Left Side: Contact Information */}
          <div className="contact-info">
            <div className="info-block">
              <h3>ATELIER MILANO</h3>
              <p>Via Montenapoleone, 8</p>
              <p>20121 Milano, Italy</p>
            </div>
            
            <div className="info-block">
              <h3>DIRECT CHANNELS</h3>
              <p><strong>Email:</strong> atelier@gucci.com</p>
              <p><strong>Phone:</strong> +39 02 1234 5678</p>
              <p><strong>WhatsApp:</strong> +39 333 456 7890</p>
            </div>

            <div className="info-block">
              <h3>HOURS</h3>
              <p>Monday – Saturday: 10:00 – 19:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="contact-form-wrapper">
            <h3>SEND A MESSAGE</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="ENTER YOUR FULL NAME"
                  required 
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  required 
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="6"
                  placeholder="WRITE YOUR MESSAGE HERE..."
                  required 
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </PageWrapper>
  );
}

export default Contact;
