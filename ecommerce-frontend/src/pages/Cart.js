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
          <h2 className="cart-title">Shopping Cart</h2>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3 className="cart-total-label">Total: <span className="cart-total-amount">${cartItems.reduce((sum, item) => sum + item.price, 0)}</span></h3>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

export default Cart;
