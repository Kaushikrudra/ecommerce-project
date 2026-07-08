// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cartItems ? cartItems.length : 0;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="navbar-header">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>FREE SHIPPING ON ALL ORDERS ABOVE ₹1499</span>
      </div>

      {/* Main Navbar Container */}
      <div className="navbar-container">
        {/* Left: Hamburger menu toggle for mobile */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Left/Center: Brand Logo */}
        <div className="navbar-brand">
          <Link to="/" className="brand-logo">GUCCI</Link>
          <span className="brand-sub">ATELIER</span>
        </div>

        {/* Center: Navigation Links */}
        <nav className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" className={`nav-item ${location.pathname === '/products' && !location.search ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/lookbook" className={`nav-item ${location.pathname === '/lookbook' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Lookbook</Link>
          <Link to="/orders" className={`nav-item ${location.pathname === '/orders' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Orders</Link>
          <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>

        {/* Right: Search, Account, and Cart Icons */}
        <div className="navbar-actions">
          {/* Search Icon (SVG placeholder) */}
          <button className="icon-btn search-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* User/Account Icon (links to Orders history) */}
          <Link to="/orders" className="icon-btn user-btn" aria-label="Orders History">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>

          {/* Cart Icon with count badge */}
          <Link to="/cart" className="icon-btn cart-btn" aria-label="Shopping Cart">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
