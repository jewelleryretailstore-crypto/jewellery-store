'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductGallery.css';

export default function ProductGallery() {
  const [activeTab, setActiveTab] = useState<'product' | 'hand'>('product');
  const [skinTone, setSkinTone] = useState(50); // 0 (Light) to 100 (Dark)

  // Calculate overlay opacity based on skin tone slider (0 to 100)
  // We use a warm brown/tan color and increase opacity for darker tones
  const overlayOpacity = skinTone / 100;

  return (
    <div className="gallery-container">
      <div className="gallery-tabs">
        <button 
          className={`tab-btn ${activeTab === 'product' ? 'active' : ''}`}
          onClick={() => setActiveTab('product')}
        >
          Product View
        </button>
        <button 
          className={`tab-btn ${activeTab === 'hand' ? 'active' : ''}`}
          onClick={() => setActiveTab('hand')}
        >
          Try on Hand
        </button>
      </div>

      <div className="image-display-area">
        <AnimatePresence mode="wait">
          {activeTab === 'product' ? (
            <motion.div 
              key="product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="product-view"
            >
              {/* Product Placeholder Image */}
              <img 
                src="/images/ring.svg" 
                alt="Marquise Diamond Gold Engagement Ring" 
                className="main-product-img"
              />
            </motion.div>
          ) : (
            <motion.div 
              key="hand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="hand-view"
            >
              <div className="hand-image-wrapper">
                {/* Base Hand Image (Light Skin) */}
                <img 
                  src="/images/hand.svg" 
                  alt="Hand wearing ring" 
                  className="base-hand-img"
                />
                
                {/* Skin Tone Overlay Effect (Multiply blend mode) */}
                <div 
                  className="skin-tone-overlay" 
                  style={{ 
                    backgroundColor: '#5c3a21',
                    opacity: overlayOpacity * 0.7 // Max 70% opacity for realism
                  }}
                ></div>

                {/* Ring Overlay (Transparent PNG simulated) */}
                <img 
                  src="/images/ring.svg"
                  alt="Ring overlay"
                  className="ring-overlay"
                />

                {/* Vertical Skin Tone Slider (Angara Style) */}
                <div className="vertical-slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={skinTone} 
                    onChange={(e) => setSkinTone(Number(e.target.value))}
                    className="vertical-slider"
                    aria-label="Adjust skin tone"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="thumbnail-list">
        <div className="thumb active"><img src="/images/ring.svg" alt="thumb1" /></div>
        <div className="thumb"><img src="/images/ring2.svg" alt="thumb2" /></div>
        <div className="thumb"><img src="/images/hand.svg" alt="thumb3" /></div>
      </div>
    </div>
  );
}
