// src/components/PageWrapper.js
import React from 'react';
import { motion } from 'framer-motion';
import './PageWrapper.css';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      className="page-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
