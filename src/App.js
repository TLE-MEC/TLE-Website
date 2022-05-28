import { BrowserRouter } from "react-router-dom";

import './App.css';
import AnimatedRoutes from "./routes/AnimatedRoutes";
import ScrollToTop from "./utils/ScrollToTop"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;