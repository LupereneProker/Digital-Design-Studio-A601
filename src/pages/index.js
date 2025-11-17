import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './hero.css'; // 引入我们待会创建的 hero CSS

export default function Home() {
  return (
    <Layout>
      <div className="hero-container">

        {/* ======= 科技线条背景 ======= */}
        <div className="lines-background">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* ======= 内容区 ======= */}
        <div className="hero-content fade-in">
          <h1 className="hero-title">Fictional Engineering Lab A601</h1>
          <p className="hero-subtitle">
            Mechatronics · Digital Design · Human-Centered Engineering
          </p>

          <Link className="hero-button" to="/projects">
            Explore Projects →
          </Link>
        </div>

      </div>
    </Layout>
  );
}
