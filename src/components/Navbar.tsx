import { Link, useLocation } from "react-router-dom";

// --- IKON UNTUK NAVIGASI BAWAH ---
// Anda bisa gunakan ikon dari react-icons atau SVG seperti ini
const IconHome = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconCar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 16.5V14a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2.5m14 0V14a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2.5"></path>
    <path d="M5 13H3.5a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1H5m14 5h1.5a1 1 0 0 0 1-1V8.5a1 1 0 0 0-1-1H19"></path>
    <circle cx="8" cy="19" r="2"></circle>
    <circle cx="16" cy="19" r="2"></circle>
    <path d="M3 13V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"></path>
    <path d="M5 8h14"></path>
  </svg>
);

const IconPhone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const IconWhatsApp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

// --- KONSTANTA UNTUK LINK ---
// (Ambil dari konteks sebelumnya)
const WHATSAPP_NUMBER = "62895604964463";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_NUMBER = "0895604964463";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;

export default function Navbar() {
  const location = useLocation(); // Untuk menandai link aktif

  // --- NAVBAR ATAS (DESKTOP) ---
  return (
    <>
      <nav className="font-outfit fixed top-0 left-0 w-full bg-white shadow z-50 border-b-2 border-yellow-500">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-gray-900"
          >
            <img
              src="/logorentcar.png"
              alt="BJB RentCar Logo"
              className="w-8 h-8 object-contain"
            />
            BJB RentCar
          </Link>

          {/* --- INI MODIFIKASINYA --- */}
          {/* Tautan ini akan HILANG di mobile (hidden) dan MUNCUL di desktop (md:flex) */}
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/cars" className="hover:text-yellow-500">
              Daftar Mobil
            </Link>
            <Link to="/visi-misi" className="hover:text-yellow-500">
              Visi & Misi
            </Link>
            <Link to="/about" className="hover:text-yellow-500">
              Tentang Kami
            </Link>
          </div>
        </div>
      </nav>

      {/* --- NAVBAR BAWAH (MOBILE) --- */}
      {/* - md:hidden: Tampil HANYA di mobile.
        - fixed bottom-0: Menempel di bawah.
        - bg-white (atau warna krem seperti gambar Anda: bg-[#F8F7F4])
        - border-t: Garis tipis di atas
      */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-inner z-50">
        <div className="flex justify-around items-center h-16">
          {/* Sesuai urutan permintaan Anda (Kanan ke Kiri): Home, Mobil, Telp, WA
            Maka urutan di kode (Kiri ke Kanan): WA, Telp, Mobil, Home
          */}

          <Link
            to="/"
            className={`flex flex-col items-center justify-center hover:text-yellow-500 ${
              location.pathname === "/" ? "text-yellow-500" : "text-gray-700"
            }`}
          >
            <IconHome />
            <span className="text-xs font-medium mt-1">Home</span>
          </Link>
          {/* 3. Mobil */}
          <Link
            to="/cars"
            className={`flex flex-col items-center justify-center hover:text-yellow-500 ${
              location.pathname === "/cars"
                ? "text-yellow-500"
                : "text-gray-700"
            }`}
          >
            <IconCar />
            <span className="text-xs font-medium mt-1">Mobil</span>
          </Link>
          {/* 2. Telpon */}
          <a
            href={PHONE_LINK}
            className="flex flex-col items-center justify-center text-gray-700 hover:text-yellow-500"
          >
            <IconPhone />
            <span className="text-xs font-medium mt-1">Telpon</span>
          </a>

          {/* 4. Home */}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-gray-700 hover:text-yellow-500"
          >
            <IconWhatsApp />
            <span className="text-xs font-medium mt-1">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* --- SPACER (PENTING!) --- */}
      {/* Karena navbar atas fixed, kita butuh spacer setinggi navbar (h-16).
        Karena navbar bawah fixed, kita BUTUH SPACER TAMBAHAN di mobile.
      */}
      <div className="pt-16 md:pt-16 pb-10 md:pb-16">
        {/* Konten halaman Anda akan muncul di sini (melalui <Outlet /> di App.tsx) */}
      </div>
    </>
  );
}
