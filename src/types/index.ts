
export interface Question {
  id: string;
  text: string;
  options: Option[];
  type: 'single' | 'multiple';
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Test {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdAt: string;
  timeLimit?: number; // в минутах
}

export interface UserAnswer {
  questionId: string;
  selectedOptions: string[];
}

export interface TestResult {
  testId: string;
  userId: string;
  answers: UserAnswer[];
  score: number;
  maxScore: number;
  completedAt: string;
}
