'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import './ProductConfigurator.css';
import { ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function ProductConfigurator() {
  const [metal, setMetal] = useState('18K Yellow Gold');
  const [carat, setCarat] = useState('1.00');
  const [quality, setQuality] = useState('F-G VS');
  const [size, setSize] = useState('14');

  const metals = [
    { name: '18K Yellow Gold', color: '#e4cd8b' },
    { name: '18K White Gold', color: '#e8e8e8' },
    { name: '18K Rose Gold', color: '#dca496' },
    { name: 'Platinum', color: '#e5e4e2' }
  ];

  const carats = ['0.50', '0.75', '1.00', '1.50', '2.00'];
  const qualities = ['F-G VS', 'E VVS', 'D VVS'];
  const sizes = ['12', '13', '14', '15', '16', '17', '18'];

  return (
    <div className="configurator-container">
      <div className="product-header">
        <div className="reviews text-sans">
          <span className="stars">★★★★★</span> (128 Reviews)
        </div>
        <h1 className="product-title">Lab-Grown Solitaire Marquise Diamond Engagement Ring</h1>
        <p className="product-price">₹1,45,000</p>
        <p className="product-tax text-sans">Inclusive of all taxes</p>
      </div>

      <div className="config-section">
        <div className="config-label-group">
          <label className="config-label">Metal:</label>
          <span className="config-value">{metal}</span>
        </div>
        <div className="metal-options">
          {metals.map(m => (
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={m.name} 
              className={`metal-btn ${metal === m.name ? 'active' : ''}`}
              onClick={() => setMetal(m.name)}
              title={m.name}
            >
              <span className="metal-swatch" style={{ backgroundColor: m.color }}></span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="config-section">
        <div className="config-label-group">
          <label className="config-label">Diamond Quality:</label>
          <span className="config-value">{quality}</span>
        </div>
        <div className="carat-options text-sans">
          {qualities.map(q => (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={q} 
              className={`carat-btn ${quality === q ? 'active' : ''}`}
              onClick={() => setQuality(q)}
            >
              {q}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="config-section">
        <div className="config-label-group">
          <label className="config-label">Diamond Carat (Total):</label>
          <span className="config-value">{carat} Carat</span>
        </div>
        <div className="carat-options text-sans">
          {carats.map(c => (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={c} 
              className={`carat-btn ${carat === c ? 'active' : ''}`}
              onClick={() => setCarat(c)}
            >
              {c}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="config-section">
        <div className="config-label-group">
          <label className="config-label">Ring Size:</label>
          <span className="config-value">{size}</span>
        </div>
        <div className="carat-options text-sans">
          {sizes.map(s => (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={s} 
              className={`carat-btn ${size === s ? 'active' : ''}`}
              onClick={() => setSize(s)}
            >
              {s}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="action-section">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-accent w-full add-to-cart"
        >
          Add to Cart
        </motion.button>
      </div>

      <div className="trust-signals text-sans">
        <div className="trust-item">
          <Truck size={18} />
          <span>Free Insured Shipping</span>
        </div>
        <div className="trust-item">
          <RefreshCw size={18} />
          <span>30-Day Returns</span>
        </div>
        <div className="trust-item">
          <ShieldCheck size={18} />
          <span>Lifetime Warranty</span>
        </div>
      </div>
    </div>
  );
}
