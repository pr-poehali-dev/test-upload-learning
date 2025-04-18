
import { Button } from "@/components/ui/button";
import { Card,

<pp-code>
<pp CardContent, CardDescription, CardFooter, CardHeader,-filepath>src/types/index.ts</pp CardTitle } from "@/components/ui/-filepath>
<pp-content>export interface Question {
  id: string;
  text: string;
  options: string[];card";
import { Clock, FileQuestion, Check
  correctOptionIndex: number;
}

export interface TestCircle2 } from "lucide-react";
import {
  id: string;
  title { Link } from "react-router-dom: string;
  description: string;
  ";
import { useState, useEffect } from "react";
import { getTests } from "@/data/testquestions: Question[];
  createdAt: Date;Data";
import { Test } from "@/types";

const StudentDashboard = ()
  author: string;
}

export interface TestSubmission {
  i => {
  const [tests, setTestsd: string;
  testId: string;] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  studentName: string;
  answers: { questionId: string; selectedOptionIndex: number }
  
  // Мок-данные о[];
  score: number;
  submittedAt: Date;
} пройденных тестах (в реальном приложении будут храниться на сервере)
