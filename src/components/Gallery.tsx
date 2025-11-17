import React, { useState, useMemo } from "react";

// --- Data Gambar (Static) ---
const IMAGES_PER_PAGE = 8;
const NUM_COLUMNS = 4; // Tetap 4 kolom untuk masonry
const START_IMAGE_INDEX = 2;
const END_IMAGE_INDEX = 31;

const allImagePaths: string[] = [];
for (let i = START_IMAGE_INDEX; i <= END_IMAGE_INDEX; i++) {
  allImagePaths.push(`/gallery/gallery (${i}).webp`);
}

const TOTAL_PAGES = Math.ceil(allImagePaths.length / IMAGES_PER_PAGE);

// --- Komponen React ---

/**
 * Komponen untuk satu gambar dalam layout Masonry.
 * Menggunakan w-full dan h-auto (tanpa aspect-ratio tetap) untuk memungkinkan tinggi bervariasi.
 */
interface GalleryImageProps {
  src: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src }) => (
  <div className="overflow-hidden">
    <img
      // Styling Masonry: w-full dan h-auto untuk tinggi gambar asli
      className="w-full h-auto max-w-full rounded-lg object-cover"
      src={src}
      alt="Galeri BJB Rental Mobil Palembang"
      loading="lazy"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  </div>
);

/**
 * Komponen Utama (Default Export)
 */
const Gallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // --- Logika Data Slicing dan Distribusi (Masonry) ---
  const columns = useMemo(() => {
    const startIndex = currentPage * IMAGES_PER_PAGE;
    const currentImages = allImagePaths.slice(
      startIndex,
      startIndex + IMAGES_PER_PAGE
    );

    // Buat array 2D untuk 4 kolom
    const cols: string[][] = Array.from({ length: NUM_COLUMNS }, () => []);

    // Distribusikan gambar saat ini ke 4 kolom (Masonry logic)
    currentImages.forEach((imagePath, index) => {
      const columnIndex = index % NUM_COLUMNS;
      cols[columnIndex].push(imagePath);
    });

    return cols;
  }, [currentPage]); // Hitung ulang hanya jika halaman berubah

  // --- Logika Navigasi ---
  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % TOTAL_PAGES);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  };

  return (
    <section className="bg-gray-50 w-full min-h-screen py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Judul dan Tombol Navigasi */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Galeri Armada Kami
            </h2>
            <p className="mt-1 text-lg text-gray-600">
              Halaman {currentPage + 1} dari {TOTAL_PAGES} (Total{" "}
              {allImagePaths.length} Gambar)
            </p>
          </div>

          {/* Tombol Navigasi Kanan-Kiri */}
          <div className="flex gap-3">
            <button
              onClick={goToPrevPage}
              aria-label="Galeri sebelumnya"
              className="rounded-full p-3 text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 shadow-sm"
            >
              {/* Left Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNextPage}
              aria-label="Galeri selanjutnya"
              className="rounded-full p-3 text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 shadow-sm"
            >
              {/* Right Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid Utama: Layout Masonry 4 kolom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {/* Mapping array 'columns' yang sudah dibagi 4 */}
          {columns.map((columnImages, colIndex) => (
            // Ini adalah <div> kolom (satu dari 4 kolom)
            <div key={`column-${colIndex}`} className="grid gap-4">
              {/* Render gambar di dalam kolom */}
              {columnImages.map((src, imgIndex) => (
                <GalleryImage
                  key={`image-${colIndex}-${imgIndex}-${currentPage}`}
                  src={src}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
