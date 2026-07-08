// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';
import PageWrapper from '../components/PageWrapper';

function Home() {
  const { addToCart } = useCart();

  // 3 Category Cards
  const categories = [
    { name: 'Apparel', query: 'Apparel', image: 'https://i.pinimg.com/736x/21/86/5d/21865d0c7dad176ab7d49340d174b7a5.jpg' },
    { name: 'Accessories', query: 'Accessories', image: 'https://i.pinimg.com/736x/31/dc/98/31dc98b8c173d1a0e4d00b15c2adb7e8.jpg' },
    { name: 'Home Decor', query: 'Home', image: 'https://i.pinimg.com/736x/bc/17/53/bc175338169c6b2d568cea8dc8125cc9.jpg' },
  ];

  // 6 Trending Dummy Products (Gucci Originals)
  const trendingProducts = [
    {
      id: 1,
      name: 'COOL SNEAKERS',
      price: 5200,
      image: 'https://i.pinimg.com/736x/0d/9a/90/0d9a9006bad7838e760e4e825bdfd609.jpg',
    },
    {
      id: 2,
      name: 'SMART WATCH',
      price: 3000,
      image: 'https://i.pinimg.com/736x/ee/1b/55/ee1b5530769616c8c909b8ee213d6423.jpg',
    },
    {
      id: 4,
      name: 'GUCCI PERFUME',
      price: 1500,
      image: 'https://i.pinimg.com/736x/31/dc/98/31dc98b8c173d1a0e4d00b15c2adb7e8.jpg',
    },
    {
      id: 6,
      name: 'GUCCI CAP',
      price: 750,
      image: 'https://i.pinimg.com/736x/4c/6b/22/4c6b2262007b68ec85a61913eb5e7a3f.jpg',
    },
    {
      id: 7,
      name: 'GUCCI WALLET',
      price: 640,
      image: 'https://i.pinimg.com/736x/e0/c3/9b/e0c39b542419a4bca5e939c97fbbfe03.jpg',
    },
    {
      id: 13,
      name: 'GUCCI SUNGLASSES',
      price: 1015,
      image: 'https://i.pinimg.com/736x/1c/2a/11/1c2a11082e9f4eb20020bf466a589a2c.jpg',
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <PageWrapper>
      <div className="home-sections-wrapper">
        {/* A. Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-heading">
              THRIFTED.<br />CURATED.
            </h1>
            <p className="hero-sub">PREMIUM VINTAGE & STREETWEAR CULTURE. SELECTED INDIVIDUALLY FOR THE BOLD.</p>
            <Link to="/products">
              <button className="hero-cta-btn">SHOP NOW</button>
            </Link>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800" 
              alt="Streetwear Culture Banner" 
              className="hero-image"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </section>

        {/* B. USP Strip */}
        <section className="usp-strip">
          <div className="usp-item">
            <span className="usp-icon">🚚</span>
            <div className="usp-text">
              <h4>Free Shipping</h4>
              <p>On all orders above ₹1499</p>
            </div>
          </div>
          <div className="usp-item">
            <span className="usp-icon">⭐</span>
            <div className="usp-text">
              <h4>Premium Quality</h4>
              <p>100% handpicked pieces</p>
            </div>
          </div>
          <div className="usp-item">
            <span className="usp-icon">🔄</span>
            <div className="usp-text">
              <h4>Easy Returns</h4>
              <p>7-day returns guarantee</p>
            </div>
          </div>
          <div className="usp-item">
            <span className="usp-icon">⚡</span>
            <div className="usp-text">
              <h4>24/7 Support</h4>
              <p>Direct WhatsApp contact</p>
            </div>
          </div>
        </section>

        {/* C. Shop By Category Section */}
        <section className="home-section category-section">
          <h2 className="section-title">Shop By Category</h2>
          <div className="category-grid">
            {categories.map((cat, idx) => (
              <Link to={`/products?category=${cat.query}`} key={idx} className="category-card">
                <div className="category-image-wrapper">
                  <img src={cat.image} alt={cat.name} className="category-image" />
                  <div className="category-overlay">
                    <span className="category-name">{cat.name}</span>
                    <span className="category-link">SHOP NOW</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* D. Trending Now Section */}
        <section className="home-section trending-section">
          <h2 className="section-title">Trending Now</h2>
          <div className="trending-grid">
            {trendingProducts.map((product) => (
              <div key={product.id} className="trending-card">
                <div className="trending-image-wrapper">
                  <img src={product.image} alt={product.name} className="trending-image" />
                </div>
                <div className="trending-details">
                  <h3 className="trending-name">{product.name}</h3>
                  <span className="trending-price">${product.price}</span>
                  <button 
                    className="trending-add-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* E. Promo Banners Row */}
        <section className="promo-section">
          <div className="promo-card">
            <div className="promo-info">
              <h3>NEW DROPS / EVERY WEEK</h3>
              <p>Explore freshest streetwear designs before they sell out.</p>
              <Link to="/products">
                <button className="promo-btn">EXPLORE</button>
              </Link>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-info">
              <h3>PREMIUM THRIFT / HANDPICKED</h3>
              <p>Carefully washed and selected high grade premium denim and knits.</p>
              <Link to="/products">
                <button className="promo-btn">EXPLORE</button>
              </Link>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-info">
              <h3>UP TO 50% OFF / SALE ITEMS</h3>
              <p>Limited period stock clearance. Cop the fit at half price.</p>
              <Link to="/products">
                <button className="promo-btn">SHOP SALE</button>
              </Link>
            </div>
          </div>
        </section>

        {/* F. Instagram Strip */}
        <section className="instagram-section">
          <h2 className="insta-title">FOLLOW US ON INSTAGRAM @GUCCI</h2>
          <div className="insta-scroll">
            <div className="insta-item">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300" alt="Instagram Post" />
            </div>
            <div className="insta-item">
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=300" alt="Instagram Post" />
            </div>
            <div className="insta-item">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=300" alt="Instagram Post" />
            </div>
            <div className="insta-item">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300" alt="Instagram Post" />
            </div>
            <div className="insta-item">
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300" alt="Instagram Post" />
            </div>
            <div className="insta-item">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300" alt="Instagram Post" />
            </div>
          </div>
        </section>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </PageWrapper>
  );
}

export default Home;
