import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="landing-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/media/background.jpg)`,
        backgroundSize: 'contain',  // Change from 'cover' to 'contain'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Prevent repeating the background image
        height: '100vh'
      }}
    >
      <div className="overlay">
        <div className="landing-content">
          <h1>Happy Birthday my Love</h1>
          <button onClick={() => navigate('/game')}>Let's Begin</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
