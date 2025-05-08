// src/pages/OrderHistory.js
import React from 'react';
import { useOrder } from '../context/OrderContext';
import './OrderHistory.css';
import { motion } from 'framer-motion';

function OrderHistory() {
  const { orderHistory, clearHistory } = useOrder();

  return (
    <motion.div
      className="order-history-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Your Order History</h2>

      {orderHistory.length === 0 ? (
        <p className="no-orders">No orders placed yet.</p>
      ) : (
        <>
          {orderHistory.map((order, index) => (
            <div key={index} className="order-card">
              <h3>Order #{order.id}</h3>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
              <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name} — {item.price}</li>
                ))}
              </ul>
            </div>
          ))}
          <button className="clear-history-btn" onClick={clearHistory}>
            Clear Order History
          </button>
        </>
      )}
    </motion.div>
  );
}

export default OrderHistory;
