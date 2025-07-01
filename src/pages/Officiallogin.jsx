import React, { useState } from 'react';
import officiallogin from '/src/pages/officiallogin.css';

const LoginForm = () => {
  const [captcha, setCaptcha] = useState('le1GK9');

  const handleRefresh = () => {
    // Simulate a refresh; ideally, this would come from backend
    const newCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(newCaptcha);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Official Login</h2>
      <div className="login-box">
        <div className="input-group">
          <span className="icon">👤</span>
          <input type="text" placeholder="Enter Username" />
        </div>
        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="captcha-section">
          <div className="captcha-image">{captcha}</div>
          <button className="refresh-button" onClick={handleRefresh}>↻ Refresh</button>
        </div>
        <input type="text" className="captcha-input" placeholder="Enter Captcha Code" />
        <button className="login-button">LOGIN</button>
        <p className="forgot-password">
          Forgot Password? <a href="#">Click Here to Reset</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
