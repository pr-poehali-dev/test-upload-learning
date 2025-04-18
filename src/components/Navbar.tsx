
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User } from '@/types';
import { getCurrentUser } from '@/data/mockData';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const location = useLocation();

  useEffect(() => {
    // В реальном приложении здесь был бы запрос к API
    setCurrentUser(getCurrentUser());
  }, []);

  return (
    <header className="bg-primary text-primary-foreground shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bol<TabsTrigger value="published">Опубликd">
              StudyTest
            </Link>
          ованные</TabsTrigger>
            <TabsTrigger</div>
          <nav className="flex items value="drafts">Черновики</TabsTrig-center space-x-4">
            {currentUserger>
          </TabsList>
          <TabsContent?.role === 'teacher' && (
               value="all" className="mt-6">
            {<>
                <Link to="/teacher">
                  <Button variant={location.pathname === '/teacher' ? 'secondary' : 'ghostfilteredTests.length > 0 ? (
              <div className="grid gri'}>
                    Панель учителяd-cols-1 md:grid-cols-2 lg:grid-cols-3
                  </Button>
                </Link> gap-6">
                {filteredTests.map(test => (
                  <TestCard key
                <Link to="/create-test">
                ={test.id} test={test} role  <Button variant={location.pathname === '/="teacher" />
                ))}
              </div>
            ) : (
              create-test' ? 'secondary' : 'ghost'}><div className="text-center py-12">
                
                    Создать тест
                  </Button>
                </Link>
              </>
            <p className="text-muted-foreground">)}
            {currentUser?.role === 'student' && (
              <Link to="/student">Тесты не найдены</p>
              
                <Button variant={location.pathname ===</div>
            )}
          </TabsContent>
           '/student' ? 'secondary' : 'ghost'}><TabsContent value="published" className="
                  Панель ученика
                mt-6">
            <div className="text-center py-12">
              <p</Button>
              </Link>
            )}
             className="text-muted-foreground">Оп<Button variant="outline">
              {currentUser ? `${убликованные тесты появятся здесьcurrentUser.name} (${currentUser.</p>
            </div>
          </TabsContent>
          <Tabsrole === 'teacher' ? 'Content value="drafts" className="mt-Учитель' : 'Ученик'})` :6">
            <div className="text- 'Войти'}
            </Buttoncenter py-12">
              <p className>
          </nav>
        </div>
      </div="text-muted-foreground">>
    </header>
  );Черновики тестов появятся здесь</p>
            </div>
          </Tab
};

export default Navbar;
