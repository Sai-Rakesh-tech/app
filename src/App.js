import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import PuzzlePage from './pages/PuzzlePage';
import UnlockPage from './pages/UnlockPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route path="/unlock" element={<UnlockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
