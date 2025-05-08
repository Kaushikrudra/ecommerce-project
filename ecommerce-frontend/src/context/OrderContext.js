// src/context/OrderContext.js
import React, { createContext, useContext, useState, } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState(() => {
    const stored = localStorage.getItem('orderHistory');
    return stored ? JSON.parse(stored) : [];
  });

  const placeOrder = (items, total, id, paymentMethod = 'PayPal') => {
    const newOrder = {
      id,
      date: new Date().toISOString(),
      items,
      total,
      paymentMethod,
    };

    const updatedHistory = [...orderHistory, newOrder];
    setOrderHistory(updatedHistory);
    localStorage.setItem('orderHistory', JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setOrderHistory([]);
    localStorage.removeItem('orderHistory');
  };

  return (
    <OrderContext.Provider value={{ orderHistory, placeOrder, clearHistory }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);

