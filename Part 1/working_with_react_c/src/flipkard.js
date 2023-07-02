import React, { useState } from 'react';
import './style.css';

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>Front Side</h3>
        </div>
        <div className="flip-card-back">
          <h3>Back Side</h3>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
