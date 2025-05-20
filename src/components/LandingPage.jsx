import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Love App</h1>
      <button onClick={() => navigate('/game')}>Start Game</button>
    </div>
  );
};

export default LandingPage;
