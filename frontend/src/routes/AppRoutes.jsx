import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Overview from "../pages/Overview";
import Gallery from "../pages/Gallery";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

       <Route path="/overview" element={<Overview />} />

          <Route path="/gallery" element={<Gallery />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;