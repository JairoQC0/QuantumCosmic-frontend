import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import IA from "./pages/IA";
import Exoplanetas from "./pages/Exoplanetas";
import Game from "./pages/Game";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <main className="pt-24 px-8 space-y-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ia" element={<IA />} />
          <Route path="/exoplanetas" element={<Exoplanetas />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
