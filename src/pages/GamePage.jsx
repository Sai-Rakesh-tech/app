import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GamePage.css';

const mediaItems = Array.from({ length: 25 }, (_, i) => ({
  image: `/picture/image${i + 1}.jpg`,
  caption: `Every moment with you has been a beautiful chapter, and I can’t wait to spend forever writing our story together`
}));

const GamePage = () => {
  const [shown, setShown] = useState([]);
  const navigate = useNavigate();

  const showRandom = () => {
    if (shown.length === 25) return;

    let remaining = mediaItems.filter((_, i) => !shown.includes(i));
    let index = mediaItems.indexOf(remaining[Math.floor(Math.random() * remaining.length)]);
    setShown([...shown, index]);

    if (shown.length + 1 === 25) {
      setTimeout(() => navigate('/puzzle'), 1500);
    }
  };

  const currentIndex = shown[shown.length - 1];
  const currentItem = mediaItems[currentIndex];

  return (
    <div className="game-container">
      <h2>Tap the button to explore our beautiful moments!</h2>
      {currentItem && (
        <>
          <img src={currentItem.image} alt="memory" className="responsive-image" />
          <p>{currentItem.caption}</p>
        </>
      )}
      <button onClick={showRandom}>Our Memories</button>
    </div>
  );
};

export default GamePage;

