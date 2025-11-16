import { Link } from "react-router-dom";
import { Car } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-gray-900"
        >
          <Car className="text-yellow-400" />
          BJB RENTCAR PALEMBANG
        </Link>

        <div className="flex gap-6 text-gray-700 font-medium">
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
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
