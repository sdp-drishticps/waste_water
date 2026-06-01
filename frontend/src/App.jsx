import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { initLenis } from "./utils/lenis";
import BackToTop from "./components/common/BackToTop";

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <>
      <AppRoutes />
      <BackToTop />
    </>
  );
}

export default App;