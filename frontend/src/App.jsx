import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { initLenis } from "./utils/lenis";

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return <AppRoutes />;
}

export default App;