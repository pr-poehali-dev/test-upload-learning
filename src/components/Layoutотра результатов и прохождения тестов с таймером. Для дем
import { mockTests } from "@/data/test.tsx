
import { ReactNode } from 'онстрации добавлены мData";
import TestCard from "@/components/react';
import Navbar from './Navbar';ок-данные.TestCard";

const TeacherDashboard = () => {

interface LayoutProps {
  children:
  const navigate = useNavigate(); ReactNode;
}

const Layout = ({ children }: Layout
  const [searchQuery, setSearchQuery]Props) => {
  return (
     = useState("");
  const [tests] = useState(mockTests<div className="min-h-screen flex flex-col">
      <Navbar />
      <main className);

  const filteredTests = tests.filter(="flex-1 container mx-auto px-4test => 
    test.title.toLowerCase().includes( py-8">
        {children}searchQuery.toLowerCase()) ||
    test.description.toLowerCase().includes(searchQuery.toLowerCase
      </main>
      <footer className="bg())
  );

  return (
    -primary text-primary-foreground py-<Layout>
      <div className="space-y-6">
        <div className4">
        <div className="container mx-auto="flex flex-col md:flex-row justify px-4 text-center">
          -between items-start md:items-center<p>© 2023 Система тестирования</p>
        </div>
       gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Панель преподавателя</h1>
            <p className="text-muted-foreground">
              Создавайте и управляйте тестами для ваших учеников
            </p>
          </div>
          <Button 
            onClick={() => navigate("/teacher/create-test")}
            className="flex items-center gap-2"
          >
            <Plus size={16} />
            Создать новый тест
          </Button>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
          <Input
            type="search"
            placeholder="Поиск тестов..."
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Все тесты</TabsTrigger>
            </footer>
    </div>
  );
};

export default Layout;
