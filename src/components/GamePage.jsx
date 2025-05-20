import React, { useState, useEffect } from 'react';
import mediaItems from '../data/mediaItems';

const getRandomItem = (usedIds) => {
  const remaining = mediaItems.filter(item => !usedIds.includes(item.id));
  return remaining[Math.floor(Math.random() * remaining.length)];
};

const GamePage = () => {
  const [seenItems, setSeenItems] = useState(() =>
    JSON.parse(localStorage.getItem('seenItems')) || []
  );
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    if (seenItems.length === 25) {
      window.location.href = '/puzzle';
    }
  }, [seenItems]);

  const handleClick = () => {
    const item = getRandomItem(seenItems);
    if (!item) return;
    setCurrentItem(item);
    if (!seenItems.includes(item.id)) {
      const updated = [...seenItems, item.id];
      setSeenItems(updated);
      localStorage.setItem('seenItems', JSON.stringify(updated));
    }
  };

  return (
    <div>
      <h2>Game Page</h2>
      {currentItem && (
        <div>
          <img src={currentItem.image} alt="random item" />
          <p>{currentItem.caption}</p>
        </div>
      )}
      <button onClick={handleClick}>Reveal Another</button>
      <p>{seenItems.length}/25 unlocked</p>
    </div>
  );
};

export default GamePage;
