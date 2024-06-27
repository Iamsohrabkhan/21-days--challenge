// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import { Cursor } from "./component/cursor";
import { Scroll } from "./component/scroll";
import About from "./pages/about";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Cursor />
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
