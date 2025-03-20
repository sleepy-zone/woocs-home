import React from 'react';
import './index.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="gradient-text">woocs</span>
          </h1>
          <p>基于 doocs/md 开发的微信 Markdown 编辑器桌面应用。</p>
          <div className="hero-buttons">
            <button className="primary-button">下 载</button>
            <button className="secondary-button">Github</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image glass-effect">
            <img src="https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAeEyU14WC5WqH.png" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
