import React, { useState } from 'react';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import { flashcards, quizQuestions } from './data/quizData';
import './styles/index.css';

function App() {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz'>('flashcards');

  return (
    <div className="app">
      <header>
        <h1>Medical Learning Platform</h1>
      </header>
      
      <div className="component-switcher">
        <button
          className={activeTab === 'flashcards' ? 'active' : ''}
          onClick={() => setActiveTab('flashcards')}
        >
          Flashcards
        </button>
        <button
          className={activeTab === 'quiz' ? 'active' : ''}
          onClick={() => setActiveTab('quiz')}
        >
          Quiz
        </button>
      </div>

      {activeTab === 'flashcards' ? (
        <Flashcards flashcards={flashcards} />
      ) : (
        <Quiz questions={quizQuestions} />
      )}
    </div>
  );
}

export default App; 