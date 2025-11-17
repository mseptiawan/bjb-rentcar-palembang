import { useState } from "react"; // 1. Impor useState
import cars from "../data/cars";
import CarCard from "../components/CarCard";

export default function Cars() {
  // --- LOGIKA PAGINASI BARU ---

  // 2. Tentukan state untuk halaman saat ini
  const [currentPage, setCurrentPage] = useState(1);

  // 3. Tentukan jumlah item per halaman
  const ITEMS_PER_PAGE = 9;

  // 4. Hitung total halaman
  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);

  // 5. "Iris" array mobil untuk mendapatkan item di halaman saat ini
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCars = cars.slice(startIndex, endIndex);

  // 6. Fungsi untuk pindah halaman
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Opsional: Scroll ke atas saat ganti halaman
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };
  // --- AKHIR LOGIKA PAGINASI ---

  return (
    <div className="font-outfit max-w-6xl mx-auto">
      <h1 className="text-3xl text-center  py-2  font-semibold text-gray-900 mb-2">
        Pilihan Armada di BJB Rentcar Palembang
      </h1>

      {/* 7. Ubah grid ini agar lebih pas (2 di HP, 3 di Desktop) 
           dan petakan (map) `paginatedCars`, BUKAN `cars`
      */}
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-4">
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* --- 8. KOMPONEN PAGINASI BARU --- */}
      {/* Tampilkan navigasi hanya jika total halaman lebih dari 1 */}
      {totalPages > 1 && (
        <nav
          aria-label="Page navigation"
          className="flex justify-center mt-10 mb-30 md:my-10 "
        >
          <ul className="flex -space-x-px text-sm">
            <li>
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="flex items-center justify-center text-gray-700 bg-white box-border border border-gray-300 hover:bg-gray-100 hover:text-gray-900 font-medium rounded-s-lg text-sm px-3 h-10 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
            </li>

            {/* Buat tombol untuk setiap nomor halaman */}
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              const isActive = pageNum === currentPage;
              return (
                <li key={pageNum}>
                  <button
                    onClick={() => handlePageClick(pageNum)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-center text-sm w-10 h-10 font-medium box-border border border-gray-300 focus:outline-none ${
                      isActive
                        ? "text-yellow-600 bg-yellow-50 border-yellow-300 hover:bg-yellow-100 hover:text-yellow-700"
                        : "text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {pageNum}
                  </button>
                </li>
              );
            })}

            <li>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center text-gray-700 bg-white box-border border border-gray-300 hover:bg-gray-100 hover:text-gray-900 font-medium rounded-e-lg text-sm px-3 h-10 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
