import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import SIgnUp from "./components/SIgnUp";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SIgnUp />} />
    </Routes>
  );
}

export default App;
