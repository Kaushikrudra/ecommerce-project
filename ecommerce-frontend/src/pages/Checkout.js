import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageWrapper from '../components/PageWrapper';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { placeOrder } = useOrder();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('PayPal'); // ✅ Payment method state
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price;
  }, 0);

  const handlePlaceOrder = () => {
    setLoading(true);
    setTimeout(() => {
      const id = Math.floor(100000 + Math.random() * 900000);
      setOrderId(id);
      placeOrder(cartItems, totalAmount, id, paymentMethod); // ✅ Pass payment method
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
            <h2>✅ Order Confirmed!</h2>
            <p>Your order has been placed successfully.</p>
            <p className="order-number">Order Number: #{orderId}</p>
            <button onClick={() => navigate('/')}>Back to Shop</button>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="checkout-container">
        <h2>Checkout</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="50" /> {item.name} — {item.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>

        {/* ✅ Payment method selection */}
        <div className="payment-method">
          <label htmlFor="payment-method">Choose Payment Method:</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="PayPal">PayPal</option>
            <option value="FedEx">FedEx</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>

        <button onClick={handlePlaceOrder} disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </PageWrapper>
  );
}

export default Checkout;

