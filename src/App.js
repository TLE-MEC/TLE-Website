import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { HomePage, TeamPage } from './pages'
import { PageNotFound } from './components'

import ScrollToTop from "./utils/ScrollToTop"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;