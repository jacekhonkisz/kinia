import React, { useState } from 'react';
import { Flashcard } from '../types/quiz';

interface FlashcardsProps {
  flashcards: Flashcard[];
}

const Flashcards: React.FC<FlashcardsProps> = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsReversed(false);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setIsReversed(false);
  };

  const handleReverse = () => {
    if (currentCard.reversed) {
      setIsReversed(!isReversed);
      setIsFlipped(false);
    }
  };

  const currentCard = flashcards[currentIndex];
  const frontContent = isReversed ? currentCard.answer : currentCard.question;
  const backContent = isReversed ? currentCard.question : currentCard.answer;
  const frontLabel = isReversed ? "Answer:" : "Question:";
  const backLabel = isReversed ? "Question:" : "Answer:";

  return (
    <div className="flashcards-container">
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <h3>{frontLabel}</h3>
            <p>{frontContent}</p>
            <div className="flip-instruction">
              <span className="icon">↻</span>
              <p>Click card to see {isReversed ? 'question' : 'answer'}</p>
            </div>
          </div>
          <div className="flashcard-back">
            <h3>{backLabel}</h3>
            <p>{backContent}</p>
          </div>
        </div>
      </div>
      <div className="flashcard-controls">
        <button onClick={handlePrevious}>Previous</button>
        <span>{currentIndex + 1} / {flashcards.length}</span>
        <button onClick={handleNext}>Next</button>
        {currentCard.reversed && (
          <button onClick={handleReverse}>
            {isReversed ? 'Show Question First' : 'Show Answer First'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Flashcards; 