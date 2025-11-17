import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import Cars from "./pages/Cars";
import Footer from "./components/Footer";
import SocialMediaBar from "./components/SocialMediaBar";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />

      <main className="  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <SocialMediaBar />
      <Footer />
    </div>
  );
}
