// src/pages/OrderHistory.js
import React from 'react';
import { useOrder } from '../context/OrderContext';
import './OrderHistory.css';
import PageWrapper from '../components/PageWrapper';

function OrderHistory() {
  const { orderHistory, clearHistory } = useOrder();

  return (
    <PageWrapper>
      <div className="order-history-container">
        <h2 className="order-history-title">Your Order History</h2>

        {orderHistory.length === 0 ? (
          <div className="no-orders-box">
            <p className="no-orders">No orders placed yet.</p>
          </div>
        ) : (
          <div className="orders-list">
            {orderHistory.map((order, index) => (
              <div key={index} className="order-card">
                <div className="order-card-header">
                  <h3>Order #{order.id}</h3>
                  <span className="order-date">{new Date(order.date).toLocaleString()}</span>
                </div>
                <div className="order-card-body">
                  <div className="order-items-list">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="order-item-row">
                        <img src={item.image} alt={item.name} className="order-item-thumb" />
                        <span className="order-item-name">{item.name}</span>
                        <span className="order-item-price">${item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="order-card-footer">
                    <p className="order-payment"><strong>Method:</strong> {order.paymentMethod}</p>
                    <p className="order-total"><strong>Total:</strong> <span>${order.total.toFixed(2)}</span></p>
                  </div>
                </div>
              </div>
            ))}
            <button className="clear-history-btn" onClick={clearHistory}>
              Clear Order History
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default OrderHistory;
