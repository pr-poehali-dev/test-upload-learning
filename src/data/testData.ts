
import { Test } from "../types";

// Демо-данные для тестирования интерфейса
export const demoTests: Test[] = [
  {
    id: "1",
    title: "Основы математики",
    description: "Тест по базовым математическим операциям",
    createdAt: new Date().toISOString(),
    timeLimit: 30,
    questions: [
      {
        id: "q1",
        text: "Сколько будет 2 + 2?",
        type: "single",
        options: [
          { id: "o1", text: "3", isCorrect: false },
          { id: "o2", text: "4", isCorrect: true },
          { id: "o3", text: "5", isCorrect: false },
          { id: "o4", text: "6", isCorrect: false }
        ]
      },
      {
        id: "q2",
        text: "Выберите все простые числа",
        type: "multiple",
        options: [
          { id: "o1", text: "2", isCorrect: true },
          { id: "o2", text: "4", isCorrect: false },
          { id: "o3", text: "7", isCorrect: true },
          { id: "o4", text: "9", isCorrect: false }
        ]
      },
      {
        id: "q3",
        text: "Сколько будет 10 - 7?",
        type: "single",
        options: [
          { id: "o1", text: "2", isCorrect: false },
          { id: "o2", text: "3", isCorrect: true },
          { id: "o3", text: "4", isCorrect: false },
          { id: "o4", text: "5", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Русский язык",
    description: "Тест по правописанию и грамматике",
    createdAt: new Date().toISOString(),
    timeLimit: 20,
    questions: [
      {
        id: "q1",
        text: "Выберите слово с ошибкой",
        type: "single",
        options: [
          { id: "o1", text: "Велосипед", isCorrect: false },
          { id: "o2", text: "Интелегент", isCorrect: true },
          { id: "o3", text: "Корабль", isCorrect: false },
          { id: "o4", text: "Прекрасный", isCorrect: false }
        ]
      }
    ]
  }
];

export const getTests = (): Promise<Test[]> => {
  return Promise.resolve(demoTests);
};

export const getTestById = (id: string): Promise<Test | undefined> => {
  return Promise.resolve(demoTests.find(test => test.id === id));
};
