
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Test } from '@/types';
import { tests } from '@/data/mockData';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const TakeTest = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const [test, setTest] = useState<Test | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // В реальном приложении здесь был бы запрос к API
    const foundTest = tests.find(t => t.id === testId);
    if (foundTest) {
      setTest(foundTest);
      setSelectedAnswers(new Array(foundTest.questions.length).fill(-1));
    } else {
      // Тест не найден
      navigate('/student');
    }
  }, [testId, navigate]);

  if (!test) {
    return <div>Загрузка...</div>;
  }

  const currentQuestion = test.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / test.questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = parseInt(value);
    setSelectedAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    // Вычисляем результат
    let correctAnswers = 0;
    test.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctOption) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / test.questions.length) * 100);
    setScore(finalScore);
    setIsSubmitted(true);
    
    // В реальном приложении здесь бы отправлялся запрос к API
    console.log({
      testId: test.id,
      studentId: 'user3', // В реальности получали бы из контекста аутентификации
      answers: selectedAnswers,
      score: finalScore,
      completedAt: new Date().toISOString()
    });
  };

  const canSubmit = selectedAnswers.every(answer => answer !== -1);

  if (isSubmitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Тест завершен!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="text-5xl mb-4 flex justify-center">
                <CheckCircle className="text-green-500" size={60} />
              </div>
              <h2 className="text-2xl font-bold">{test.title}</h2>
              <p className="text-muted-foreground mb-6">{test.description}</p>
              
              <div className="bg-secondary p-6 rounded-xl">
                <p className="text-3xl font-bold mb-2">{score}%</p>
                <p className="text-muted-foreground">Ваш результат</p>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Правильных ответов: {test.questions.filter((q, i) => q.correctOption === selectedAnswers[i]).length} из {test.questions.length}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => navigate('/student')}>Вернуться к списку тестов</Button>
            </CardFooter>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <div className="flex flex-col space-y-2">
              <CardTitle>{test.title}</CardTitle>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Вопрос {currentQuestionIndex + 1} из {test.questions.length}</span>
                <Progress value={progress} className="w-32" />
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              <h3 className="text-xl font-medium">{currentQuestion.text}</h3>
              
              <RadioGroup 
                value={selectedAnswers[currentQuestionIndex].toString()}
                onValueChange={handleAnswerSelect}
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-start space-x-2 py-2">
                    <RadioGroupItem 
                      value={index.toString()} 
                      id={`option-${index}`} 
                    />
                    <Label htmlFor={`option-${index}`} className="font-normal">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-1"
            >
              <ArrowLeft size={16} />
              Назад
            </Button>
            
            {currentQuestionIndex === test.questions.length - 1 ? (
              <Button 
                onClick={handleSubmit} 
                disabled={!canSubmit}
                className="flex items-center gap-1"
              >
                <CheckCircle size={16} />
                Завершить тест
              </Button>
            ) : (
              <Button 
                onClick={goToNextQuestion}
                className="flex items-center gap-1"
              >
                Далее
                <ArrowRight size={16} />
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default TakeTest;
