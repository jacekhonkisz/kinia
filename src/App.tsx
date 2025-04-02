import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import MedicationFlashcards from './components/MedicationFlashcards';
import { flashcards, quizQuestions } from './data/quizData';
import { medications } from './data/medicationData';
import './styles/index.css';

// Get the base URL from Vite's import.meta.env
const baseUrl = import.meta.env.BASE_URL;

function App() {
  return (
    <Router basename={baseUrl}>
      <div className="app">
        <header>
          <h1>Medical Learning Platform</h1>
        </header>
        
        <div className="component-switcher">
          <Link to="/flashcards" className="nav-button">
            Flashcards
          </Link>
          <Link to="/quiz" className="nav-button">
            Quiz
          </Link>
          <Link to="/medications" className="nav-button">
            Leki
          </Link>
        </div>

        <Routes>
          <Route path="/flashcards" element={<Flashcards flashcards={flashcards} />} />
          <Route path="/quiz" element={<Quiz questions={quizQuestions} />} />
          <Route path="/medications" element={<MedicationFlashcards medications={medications} />} />
          <Route path="/" element={<Navigate to="/flashcards" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 