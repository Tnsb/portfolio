import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { LegacyHashRedirect, LegacySectionRedirect } from "./components/LegacyRedirects.jsx";
import { CaseStudy } from "./pages/CaseStudy.jsx";
import { Home } from "./pages/Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<LegacySectionRedirect />} />
        <Route path="/education" element={<LegacySectionRedirect />} />
        <Route path="/projects" element={<LegacySectionRedirect />} />
        <Route path="/blogs" element={<LegacySectionRedirect />} />
        <Route path="/about" element={<LegacySectionRedirect />} />
        <Route path="/case-studies" element={<LegacyHashRedirect hash="case-studies" />} />
        <Route path="/case-studies/:slug" element={<CaseStudy />} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
