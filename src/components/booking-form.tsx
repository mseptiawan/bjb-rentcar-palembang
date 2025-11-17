import React, { useState, useMemo } from "react";

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
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
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
  const handlePickupDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPickupDate = e.target.value;
    setPickupDate(newPickupDate);
    if (dropoffDate && newPickupDate > dropoffDate) {
      setDropoffDate("");
    }
  };

  // Handler (sudah benar)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name || !pickupDate || !dropoffDate || !carType || !service) {
      setError("Semua kolom wajib diisi.");
      return;
    }

    const phoneNumber = "62895604964463";
    const messageLines = [
      "Hallo PT. TPM RENT CAR",
      `Nama: ${name}`,
      `Mulai Rental: ${pickupDate}`,
      `Selesai Rental: ${dropoffDate}`,
      `Rental Mobil: ${carType} (${service})`,
    ];
    const encodedMessage = encodeURIComponent(messageLines.join("\n"));
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(whatsappURL, "_blank");
  };

  // --- PERBAIKAN DI BAWAH INI ---

  // Render komponen
  return (
    // 1. Container Induk/Jangkar:
    // - 'relative' agar 'absolute' child berfungsi.
    // - 'w-full' agar di mobile dia 100% penuh.
    // - 'min-h-[20vh]' hanya untuk memberi ruang agar tidak 'collapse'.
    <div className="relative w-full min-h-[20vh]">
      {/* 2. Kartu Form (Absolute):
        Ini adalah bagian yang diperbaiki.
        - 'absolute z-10': Mengambang di atas.
        - 'top-0 md:-top-10 lg:-top-20': Efek "pull-up" responsif.
        
        - Mobile (Default):
        - 'left-4 right-4': "Jepit" kartu 1rem (16px) dari tepi kiri dan kanan.
                          Ini otomatis membuatnya full-width DENGAN padding.
        
        - Tablet & Desktop (md: breakpoint):
        - 'md:left-1/2 md:-translate-x-1/2': Pusatkan kartu secara horizontal.
        - 'md:w-full md:max-w-5xl': Set lebar maks di 5xl.
      */}
      <div
        className="
          absolute z-10
          top-0 md:-top-10 lg:-top-20
          
          left-4 right-4 /* <- Ini untuk Mobile (full-width - 32px) */
          
          md:left-1/2 md:-translate-x-1/2 /* <- Ini untuk centering Desktop */
          md:w-full md:max-w-5xl          /* <- Ini untuk lebar Desktop */
          
          bg-white p-6 md:p-8 rounded-xl shadow-lg
        "
      >
        {/* Kontainer Form */}
        <form onSubmit={handleSubmit}>
          {/* 3. Grid Responsif:
            - 'grid-cols-1': Mobile (semua bertumpuk)
            - 'sm:grid-cols-2': Tablet Kecil (2 kolom)
            - 'md:grid-cols-5': Desktop (5 kolom)
          */}
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
              <label
                htmlFor="pickupDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pickup Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="pickupDate"
                value={pickupDate}
                onChange={handlePickupDateChange}
                min={today} // Validasi: Tidak bisa tanggal kemarin
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Input Tanggal Dropoff */}
            <div className="w-full">
              <label
                htmlFor="dropoffDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Dropoff Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dropoffDate"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                min={pickupDate || today} // Validasi: Tidak bisa sebelum tanggal pickup
                disabled={!pickupDate} // Disable jika tanggal pickup belum dipilih
                className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-yellow-500 focus:border-yellow-500
                           ${
                             !pickupDate ? "bg-gray-100 cursor-not-allowed" : ""
                           }`}
                required
              />
            </div>

            {/* Select Tipe Mobil */}
            <div className="w-full">
              <label
                htmlFor="carType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Car Type <span className="text-red-500">*</span>
              </label>
              <select
                id="carType"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm 
                           focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              >
                {carTypes.map((car) => (
                  <option key={car} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Grid Cerdas untuk item ke-5:
              - 'sm:col-span-2': Di layout 2-kolom (tablet kecil), buat item ini
                                mengambil 2 kolom (satu baris penuh).
              - 'md:col-span-1': Di layout 5-kolom (desktop), kembalikan ke 1 kolom.
            */}
            <div className="w-full sm:col-span-2 md:col-span-1">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Service <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm 
                           focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tampilkan error jika ada */}
          {error && (
            <div className="text-red-600 text-sm text-center mb-4">{error}</div>
          )}

          {/* Tombol Booking */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold uppercase tracking-wider 
                       py-3 px-6 rounded-lg shadow-md
                       hover:bg-yellow-600 focus:outline-none focus:ring-2 
                       focus:ring-yellow-500 focus:ring-opacity-50 transition duration-200"
          >
            Booking
          </button>
        </form>
      </div>
    </div>
  );
};

// Ekspor komponen App sebagai default
export default App;
