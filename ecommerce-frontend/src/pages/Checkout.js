import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import './Checkout.css';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageWrapper from '../components/PageWrapper';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { placeOrder } = useOrder();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  
  // Shipping details state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (!fullName || !email || !address || !city) {
      toast.error('Please complete all shipping details.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const id = Math.floor(100000 + Math.random() * 900000);
      setOrderId(id);
      placeOrder(cartItems, totalAmount, id, paymentMethod);
      clearCart();
      setIsOrderPlaced(true);
      setLoading(false);
      toast.success('Order placed successfully!');
    }, 1500);
  };

  if (isOrderPlaced) {
    return (
      <PageWrapper>
        <div className="order-confirmation-wrapper">
          <div className="order-confirmation-box order-confirmation">
            <h2>✅ Order Confirmed</h2>
            <p className="confirmation-thankyou">Thank you for shopping at Gucci Atelier.</p>
            <div className="confirmation-details">
              <p className="order-number">Order Number: <span>#{orderId}</span></p>
              <p className="order-email-alert">A confirmation email has been sent to <strong>{email}</strong>.</p>
            </div>
            <button className="back-btn" onClick={() => navigate('/')}>Back to Shop</button>
          </div>
        </div>
      </PageWrapper>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <PageWrapper>
        <div className="checkout-empty">
          <h2>No items in cart to checkout</h2>
          <Link to="/products">
            <button className="explore-btn">Go to Collections</button>
          </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="checkout-container">
        <h2 className="checkout-title">Secure Checkout</h2>
        
        <div className="checkout-grid">
          {/* Left Column: Shipping & Payment Form */}
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <div className="form-section">
              <h3>Shipping Information</h3>
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Guccio Gucci"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="guccio@gucci.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Delivery Address</label>
                <input
                  type="text"
                  placeholder="Via de' Tornabuoni, 73r"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>City / Country</label>
                <input
                  type="text"
                  placeholder="Florence, Italy"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Payment Method</h3>
              <div className="payment-method-selector">
                <label htmlFor="payment-method">Select Option</label>
                <select
                  id="payment-method"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Apple Pay">Apple Pay</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>
            </div>

            <button type="submit" className="place-order-btn" disabled={loading}>
              {loading ? 'Processing Order...' : 'Place Secure Order'}
            </button>
          </form>

          {/* Right Column: Order Summary */}
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} className="summary-item-img" />
                  <div className="summary-item-details">
                    <span className="summary-item-name">{item.name}</span>
                    <span className="summary-item-price">${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="summary-totals">
              <div className="total-row">
                <span>Shipping</span>
                <span className="shipping-free">Complimentary</span>
              </div>
              <div className="total-row grand-total">
                <span>Grand Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </div>
    </PageWrapper>
  );
}

export default Checkout;


