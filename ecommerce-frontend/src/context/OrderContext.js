// src/context/OrderContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const OrderContext = createContext();

// Custom hook (must be used inside provider)
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

// Provider
export const OrderProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('orderHistory');
    if (stored) {
      setOrderHistory(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage when orderHistory changes
  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }, [orderHistory]);

  const placeOrder = (items, total, id, paymentMethod = 'PayPal') => {
    const newOrder = {
      id,
      date: new Date().toISOString(),
      items,
      total,
      paymentMethod,
    };
    setOrderHistory((prev) => [...prev, newOrder]);
  };

  const clearHistory = () => {
    setOrderHistory([]);
  };

  return (
    <OrderContext.Provider value={{ orderHistory, placeOrder, clearHistory }}>
      {children}
    </OrderContext.Provider>
  );
};
