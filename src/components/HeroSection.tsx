// src/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  const WHATSAPP_NUMBER = "62895604964463";
  const DEFAULT_MESSAGE = `Halo BJB RENTAL MOBIL PALEMBANG, saya ingin bertanya tentang ketersediaan mobil rental. Bisa dibantu?`;
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    // Kontainer utama dengan posisi relative untuk menampung elemen absolut
    // dan overflow-hidden untuk memotong lingkaran latar belakang
    <div className="relative w-full pt-1 bg-gradient-to-b from-white to-gray-100   py-20 md:py-30 md:pt-10 overflow-hidden font-outfit ">
      {/* 1. Elemen Latar Belakang (Lingkaran Putih) */}
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 
                      w-[600px] h-[600px] md:w-[700px] md:h-[700px] 
                       opacity-40 rounded-full z-0"
      />

      {/* 2. Kontainer Konten (Grid Layout) */}
      {/* z-10 agar berada di atas lingkaran */}
      <div className="container  px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10 max-w-6xl mx-auto justify-center ">
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="max-w-lg text-center  sm:text-left">
          {/* Tag Kecil */}
          <span
            className="inline-block  text-yellow-500 text-xs font-semibold 
                           px-3 py-1 rounded-full uppercase tracking-wider "
          >
            RENTAL MOBIL
          </span>

          {/* Judul Utama (Headline) */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 my-1 leading-tight mb-8">
            Temukan Mobil Impian dengan Harga Terjangkau
          </h1>

          {/* Paragraf Deskripsi */}
          <p className="text-gray-600 text-justify text-lg mb-8">
            Nikmati perjalanan nyaman dan menyenangkan tanpa menguras budget.
            Kami menyediakan berbagai pilihan mobil rental dengan kualitas
            terbaik, harga bersahabat, dan proses mudah untuk kebutuhan harian
            maupun perjalanan luar kota.
          </p>
          {/* Tombol CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white font-bold py-3  px-8 rounded-md shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Kolom Kanan: Gambar Mobil */}
        {/* Kita gunakan flex-container untuk memusatkan gambar di mobile */}
        <div className="relative hidden md:block flex justify-center md:justify-end ">
          <img
            src="./mobil.png"
            alt="Luxury Car Rental"
            className="w-full z-10 drop-shadow-2xl scale-[1.2] origin-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
