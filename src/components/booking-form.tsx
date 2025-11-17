import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
// Daftar tipe mobil
const carTypes = [
  "Avanza New",
  "Innova Reborn",
  "Innova Zenix G Hybrid",
  "Pajero",
  "Fortuner",
  "Brio",
  "Alphard Gen 3",
  "Hiace Commuter",
  "Hiace Premio",
  "Hilux",
  "Triton",
  "Pajero-44",
  "Land Cruiser",
  "Innova Zenix Q Modelista",
  "Calya",
  "Alphard Gen 4",
];

// Opsi layanan
const serviceOptions = ["Lepas Kunci", "Pakai Driver"];

// Tipe untuk props komponen
interface BookingFormProps {}

// Komponen Form
const App: React.FC<BookingFormProps> = () => {
  // State untuk setiap input form
  const [name, setName] = useState("");
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [dropoffDate, setDropoffDate] = useState<Date | null>(null);

  const [carType, setCarType] = useState(carTypes[0]);
  const [service, setService] = useState(serviceOptions[0]);
  const [error, setError] = useState("");

  // Mendapatkan tanggal hari ini (sudah benar)
  const today = useMemo(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split("T")[0];
  }, []);

  // Handler (sudah benar)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name || !pickupDate || !dropoffDate || !carType || !service) {
      setError("Semua kolom wajib diisi.");
      return;
    }

    const formattedPickup = pickupDate ? format(pickupDate, "d MMMM yyyy") : "";
    const formattedDropoff = dropoffDate
      ? format(dropoffDate, "d MMMM yyyy")
      : "";

    const phoneNumber = "62895604964463";
    const message = `Halo BJB RENTAL MOBIL PALEMBANG, saya ${name} ingin melakukan pemesanan mobil. 
Saya berencana mulai rental pada tanggal ${formattedPickup} dan selesai pada tanggal ${formattedDropoff}. 
Mobil yang ingin saya pesan adalah ${carType} dengan layanan ${service}. 
Mohon konfirmasi ketersediaan dan detail selanjutnya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(whatsappURL, "_blank");
  };

  // --- PERBAIKAN DI BAWAH INI ---

  // Render komponen
  return (
    // Kita bungkus dengan React.Fragment (<>) untuk menambahkan <style>
    <>
      {/* CSS untuk menyembunyikan icon kalender bawaan browser */}
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          display: none;
          -webkit-appearance: none;
        }
      `}</style>

      <div
        className="
          relative z-10
          w-auto 
          mx-4 
          md:mx-auto md:max-w-5xl
          mt-0 md:-mt-10 lg:-mt-20
          bg-white p-6 md:p-12 rounded-xl shadow-none md:shadow-lg
        "
      >
        {/* PERBAIKAN: Menambahkan tag <form> yang hilang */}
        <form onSubmit={handleSubmit}>
          {/* Kontainer Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-6">
            {/* Input Nama */}
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Input Tanggal Pickup */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Date <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => {
                    setPickupDate(date);
                    setDropoffDate(null);
                  }}
                  minDate={new Date()}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select pickup date"
                  className="pr-10"
                />

                {/* Icon */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5v1h8V7H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Input Tanggal Dropoff */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dropoff Date <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <DatePicker
                  selected={dropoffDate}
                  onChange={(date) => setDropoffDate(date)}
                  minDate={pickupDate || new Date()}
                  disabled={!pickupDate}
                  dateFormat="yyyy-MM-dd"
                  placeholderText={
                    pickupDate
                      ? "Select dropoff date"
                      : "Select pickup date first"
                  }
                  className={`pr-10 ${
                    !pickupDate ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                />

                {/* Icon */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5v1h8V7H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Select Tipe Mobil */}
            <div className="w-full">
              <label
                htmlFor="carType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Car Type <span className="text-red-500">*</span>
              </label>
              {/* 1. Wrapper relatif untuk menampung icon panah */}
              <div className="relative">
                <select
                  id="carType"
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  // 2. Tambahkan 'appearance-none' (sembunyikan panah default) dan 'pr-10' (ruang icon)
                  className="block w-full px-3 py-2 pr-10 border border-gray-300 bg-white rounded-md shadow-sm 
                             appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                >
                  {/* PERBAIKAN: Mengembalikan mapping options yang benar */}
                  {carTypes.map((car) => (
                    <option key={car} value={car}>
                      {car}
                    </option>
                  ))}
                </select>
                {/* 3. Icon Panah (Chevron) Kustom */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* 4. Grid Cerdas untuk item ke-5 (sudah benar) */}
            <div className="w-full sm:col-span-2 md:col-span-1">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Service <span className="text-red-500">*</span>
              </label>
              {/* 1. Wrapper relatif untuk menampung icon panah */}
              <div className="relative">
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  // 2. Tambahkan 'appearance-none' (sembunyikan panah default) dan 'pr-10' (ruang icon)
                  className="block w-full px-3 py-2 pr-10 border border-gray-300 bg-white rounded-md shadow-sm 
                             appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                >
                  {/* PERBAIKAN: Mengembalikan mapping options yang benar */}
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {/* 3. Icon Panah (Chevron) Kustom */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tampilkan error jika ada */}
          {error && (
            <div className="text-red-600 text-sm text-center mb-4">{error}</div>
          )}

          {/* Tombol Booking */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold uppercase tracking-wider 
             py-3 px-6 rounded-lg shadow-md
             hover:bg-yellow-600 focus:outline-none focus:ring-2 
             focus:ring-yellow-500 focus:ring-opacity-50 transition duration-200
             flex items-center justify-center gap-2"
          >
            Booking
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
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
          </button>
        </form>
        {/* PERBAIKAN: Tag penutup </form> dipindah ke sini */}
      </div>
    </>
  );
};

// Ekspor komponen App sebagai default
export default App;
