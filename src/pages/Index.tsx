
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-primary">Платформа для тестирования</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Создавайте тесты для учеников или проходите тесты, назначенные вашими преподавателями
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-card p-6 rounded-lg border shadow-sm flex flex-col items-center">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-bold mb-2">Для преподавателей</h2>
            <p className="text-muted-foreground mb-4 text-center">
              Создавайте тесты, отслеживайте прогресс и результаты ваших учеников
            </p>
            <Link to="/teacher">
              <Button className="mt-auto">Войти как преподаватель</Button>
            </Link>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm flex flex-col items-center">
            <GraduationCap className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-bold mb-2">Для учеников</h2>
            <p className="text-muted-foreground mb-4 text-center">
              Проходите тесты и получайте мгновенную обратную связь по вашим ответам
            </p>
            <Link to="/student">
              <Button className="mt-auto">Войти как ученик</Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <UserCheck className="h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-muted-foreground italic">
            Простой и удобный инструмент для образовательного процесса
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
