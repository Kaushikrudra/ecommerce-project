// src/pages/Lookbook.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Lookbook.css';
import PageWrapper from '../components/PageWrapper';

function Lookbook() {
  const looks = [
    {
      id: 'LOOK 01',
      title: 'NEO-CLASSIC TAILORING',
      description: 'Relaxed silhouettes meet formal cuts. A modern twist on traditional Italian tailoring featuring soft wool layers and structural blazers.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600',
      link: '/products?category=Apparel'
    },
    {
      id: 'LOOK 02',
      title: 'STREET UTILITY',
      description: 'Technical outerwear designed for the urban landscape. Lightweight windbreakers, functional storage vests, and cargo pants.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600',
      link: '/products?category=Apparel'
    },
    {
      id: 'LOOK 03',
      title: 'RETRO MONOCHROME',
      description: 'High-contrast layering utilizing vintage knitwear, premium leather accessories, and sharp geometric sunglasses.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600',
      link: '/products?category=Accessories'
    },
    {
      id: 'LOOK 04',
      title: 'URBAN ELEGANCE',
      description: 'Comfort redefined. Technical tracksuits, heavy knit hoodies, and custom tailored luxury slides.',
      image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=600',
      link: '/products?category=Apparel'
    }
  ];

  return (
    <PageWrapper>
      <div className="lookbook-container">
        <header className="lookbook-header">
          <span className="lookbook-subtitle">FALL / WINTER 2026</span>
          <h1 className="lookbook-title">ATELIER LOOKBOOK</h1>
          <p className="lookbook-intro">
            A visual documentation of contemporary streetwear tailored inside the Gucci Atelier. Exploring the boundaries between high couture and subculture.
          </p>
        </header>

        <div className="looks-list">
          {looks.map((look, index) => (
            <div key={look.id} className={`look-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="look-image-wrapper">
                <img src={look.image} alt={look.title} className="look-image" />
                <span className="look-number-badge">{look.id}</span>
              </div>
              <div className="look-details">
                <span className="look-number">{look.id}</span>
                <h2 className="look-title">{look.title}</h2>
                <p className="look-description">{look.description}</p>
                <Link to={look.link} className="look-shop-link">
                  SHOP THE LOOK
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Lookbook;
