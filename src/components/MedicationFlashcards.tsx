import { useState } from 'react';
import { MedicationCard } from '../types/quiz';
import '../styles/MedicationFlashcards.css';

interface MedicationFlashcardsProps {
  medications: MedicationCard[];
}

const MedicationFlashcards = ({ medications }: MedicationFlashcardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  
  const handleNext = () => {
    setShowDetails(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % medications.length);
  };

  const handlePrevious = () => {
    setShowDetails(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + medications.length) % medications.length);
  };

  const handleReverse = () => {
    setShowDetails(false);
    setIsReversed(!isReversed);
  };

  const handleFlip = () => {
    setShowDetails(!showDetails);
  };

  const currentMedication = medications[currentIndex];
  
  // Determine which content to show based on both reversal and flip state
  let frontContent, backContent;
  
  if (!isReversed) {
    // Normal mode - name on front, details on back
    frontContent = (
      <div className="card-content">
        <h3>Lek:</h3>
        <p className="medication-name">{currentMedication.name}</p>
      </div>
    );
    
    backContent = (
      <div className="card-content">
        <h3>Szczegóły leku:</h3>
        <div className="medication-details">
          <p><strong>Grupa:</strong> {currentMedication.group}</p>
          <p><strong>Dawkowanie:</strong> {currentMedication.dosage}</p>
          <p><strong>Mechanizm działania:</strong> {currentMedication.mechanism}</p>
          <p><strong>Wskazania:</strong> {currentMedication.indications}</p>
          <p><strong>Działania niepożądane:</strong> {currentMedication.sideEffects}</p>
        </div>
      </div>
    );
  } else {
    // Reversed mode - details on front, name on back
    frontContent = (
      <div className="card-content">
        <h3>Szczegóły leku:</h3>
        <div className="medication-details">
          <p><strong>Grupa:</strong> {currentMedication.group}</p>
          <p><strong>Dawkowanie:</strong> {currentMedication.dosage}</p>
          <p><strong>Mechanizm działania:</strong> {currentMedication.mechanism}</p>
          <p><strong>Wskazania:</strong> {currentMedication.indications}</p>
          <p><strong>Działania niepożądane:</strong> {currentMedication.sideEffects}</p>
        </div>
      </div>
    );
    
    backContent = (
      <div className="card-content">
        <h3>Lek:</h3>
        <p className="medication-name">{currentMedication.name}</p>
      </div>
    );
  }

  // Display content based on showDetails state
  const displayedContent = showDetails ? backContent : frontContent;
  const flipHint = showDetails ? 
    (isReversed ? "Kliknij, aby zobaczyć szczegóły" : "Kliknij, aby zobaczyć nazwę leku") :
    (isReversed ? "Kliknij, aby zobaczyć nazwę leku" : "Kliknij, aby zobaczyć szczegóły");

  return (
    <div className="flashcards-container">
      <div 
        className="medication-card"
        onClick={handleFlip}
        data-testid="medication-flashcard"
      >
        {displayedContent}
        <div className="flip-instruction">
          <span className="icon">↻</span>
          <p>{flipHint}</p>
        </div>
      </div>
      <div className="flashcard-controls">
        <button onClick={handlePrevious}>Poprzedni</button>
        <span>{currentIndex + 1} / {medications.length}</span>
        <button onClick={handleNext}>Następny</button>
        <button 
          onClick={handleReverse} 
          className={`reverse-button ${isReversed ? 'reversed' : ''}`}
        >
          {isReversed ? 'Pokaż najpierw nazwę' : 'Pokaż najpierw szczegóły'}
        </button>
      </div>
    </div>
  );
};

export default MedicationFlashcards; 