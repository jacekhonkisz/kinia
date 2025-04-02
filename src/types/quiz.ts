export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
  reversed?: boolean;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export interface MedicationCard {
  id: string;
  name: string;
  group: string;
  dosage: string;
  mechanism: string;
  indications: string;
  sideEffects: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResults: boolean;
  selectedAnswers: string[];
} 