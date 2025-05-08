// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import OrderHistory from './pages/OrderHistory';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <OrderProvider>
      <CartProvider>
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </AnimatePresence>
      </CartProvider>
    </OrderProvider>
  );
}

export default App;
