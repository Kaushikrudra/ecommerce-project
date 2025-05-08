const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/Order');

// Create an order
router.post('/', async (req, res) => {
  try {
    const formattedProducts = req.body.products.map(p => ({
      productId: new mongoose.Types.ObjectId(p.productId),
      quantity: p.quantity
    }));

    const newOrder = new Order({
      user: req.body.user,
      products: formattedProducts,
      totalAmount: req.body.totalAmount,
      status: req.body.status
    });

    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    console.error('Order creation error:', err.message);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('products.productId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
