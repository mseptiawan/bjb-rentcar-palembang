import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import Cars from "./pages/Cars";
import Footer from "./components/Footer";
import SocialMediaBar from "./components/SocialMediaBar";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import { usePageViews } from "./hooks/usePageViews";

export default function App() {
  usePageViews(); // <-- tracking GA aktif
  return (
    <div className="min-h-screen text-gray-800">
      <ScrollToTop />
      <Navbar />

      <main className="  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<AboutUsPage />} />
          <Route path="/armada" element={<Cars />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
      </main>
      <SocialMediaBar />
      <Footer />
      <BackToTop />
    </div>
  );
}
