import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import PageWrapper from '../components/PageWrapper';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <PageWrapper>
      {(!cartItems || cartItems.length === 0) ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🛒</h2>
          <Link to="/products">
            <button className="back-to-shop-btn">Back to Shop</button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}

export default Cart;
