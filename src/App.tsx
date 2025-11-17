import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import VisiMisi from "./pages/VisiMisi";
import Cars from "./pages/Cars";

export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />

      <main className="  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </main>
    </div>
  );
}
