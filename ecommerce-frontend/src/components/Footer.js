// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-column brand-info">
          <div className="footer-logo-wrapper">
            <span className="footer-logo">GUCCI</span>
            <span className="footer-sublogo">ATELIER</span>
          </div>
          <p className="footer-tagline">ITALIAN LUXURY HAUTE COUTURE. CRAFTED INDIVIDUALLY FOR THE BOLD.</p>
        </div>

        {/* Column 2: Shop Links */}
        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/products?category=Apparel">Apparel</Link></li>
            <li><Link to="/products?category=Accessories">Accessories</Link></li>
            <li><Link to="/products?category=Home">Home Decor</Link></li>
            <li><Link to="/lookbook">Lookbook</Link></li>
          </ul>
        </div>

        {/* Column 3: Company Info */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">Shipping & Delivery</Link></li>
            <li><Link to="/">Returns & Refunds</Link></li>
            <li><Link to="/">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-column newsletter">
          <h3>Newsletter</h3>
          <p>Join the neon club. Subscribe to get early drops and discount alerts.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="newsletter-input" 
              required
            />
            <button type="submit" className="newsletter-btn">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">INSTAGRAM</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">TIKTOK</a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-link">WHATSAPP</a>
        </div>
        <p className="footer-copy">© 2026 GUCCI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
