// src/components/PageWrapper.js
import React from 'react';
import { motion } from 'framer-motion';
import './PageWrapper.css';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      className="page-background dark-geometric-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="page-content-wrapper">
        {children}
      </div>
    </motion.div>
  );
};

export default PageWrapper;
