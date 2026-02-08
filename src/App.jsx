import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
