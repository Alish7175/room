import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="h-full min-h-screen">
        <Outlet />
      </main>
      <footer className="mb-0">
        <Footer />
      </footer>
    </div>
  );
};
