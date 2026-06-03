import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "../layouts/MainLayout";

// Lazy Imports
const Home = lazy(() => import("../pages/Home"));
const Overview = lazy(() => import("../pages/Overview"));
const Gallery = lazy(() => import("../pages/Gallery"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0B6E4F] border-t-transparent"></div>
          </div>
        }
      >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/overview" element={<Overview />} />

            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
