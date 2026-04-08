import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { Blogs } from "./pages/Blogs.jsx";
import { Experience } from "./pages/Experience.jsx";
import { Education } from "./pages/Education.jsx";
import { Projects } from "./pages/Projects.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<Navigate to="/blogs" replace />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
