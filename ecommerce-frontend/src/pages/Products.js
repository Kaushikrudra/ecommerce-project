// src/pages/Products.js
import React from 'react';
import './Products.css';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper'; // ✅ Import PageWrapper

function Products() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Cool Sneakers',
      price: '$5200',
      image: 'https://i.pinimg.com/736x/0d/9a/90/0d9a9006bad7838e760e4e825bdfd609.jpg',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$3000',
      image: 'https://i.pinimg.com/736x/ee/1b/55/ee1b5530769616c8c909b8ee213d6423.jpg',
    },
    {
      id: 3,
      name: 'Stylish Backpack',
      price: '$3256',
      image: 'https://i.pinimg.com/736x/29/c4/9b/29c49bd5ff71434e16545dd8f1dbd515.jpg',
    },
    {
      id: 4,
      name: 'Gucci Perfume',
      price: '$1500',
      image: 'https://i.pinimg.com/736x/31/dc/98/31dc98b8c173d1a0e4d00b15c2adb7e8.jpg',
    },
    {
      id: 5,
      name: 'Gucci T-Shirt',
      price: '$2400',
      image: 'https://i.pinimg.com/736x/44/7f/fd/447ffdb3764794f69996b0d6752399f8.jpg',
    },
    {
      id: 6,
      name: 'Gucci Cap',
      price: '$750',
      image: 'https://i.pinimg.com/736x/4c/6b/22/4c6b2262007b68ec85a61913eb5e7a3f.jpg',
    },
    {
      id: 7,
      name: 'Gucci Wallet',
      price: '$640',
      image: 'https://i.pinimg.com/736x/e0/c3/9b/e0c39b542419a4bca5e939c97fbbfe03.jpg',
    },
    {
      id: 8,
      name: 'Gucci Tracksuits',
      price: '$5570',
      image: 'https://i.pinimg.com/736x/21/86/5d/21865d0c7dad176ab7d49340d174b7a5.jpg',
    },
    {
      id: 9,
      name: 'Gucci Shorts',
      price: '$2100',
      image: 'https://i.pinimg.com/736x/a3/72/c4/a372c47ff361cf6dbefd5a33ca9d0e80.jpg',
    },
    {
      id: 10,
      name: 'Gucci Slides',
      price: '$1100',
      image: 'https://i.pinimg.com/736x/65/b3/52/65b35249a3a0749ae75635b8d3bd412c.jpg',
    },
    {
      id: 11,
      name: "Gucci Bed Set",
      price: "$2200.",
      image: "https://i.pinimg.com/736x/bc/17/53/bc175338169c6b2d568cea8dc8125cc9.jpg",
    },
    {
      id: 12,
      name: "Gucci Designer Carpet",
      price: "$1370.",
      image: "https://i.pinimg.com/736x/31/c8/a8/31c8a8425d03b7864a0dee09a84aa208.jpg",
    },
    {
      id: 13,
      name: "Gucci Sunglasses",
      price: "$1015.",
      image: "https://i.pinimg.com/736x/1c/2a/11/1c2a11082e9f4eb20020bf466a589a2c.jpg",
    }
  ];
 

  return (
    <PageWrapper>
      <div className="products-container">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="product-card"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <button
              className="add-to-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Products;

