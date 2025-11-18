import type { CarData } from "../data/cars";

// --- IKON SVG (IconYear, IconSeat, IconTransmission tetap sama) ---
const IconYear = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const IconSeat = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 19c-2.4 0-4.4-1.2-5.7-3.2M5 19h14M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"></path>
  </svg>
);

const IconTransmission = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20"></path>
    <path d="M17 5H7l-3 5m0 5l3 5h10l3-5m-3-5V7"></path>
    <path d="M12 13l4-4"></path>
  </svg>
);

// --- IKON BARU: Menggantikan IconCategory ---
// Ikon untuk fitur (setir mobil)
const IconFeature = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="12" y1="21.5" x2="12" y2="18.5"></line>
    <line x1="12" y1="5.5" x2="12" y2="2.5"></line>
    <line x1="4.5" y1="12" x2="7.5" y2="12"></line>
    <line x1="16.5" y1="12" x2="19.5" y2="12"></line>
  </svg>
);

// Konstanta WhatsApp Number dan Base URL
const WHATSAPP_NUMBER = "62895604964463"; // Jangan lupa kode negara
const WHATSAPP_API_URL = "https://wa.me/";

export default function CarCard({ car }: { car: CarData }) {
  // Pesan otomatis yang akan dikirim via WhatsApp
  const whatsappMessage = `Halo BJB Rental Mobil Palembang, saya mau sewa mobil ${car.name} (${car.year} | ${car.transmission}). Mohon info ketersediaan dan syarat penyewaan.`;

  // URL WhatsApp yang di-encode
  const whatsappLink = `${WHATSAPP_API_URL}${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="bg-white  border-gray-100   rounded-2xl border-2 transition duration-300">
      {/* Container Gambar */}
      <div className="overflow-hidden h-44 rounded-t-2xl ">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        {/* Nama Mobil */}
        <h3 className="font-outfit text-xl font-bold text-gray-900 mt-3">
          {car.name}
        </h3>

        {/* Kategori */}
        <p className="font-inter text-sm font-medium text-yellow-500 mt-0.5">
          {car.category}
        </p>
        <p className="font-inter text-sm font-semibold text-gray-800 mt-1">
          {car.price.toLocaleString()}
        </p>
        <hr className="border-gray-300 my-4 mx-auto " />
        {/* Detail Ikon (Tahun, Seat, Transmisi, Fitur) */}
        <div className="grid grid-cols-2 gap-2 py-4 border-b border-gray-100 mt-2">
          <div className="flex items-center space-x-1.5 text-sm text-gray-700">
            <IconYear />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-sm text-gray-700">
            <IconSeat />
            <span>{car.seat} seats</span>
          </div>
          <div className="flex items-center space-x-1.5 text-sm text-gray-700">
            <IconTransmission />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-sm text-gray-700">
            <IconFeature />
            <span>{car.features[1] ? car.features[1] : car.features[0]}</span>
          </div>
        </div>

        {/* Tombol Booking */}
        <div className="pt-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-xl text-sm font-semibold transition duration-200 shadow-md "
          >
            BOOKING SEKARANG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
