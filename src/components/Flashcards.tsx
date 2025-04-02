import { useState } from 'react';
import { Flashcard } from '../types/quiz';
import '../styles/Flashcards.css';

interface FlashcardsProps {
  flashcards: Flashcard[];
}

const Flashcards = ({ flashcards }: FlashcardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  const handleReverse = () => {
    if (!currentCard.reversed) return;
    setShowAnswer(false);
    setIsReversed(!isReversed);
  };

  const handleFlip = () => {
    setShowAnswer(!showAnswer);
  };

  const currentCard = flashcards[currentIndex];
  
  // Determine content based on reversal and flip states
  let frontContent, backContent;
  
  if (!isReversed) {
    // Normal mode - question on front, answer on back
    frontContent = (
      <div className="card-content">
        <h3>Question:</h3>
        <p>{currentCard.question}</p>
      </div>
    );
    
    backContent = (
      <div className="card-content">
        <h3>Answer:</h3>
        <p>{currentCard.answer}</p>
      </div>
    );
  } else {
    // Reversed mode - answer on front, question on back
    frontContent = (
      <div className="card-content">
        <h3>Answer:</h3>
        <p>{currentCard.answer}</p>
      </div>
    );
    
    backContent = (
      <div className="card-content">
        <h3>Question:</h3>
        <p>{currentCard.question}</p>
      </div>
    );
  }

  // Display content based on showAnswer state
  const displayedContent = showAnswer ? backContent : frontContent;
  const flipHint = showAnswer ? 
    (isReversed ? "Click to see answer" : "Click to see question") :
    (isReversed ? "Click to see question" : "Click to see answer");

  return (
    <div className="flashcards-container">
      <div 
        className="flashcard-card"
        onClick={handleFlip}
        data-testid="flashcard"
      >
        {displayedContent}
        <div className="flip-instruction">
          <span className="icon">↻</span>
          <p>{flipHint}</p>
        </div>
      </div>
      <div className="flashcard-controls">
        <button onClick={handlePrevious}>Previous</button>
        <span>{currentIndex + 1} / {flashcards.length}</span>
        <button onClick={handleNext}>Next</button>
        {currentCard.reversed && (
          <button 
            onClick={handleReverse} 
            className={`reverse-button ${isReversed ? 'reversed' : ''}`}
          >
            {isReversed ? 'Show Question First' : 'Show Answer First'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Flashcards; 