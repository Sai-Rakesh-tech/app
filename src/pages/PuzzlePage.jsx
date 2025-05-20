import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PuzzlePage.css';

const puzzles = [
  { question: "Do you remember the first time we met outside? Can you tell me the exact place you realized I was someone special?", answer: "johnson" },
  { question: "What is rakesh favorite chocolate ?", answer: "darkchocolate" },
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
      <h2>Solve this puzzle to see an amazing ending ❤️</h2>
      <p>{puzzle.question}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Your answer" />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PuzzlePage;

