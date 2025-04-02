import React, { useState } from 'react';
import { QuizQuestion, QuizState } from '../types/quiz';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResults: false,
    selectedAnswers: [],
  });
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (selectedAnswer: string) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setSelectedAnswer(selectedAnswer);
    setShowFeedback(true);

    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      selectedAnswers: [...prev.selectedAnswers, selectedAnswer],
    }));
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        showResults: true,
      }));
    }
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResults: false,
      selectedAnswers: [],
    });
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  if (quizState.showResults) {
    return (
      <div className="quiz-results">
        <h2>Quiz Complete!</h2>
        <p>Your score: {quizState.score} out of {questions.length}</p>
        <button onClick={resetQuiz}>Try Again</button>
      </div>
    );
  }

  const currentQuestion = questions[quizState.currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        Question {quizState.currentQuestionIndex + 1} of {questions.length}
      </div>
      <div className="quiz-question">
        <h3>{currentQuestion.question}</h3>
        <div className="quiz-options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showFeedback && handleAnswerSelect(option)}
              className={`quiz-option ${
                showFeedback
                  ? option === currentQuestion.correctAnswer
                    ? 'correct'
                    : selectedAnswer === option
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              disabled={showFeedback}
            >
              {option}
            </button>
          ))}
        </div>
        {showFeedback && (
          <div className="quiz-feedback">
            <p className={selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}>
              {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect!'}
            </p>
            <p className="explanation">{currentQuestion.explanation}</p>
            <button onClick={handleNextQuestion} className="next-button">
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz; 