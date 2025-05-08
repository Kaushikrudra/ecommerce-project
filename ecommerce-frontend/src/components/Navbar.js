// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll add simple styling

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/products" className="nav-button">Products</Link>
      <Link to="/cart" className="nav-button">Cart</Link>
      <Link to="/checkout" className="nav-button">Checkout</Link>
      <Link to="/orders" className="nav-button">Orders</Link> {/* ✅ Styled like other buttons */}
    </nav>
  );
}

export default Navbar;
