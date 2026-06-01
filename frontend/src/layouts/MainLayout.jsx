// src/layouts/MainLayout.jsx

import { Outlet, useLocation } from "react-router-dom";

import HomeNavbar from "../components/common/HomeNavbar.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";

const MainLayout = () => {
  const location = useLocation();

  // Homepage check
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white text-dark">
      
      {/* Homepage Navbar */}
      {isHomePage ? <HomeNavbar /> : <Navbar />}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;