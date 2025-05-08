// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import PageWrapper from '../components/PageWrapper';

function Home() {
  return (
    <PageWrapper>
      <div className="gucci-logo-fixed">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-500x313.png"
          alt="Gucci Logo"
          className="gucci-logo"
        />
      </div>

      <div className="home-container">
        <h1 className="home-title">Welcome to Our Gucci Store!</h1>
        <p className="home-subtitle">Shop the best products at the best prices 🎉</p>
        <Link to="/products">
          <button className="shop-now-button">Shop Now</button>
        </Link>
      </div>
    </PageWrapper>
  );
}

export default Home;
