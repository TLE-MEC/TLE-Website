import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  console.log("%cWatchu Lookin' At", "color:#86CECE; font-size:30px");
  // console.log = console.warn = console.error = () => {};

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
