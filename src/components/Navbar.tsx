import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import ContactModal from "./ContactModal";

// --- IKON-IKON ---
const IconHome = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconCar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M14 16.5V14a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.5m14 0V14a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.5"></path>
    <path d="M5 13H3.5a1 1 0 01-1-1V8.5a1 1 0 011-1H5m14 5h1.5a1 1 0 001-1V8.5a1 1 0 00-1-1H19"></path>
    <circle cx="8" cy="19" r="2"></circle>
    <circle cx="16" cy="19" r="2"></circle>
    <path d="M3 13V6a2 2 0 012-2h14a2 2 0 012 2v7"></path>
    <path d="M5 8h14"></path>
  </svg>
);

const IconPhone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
  </svg>
);

const IconWhatsApp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
  </svg>
);

const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// --- KONSTANTA ---
const WHATSAPP_NUMBER = "62895604964463";
const DEFAULT_MESSAGE = `Halo BJB Rental Mobil Palembang, saya ingin bertanya tentang ketersediaan mobil rental. Bisa dibantu?`;
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

const PHONE_NUMBER = "0895604964463";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;

// --- NAVBAR LAYOUT ---
export default function NavbarLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Daftar Mobil", path: "/cars" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];
  useEffect(() => {
    if (isSidebarOpen) {
      // Nonaktifkan scroll body
      document.body.style.overflow = "hidden";
    } else {
      // Aktifkan kembali scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup jika komponen di-unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);
  return (
    <>
      {/* CSS Transition */}
      <style>{`
        .sidebar-transition { transition: transform 0.3s ease-out; }
        .backdrop-transition { transition: opacity 0.3s ease-out; }
      `}</style>

      {/* NAVBAR ATAS */}
      <nav className="font-outfit fixed top-0 left-0 w-full bg-white shadow z-50 border-b-2  border-yellow-500 py-2">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* KIRI: Menu + Logo + Nav */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-1 text-gray-700 hover:text-yellow-500"
            >
              <IconMenu />
            </button>

            {/* Desktop Logo */}
            <Link to="/" className="hidden md:flex items-center">
              <img
                src="/logorentcar.png"
                alt="BJB Logo"
                className="w-16 h-16 rounded-full"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:text-yellow-500 ${
                    location.pathname === link.path ? "text-yellow-500" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/* TOMBOL WA */}
          <ContactModal />
        </div>
      </nav>

      {/* --- SIDEBAR MOBILE --- */}
      {/* Backdrop */}
      {/* Backdrop (tidak menutupi konten) */}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-[60%] max-w-[300px] shadow-xl z-[70] sidebar-transition md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER SIDEBAR */}
        <div className="relative p-4 border-b border-gray-200 flex items-center justify-center">
          <Link to="/" onClick={() => setIsSidebarOpen(false)}>
            <img
              src="/logorentcar.png"
              className="w-52 h-52 object-contain rounded-full"
            />
          </Link>

          {/* TOMBOL X DI POJOK KANAN */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-3 right-3 text-gray-700 hover:text-red-500 p-1"
          >
            <IconX />
          </button>
        </div>

        {/* LIST MENU */}
        <div className="flex flex-col font-semibold text-gray-800 uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setIsSidebarOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" }); // scroll ke atas
              }}
              className={`p-4 border-b border-gray-200 tracking-wide hover:bg-gray-100 hover:text-yellow-600 ${
                location.pathname === link.path ? "text-yellow-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* NAVBAR BAWAH MOBILE */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-inner z-50">
        <div className="flex justify-around items-center h-16">
          <Link
            to="/"
            className={`flex flex-col items-center ${
              location.pathname === "/" ? "text-yellow-500" : "text-gray-700"
            }`}
          >
            <IconHome />
            <span className="text-xs mt-1">Home</span>
          </Link>

          <Link
            to="/cars"
            className={`flex flex-col items-center ${
              location.pathname === "/cars"
                ? "text-yellow-500"
                : "text-gray-700"
            }`}
          >
            <IconCar />
            <span className="text-xs mt-1">Mobil</span>
          </Link>

          <a
            href={PHONE_LINK}
            className="flex flex-col items-center text-gray-700 hover:text-yellow-500"
          >
            <IconPhone />
            <span className="text-xs mt-1">Telpon</span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="flex flex-col items-center text-gray-700 hover:text-yellow-500"
          >
            <IconWhatsApp />
            <span className="text-xs mt-1">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* --- KONTEN HALAMAN --- */}
      <main className="pt-16 pb-16 md:pb-0">
        <Outlet />
      </main>
    </>
  );
}
