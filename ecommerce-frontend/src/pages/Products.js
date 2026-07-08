// src/pages/Products.js
import React from 'react';
import './Products.css';
import { useCart } from '../context/CartContext';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageWrapper from '../components/PageWrapper';

function Products() {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';

  const products = [
    {
      id: 1,
      name: 'COOL SNEAKERS',
      price: 5200,
      image: 'https://i.pinimg.com/736x/0d/9a/90/0d9a9006bad7838e760e4e825bdfd609.jpg',
      category: 'Apparel',
    },
    {
      id: 2,
      name: 'SMART WATCH',
      price: 3000,
      image: 'https://i.pinimg.com/736x/ee/1b/55/ee1b5530769616c8c909b8ee213d6423.jpg',
      category: 'Accessories',
    },
    {
      id: 3,
      name: 'STYLISH BACKPACK',
      price: 3256,
      image: 'https://i.pinimg.com/736x/29/c4/9b/29c49bd5ff71434e16545dd8f1dbd515.jpg',
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'GUCCI PERFUME',
      price: 1500,
      image: 'https://i.pinimg.com/736x/31/dc/98/31dc98b8c173d1a0e4d00b15c2adb7e8.jpg',
      category: 'Accessories',
    },
    {
      id: 5,
      name: 'GUCCI T-SHIRT',
      price: 2400,
      image: 'https://i.pinimg.com/736x/44/7f/fd/447ffdb3764794f69996b0d6752399f8.jpg',
      category: 'Apparel',
    },
    {
      id: 6,
      name: 'GUCCI CAP',
      price: 750,
      image: 'https://i.pinimg.com/736x/4c/6b/22/4c6b2262007b68ec85a61913eb5e7a3f.jpg',
      category: 'Apparel',
    },
    {
      id: 7,
      name: 'GUCCI WALLET',
      price: 640,
      image: 'https://i.pinimg.com/736x/e0/c3/9b/e0c39b542419a4bca5e939c97fbbfe03.jpg',
      category: 'Accessories',
    },
    {
      id: 8,
      name: 'GUCCI TRACKSUITS',
      price: 5570,
      image: 'https://i.pinimg.com/736x/21/86/5d/21865d0c7dad176ab7d49340d174b7a5.jpg',
      category: 'Apparel',
    },
    {
      id: 9,
      name: 'GUCCI SHORTS',
      price: 2100,
      image: 'https://i.pinimg.com/736x/a3/72/c4/a372c47ff361cf6dbefd5a33ca9d0e80.jpg',
      category: 'Apparel',
    },
    {
      id: 10,
      name: 'GUCCI SLIDES',
      price: 1100,
      image: 'https://i.pinimg.com/736x/65/b3/52/65b35249a3a0749ae75635b8d3bd412c.jpg',
      category: 'Apparel',
    },
    {
      id: 11,
      name: 'GUCCI BED SET',
      price: 2200,
      image: 'https://i.pinimg.com/736x/bc/17/53/bc175338169c6b2d568cea8dc8125cc9.jpg',
      category: 'Home',
    },
    {
      id: 12,
      name: 'GUCCI DESIGNER CARPET',
      price: 1370,
      image: 'https://i.pinimg.com/736x/31/c8/a8/31c8a8425d03b7864a0dee09a84aa208.jpg',
      category: 'Home',
    },
    {
      id: 13,
      name: 'GUCCI SUNGLASSES',
      price: 1015,
      image: 'https://i.pinimg.com/736x/1c/2a/11/1c2a11082e9f4eb20020bf466a589a2c.jpg',
      category: 'Accessories',
    }
  ];

  const categoriesList = ['All', 'Apparel', 'Accessories', 'Home'];

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handleCategorySelect = (category) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <PageWrapper>
      <div className="shop-page-wrapper">
        {/* Category filter tabs */}
        <div className="category-tabs">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-container">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </PageWrapper>
  );
}

export default Products;

