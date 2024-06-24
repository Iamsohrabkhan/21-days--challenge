// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="h-[200svh]"></div>
    </Router>
  );
}
