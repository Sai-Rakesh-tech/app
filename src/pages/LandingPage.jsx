import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Love App</h1>
        <button onClick={() => navigate('/game')}>Start</button>
      </div>
    </div>
  );
};

export default LandingPage;

