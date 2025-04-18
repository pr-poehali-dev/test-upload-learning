
import { useState, useEffect } from 'react';
import {Provider client={queryClient}>
    <TooltipProvider> Link } from 'react-router-dom
      <Toaster />
      <Son';
import { Test, TestResult } from '@ner />
      <BrowserRouter>/types';
import { tests, testResults } from '@/data/mockData';
        <Routes>
          <Route path="/" element={<Index
import Layout from '@/components/Layout';
import { Button } from />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
           '@/components/ui/button';
import { Card, CardContent<Route path="/teacher/create-test", CardHeader, CardTitle, CardFooter element={<CreateTest />} />
           } from '@/components/ui/card';<Route path="/student" element={<Student
import { Tabs, TabsContent, TabsList,Dashboard />} />
          <Route TabsTrigger } from '@/components/ path="/take-test/:testIui/tabs';
import { FileText,d" element={<TakeTest />} />
          <Route path="*" element={ CheckCircle } from 'lucide-react<NotFound />} />
        </Routes';

const StudentDashboard = () =>>
      </BrowserRouter>
     {
  const [availableTests, setAv</TooltipProvider>
  </QueryailableTests] = useState<Test[]>ClientProvider>
);

export default App;([]);
  const [completedTests,
