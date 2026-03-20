import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Thoughts from "./pages/Thoughts";
import ThoughtPost from "./pages/ThoughtPost";
import ThoughtEditor from "./pages/ThoughtEditor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thoughts" element={<Thoughts />} />
        <Route path="thoughts/:id" element={<ThoughtPost />} />
        <Route path="thoughts/:id/edit" element={<ThoughtEditor />} />
      </Route>
    </Routes>
  );
}

export default App;
