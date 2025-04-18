
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Edit, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTests } from "@/data/testData";
import { Test } from "@/types";

const TeacherDashboard = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTests = async () => {
      try {
        const testsData = await getTests();
        setTests(testsData);
      } catch (error) {
        console.error("Ошибка при загрузке тестов:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTests();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Панель преподавателя</h1>
          <p className="text-muted-foreground mt-1">Управляйте тестами и отслеживайте прогресс учеников</p>
        </div>
        <Link to="/teacher/create">
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Создать тест
          </Button>
        </Link>
      </div>

      <h2 className="text-xl font-semibold mb-4">Мои тесты</h2>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-muted rounded-lg"></div>
          ))}
        </div>
      ) : tests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tests.map((test) => (
            <Card key={test.id}>
              <CardHeader>
                <CardTitle>{test.title}</CardTitle>
                <CardDescription>{test.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <FileText className="h-4 w-4" />
                  <span>{test.questions.length} вопросов</span>
                </div>
                {test.timeLimit && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{test.timeLimit} минут</span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link to={`/test/${test.id}`}>
                  <Button variant="outline">Просмотр</Button>
                </Link>
                <Button variant="secondary" className="flex items-center gap-1">
                  <Edit className="h-4 w-4" />
                  Редактировать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-muted p-8 rounded-lg text-center">
          <p className="text-muted-foreground mb-4">У вас пока нет созданных тестов</p>
          <Link to="/teacher/create">
            <Button>Создать первый тест</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
