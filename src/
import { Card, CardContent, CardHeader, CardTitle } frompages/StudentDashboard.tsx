import { useState } from " '@/components/ui/card';
importreact";
import { useNavigate } from Layout from '@/components/Layout';
import { Link "react-router-dom";
import Layout from "@/components/ } from 'react-router-dom';

const Index = () => {
  returnLayout";
import { Button } from "@/components/ui/button (
    <Layout>
      <div";
import { Tabs, TabsContent, TabsList, Tab className="container mx-auto px-4 sTrigger } from "@/components/uipy-12">
        <div className="text/tabs";
import { Search } from "lucide-center mb-12">
          <h-react";
import { Input } from "@1 className="text-4xl font-bold mb/components/ui/input";
import { mockTests } from "@-4">Платформа для тест/data/testData";
import TestCard from "@/components/TestCard";

constирования знаний</h1>
          <p StudentDashboard = () => {
   className="text-xl text-muted-const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useStateforeground max-w-2xl mx-auto">("");
  const [tests] = useState(mockTests);

  const filteredTests =
            Создавайте тесты tests.filter(test => 
    test, делитесь ими со студентами и ан.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.description.toLowerCaseализируйте результаты — всё в одном().includes(searchQuery.toLowerCase())
   месте.
          </p>
        );

  return (
    <Layout></div>

        <div className="
      <div className="space-y-grid grid-cols-1 md:gri6">
        <div>
          <h1d-cols-2 gap-8 max className="text-3xl font-bol-w-4xl mx-auto">
          <Card>d tracking-tight">Тесты для пр
            <CardHeader>
              <Carохождения</h1>
          dTitle>Для учителей</CardTitle>
            <p className="text-muted-foregroun</CardHeader>
            <CardContent className="spaced">
            Выберите тест для пр-y-4">
              <p>охождения или просмотрите свСоздавайте тесты, отои результаты
          </p>
        </div>

        <div className="flexслеживайте прогресс учеников и анализ w-full max-w-sm items-ируйте их результаты.</p>
              <divcenter space-x-2 mb-6">
          <Input className="flex justify-center">
                <Link to="/teacher
            type="search"
            placeholder="Поиск т">
                  <Button size="lg">Панестов..."
            className="w-full"
            value={ель учителя</Button>
                </Link>
              searchQuery}
            onChange={(e) =></div>
            </CardContent>
          </Card> setSearchQuery(e.target.value)}
          />
          

          <Card>
            <CardHeader><Button type="submit" size="icon">
            <Search className
              <CardTitle>Для учеников</CardTitle>
            </CardHeader="h-4 w-4" />
          </Button>>
            <CardContent className="space-
        </div>

        <Tabsy-4">
              <p>Проходите тесты и сразу получ defaultValue="available">
          <TabsList>
            <TabsTrigger value="available">Доступные тесты</TabsTrigger>
            айте результаты. Отслеживайте св<TabsTrigger value="completed">Пройденные той прогресс в обучении.</pесты</TabsTrigger>
          </TabsList>>
              <div className="flex justify-
          <TabsContent value="available" classNamecenter">
                <Link to="/student">
                  <Button size="lg">="mt-6">
            {filteredTests.length > Панель ученика</Button>
                0 ? (
              <div className="</Link>
              </div>
            </CardContent>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTests.map(test => (
                  <TestCar
          </Card>
        </div>

        <div className="mt-12 text-center">
          d key={test.id} test={test} role="student" /><h2 className="text-2xl font-bold mb
                ))}
              </div>
            ) : (-6">Преимущества нашей платформы
              <div className="text-center py-12">
                </h2>
          <div className="<p className="text-muted-foregroungrid grid-cols-1 md:grid">Тесты не найдены</p>
              </div>
            )}
          </Tabsd-cols-3 gap-6 max-w-4xl mx-auto">
            <div classNameContent>
          <TabsContent value="completed" className="mt-6">
            <div className="text-center py-12="p-4">
              <div className">
              <p className="text-muted-foreground">="text-3xl mb-2">Пройденные тесты появятся здесь📚</div>
              <h3 </p>
            </div>
          className="text-xl font-semibold mb-2</TabsContent>
        </Tabs>
      </div>">Разнообразные тесты</h
    </Layout>
  );
};

export default StudentDashboard;3>
              <p>Создавайте
