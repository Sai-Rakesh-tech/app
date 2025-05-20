import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PuzzlePage = () => {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const correctAnswer = 'love2025'; // Change this

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === correctAnswer) {
      localStorage.setItem('passwordUnlocked', 'true');
      navigate('/unlock');
    } else {
      alert('Try again!');
    }
  };

  return (
    <div>
      <h2>Solve this: What year did we meet + your nickname for me?</h2>
      <input value={answer} onChange={e => setAnswer(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PuzzlePage;
