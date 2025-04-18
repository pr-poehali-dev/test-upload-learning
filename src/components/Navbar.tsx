
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { GraduationCap, BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <span>Тестирование</span>
        </Link>
        
        <div className="flex gap-4">
          <Link to="/teacher">
            <Button variant="secondary" className="flex items-center gap-2">
              <span>Преподаватель</span>
            </Button>
          </Link>
          <Link to="/student">
            <Button variant="secondary" className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              <span>Ученик</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
