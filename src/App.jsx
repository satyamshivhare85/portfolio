// src/App.jsx

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// Correct Import
import resumee from "./assets/resumee.pdf";

export default function App() {

  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Resume */}
      <Route
        path="/resume.pdf"
        element={
          <iframe
            src={resumee}
            title="Resume"
            className="w-full h-screen"
          />
        }
      />

    </Routes>
  );
}
