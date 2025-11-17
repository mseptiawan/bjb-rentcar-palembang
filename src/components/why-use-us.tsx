import React from "react";

// --- DATA UNTUK KARTU ---
// PERBAIKAN: 'icon' sekarang adalah string path ke gambar Anda.
// Pastikan nama file ini sesuai dengan yang ada di folder 'public/mengapa-kita/'
const benefits = [
  {
    icon: "/mengapa-kita/proses-cepat.png", // Ganti jika nama file beda
    title: "Proses Cepat & Mudah",
    description:
      "Kami menyederhanakan proses booking untuk kenyamanan Anda. Hanya beberapa langkah dan mobil siap digunakan.",
  },
  {
    icon: "/mengapa-kita/armada-bersih.png", // Ganti jika nama file beda
    title: "Armada Bersih & Terawat",
    description:
      "Semua kendaraan kami dicuci bersih dan diservis rutin untuk menjamin keamanan serta kenyamanan perjalanan Anda.",
  },
  {
    icon: "/mengapa-kita/best-driver.png",
    title: "Driver Profesional",
    description:
      "Driver berpengalaman, sopan, memahami rute dalam dan luar kota, serta siap melayani perjalanan Anda.",
  },
  {
    icon: "/mengapa-kita/lepas-kunci.png",
    title: "Bisa Lepas Kunci",
    description:
      "Tersedia layanan setir sendiri dengan proses mudah dan cepat tanpa ribet.",
  },

  {
    icon: "/mengapa-kita/layanan-nasional.png", // Ganti jika nama file beda
    title: "Layanan Nasional (Seluruh Indonesia)",
    description:
      "Jangkauan layanan kami mencakup berbagai kota besar di Indonesia, siap mendukung mobilitas Anda di mana saja.",
  },
  {
    icon: "/mengapa-kita/harga-terbaik.png", // Ganti jika nama file beda
    title: "Harga Terbaik dengan Pelayanan Premium",
    description:
      "Dapatkan harga sewa yang kompetitif tanpa mengorbankan kualitas pelayanan premium yang kami berikan.",
  },
];

// --- KOMPONEN KARTU ---
interface BenefitCardProps {
  icon: string; // Tipe diubah menjadi string
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => (
  // PERBAIKAN: Dihapus class 'snap-center', 'w-full', 'lg:w-1/2', 'p-2'
  // Lebar sekarang diatur oleh grid di parent.
  <div className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col">
    {/* Icon */}
    <div className="flex-shrink-0 mx-auto">
      <span className="inline-flex items-center justify-center h-20 w-20 rounded-xl ">
        {/* PERBAIKAN: {icon} diganti dengan <img> */}
        <img src={icon} alt={title} className="h-20 w-20  object-contain" />
      </span>
    </div>
    {/* Konten Teks */}
    <div className="mt-6">
      <h3 className="text-sm md:text-xl font-bold text-center text-gray-900">
        {title}
      </h3>
      <p className="mt-2 font-inter text-gray-600 text-justify hidden md:block">
        {description}
      </p>
    </div>
  </div>
);

// --- KOMPONEN UTAMA (DEFAULT EXPORT) ---
const Whyuseus: React.FC = () => {
  // PERBAIKAN: Semua logika carousel (useRef, useEffect, slide) dihapus.

  return (
    <>
      {/* PERBAIKAN: <style> untuk scrollbar dihapus */}
      <section className="bg-gray-50 w-full py-16  md:py-24 ">
        <div className="container mx-auto max-w-6xl px-4">
          {/* PERBAIKAN: Layout diubah. Judul dipusatkan. */}
          <div className="text-center">
            <span className="inline-block text-yellow-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              MENGAPA KAMI?
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Alasan Memilih BJB Rental Mobil Palembang
            </h2>
            <p className="mt-4 font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik dengan armada prima
              dan beragam pilihan layanan untuk menjamin kepuasan perjalanan
              Anda.
            </p>
          </div>

          {/* PERBAIKAN: Layout Grid Baru (menggantikan carousel) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
            {/* Render semua kartu */}
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Whyuseus;
