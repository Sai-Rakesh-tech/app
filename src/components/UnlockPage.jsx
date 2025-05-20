import React, { useEffect } from 'react';

const UnlockPage = () => {
  useEffect(() => {
    const unlocked = localStorage.getItem('passwordUnlocked');
    if (unlocked !== 'true') {
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <h2>🎁 Here's your surprise!</h2>
      <a href="/media/montage.zip" download>
        <button>Download Gift</button>
      </a>
      <img src="/media/final_drawing.jpg" alt="Final Drawing" />
    </div>
  );
};

export default UnlockPage;
