
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Plus, Trash2, MoveUp, MoveDown, Save } from 'lucide-react';
import { Question } from '@/types';

const CreateTest = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: `q-${Date.now()}`,
      text: '',
      options: ['', '', '', ''],
      correctOption: 0
    }
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: `q-${Date.now()}`,
        text: '',
        options: ['', '', '', ''],
        correctOption: 0
      }
    ]);
  };

  const removeQuestion = (index: number) => {
    if (questions.length > 1) {
      const newQuestions = [...questions];
      newQuestions.splice(index, 1);
      setQuestions(newQuestions);
    }
  };

  const moveQuestionUp = (index: number) => {
    if (index > 0) {
      const newQuestions = [...questions];
      const temp = newQuestions[index];
      newQuestions[index] = newQuestions[index - 1];
      newQuestions[index - 1] = temp;
      setQuestions(newQuestions);
    }
  };

  const moveQuestionDown = (index: number) => {
    if (index < questions.length - 1) {
      const newQuestions = [...questions];
      const temp = newQuestions[index];
      newQuestions[index] = newQuestions[index + 1];
      newQuestions[index + 1] = temp;
      setQuestions(newQuestions);
    }
  };

  const updateQuestionText = (index: number, text: string) => {
    const newQuestions = [...questions];
    newQuestions[index].text = text;
    setQuestions(newQuestions);
  };

  const updateOptionText = (questionIndex: number, optionIndex: number, text: string) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = text;
    setQuestions(newQuestions);
  };

  const setCorrectOption = (questionIndex: number, optionIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctOption = optionIndex;
    setQuestions(newQuestions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном приложении здесь бы отправлялся запрос к API
    console.log({
      title,
      description,
      questions,
      teacherId: 'user1', // В реальности получали бы из контекста аутентификации
      createdAt: new Date().toISOString()
    });
    
    // Перенаправляем на страницу учителя
    navigate('/teacher');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Создание теста</h1>
        
        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Информация о тесте</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="title" className="block mb-2 font-medium">
                  Название теста
                </label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название теста"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 font-medium">
                  Описание теста
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Введите описание теста"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Вопросы</h2>

          {questions.map((question, qIndex) => (
            <Card key={question.id} className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl">Вопрос {qIndex + 1}</CardTitle>
                <div className="flex space-x-1">
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="ghost" 
                    onClick={() => moveQuestionUp(qIndex)}
                    disabled={qIndex === 0}
                  >
                    <MoveUp size={18} />
                  </Button>
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="ghost" 
                    onClick={() => moveQuestionDown(qIndex)}
                    disabled={qIndex === questions.length - 1}
                  >
                    <MoveDown size={18} />
                  </Button>
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="ghost" 
                    onClick={() => removeQuestion(qIndex)}
                    disabled={questions.length === 1}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor={`q-${qIndex}-text`} className="block mb-2 font-medium">
                    Текст вопроса
                  </label>
                  <Textarea
                    id={`q-${qIndex}-text`}
                    value={question.text}
                    onChange={(e) => updateQuestionText(qIndex, e.target.value)}
                    placeholder="Введите текст вопроса"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Варианты ответов</label>
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center space-x-2 mb-2">
                      <Input
                        type="radio"
                        className="h-4 w-4"
                        name={`correct-${question.id}`}
                        checked={question.correctOption === oIndex}
                        onChange={() => setCorrectOption(qIndex, oIndex)}
                      />
                      <Input
                        value={option}
                        onChange={(e) => updateOptionText(qIndex, oIndex, e.target.value)}
                        placeholder={`Вариант ${oIndex + 1}`}
                        required
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between items-center mt-4 mb-8">
            <Button 
              type="button" 
              variant="outline" 
              onClick={addQuestion}
              className="flex items-center gap-2"
            >
              <Plus size={16} />
              Добавить вопрос
            </Button>
            
            <Button 
              type="submit" 
              className="flex items-center gap-2"
            >
              <Save size={18} />
              Сохранить тест
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateTest;
