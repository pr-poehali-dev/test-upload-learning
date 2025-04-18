
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="py-4 bg-secondary">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Платформа для тестирования учеников © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
