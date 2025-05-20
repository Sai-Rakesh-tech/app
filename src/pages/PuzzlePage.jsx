import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PuzzlePage.css';

const puzzles = [
  { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo" },
  { question: "What has keys but can't open locks?", answer: "piano" },
  { question: "What gets wetter the more it dries?", answer: "towel" },
];

const PuzzlePage = () => {
  const [puzzle, setPuzzle] = useState(null);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    setPuzzle(randomPuzzle);
  }, []);

  const handleSubmit = () => {
    if (input.trim().toLowerCase() === puzzle.answer) {
      navigate('/unlock');
    } else {
      setError('Try again, love 💔');
    }
  };

  if (!puzzle) return <div>Loading...</div>;

  return (
    <div className="puzzle-container">
      <h2>Solve this puzzle ❤️</h2>
      <p>{puzzle.question}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Your answer" />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PuzzlePage;

