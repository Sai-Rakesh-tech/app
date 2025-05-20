import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GamePage.css';

const GamePage = () => {
  const navigate = useNavigate();

  // Define the images and captions directly in the component
  const mediaItems = [
    { image: '/media/image1.jpg', caption: 'This is our first memory ❤️' },
    { image: '/media/image2.jpg', caption: 'You are my sunshine 🌞' },
    { image: '/media/image3.jpg', caption: 'Our favorite moment together 💖' },
    // { image: '/media/image4.jpg', caption: 'Laughing through life 😂' },
    // { image: '/media/image5.jpg', caption: 'A day to remember 🌅' },
    // Add more items as needed...
  ];

  // Randomly select an image and its caption
  const randomIndex = Math.floor(Math.random() * mediaItems.length);
  const { image, caption } = mediaItems[randomIndex];

  return (
    <div className="game-container">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + image} alt="Random memory" />
        <p>{caption}</p> {/* Display the caption */}
      </div>
      <button onClick={() => navigate('/unlock')}>Next</button>
    </div>
  );
};

export default GamePage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/GamePage.css';

// const mediaItems = Array.from({ length: 3 }, (_, i) => ({
//   image: `/media/image${i + 1}.jpg`,
//   caption: `This is image ${i + 1}`
// }));

// const GamePage = () => {
//   const [shown, setShown] = useState([]);
//   const navigate = useNavigate();

//   const showRandom = () => {
//     if (shown.length === 3) return;

//     let remaining = mediaItems.filter((_, i) => !shown.includes(i));
//     let index = mediaItems.indexOf(remaining[Math.floor(Math.random() * remaining.length)]);
//     setShown([...shown, index]);

//     if (shown.length + 1 === 3) {
//       setTimeout(() => navigate('/puzzle'), 1500);
//     }
//   };

//   const currentIndex = shown[shown.length - 1];
//   const currentItem = mediaItems[currentIndex];

//   return (
//     <div className="game-container">
//       <h2>Tap the button to see something!</h2>
//       {currentItem && (
//         <>
//           <img src={currentItem.image} alt="memory" className="responsive-image" />
//           <p>{currentItem.caption}</p>
//         </>
//       )}
//       <button onClick={showRandom}>Show Me!</button>
//     </div>
//   );
// };

// export default GamePage;

