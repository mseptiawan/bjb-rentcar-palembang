import React from "react";

const CAR_BACKGROUND_IMAGE = "/car-bg.webp";
const BCA_LOGO_IMAGE = "/BCA.png";
const MANDIRI_LOGO_IMAGE = "/MANDIRI.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#262f36] text-white font-outfit relative overflow-hidden">
      {/* Background Image dengan Overlay Blur */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${CAR_BACKGROUND_IMAGE})` }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm"
          style={{ backdropFilter: "blur(4px)" }}
        ></div>
      </div>

      {/* Konten Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 md:pb-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-3xl font-extrabold text-yellow-400">
              BJB Rental Mobil Palembang
            </h3>
            <p className="text-base font-inter leading-relaxed">
              Kami menyediakan layanan rental mobil terpercaya di Palembang
              dengan pilihan armada lengkap, terawat, dan driver profesional
              untuk kenyamanan perjalanan Anda.
            </p>
          </div>

          {/* Kolom 2: Kontak */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06L6.22 10.27a10.05 10.05 0 005.54 5.54l1.06-1.74a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.823 18 2 12.177 2 5V3z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="space-y-1 font-inter text-base">
                  <p className="flex">
                    <span className="w-18">Marcel</span>
                    <span className="mx-2">:</span>
                    <a
                      href="tel:0895-6049-64463"
                      className="hover:text-yellow-400"
                    >
                      0895604964463
                    </a>
                  </p>

                  <p className="flex">
                    <span className="w-18">Martin</span>
                    <span className="mx-2">:</span>
                    <a
                      href="tel:089523572666"
                      className="hover:text-yellow-400 font-inter"
                    >
                      0895-2357-2666
                    </a>
                  </p>

                  <p className="flex">
                    <span className="w-18">Christian</span>
                    <span className="mx-2">:</span>
                    <a
                      href="tel:08993382548"
                      className="hover:text-yellow-400 font-inter"
                    >
                      0899-3382-548
                    </a>
                  </p>

                  <p className="flex">
                    <span className="w-18">Hendy</span>
                    <span className="mx-2">:</span>
                    <a
                      href="tel:081273576534"
                      className="hover:text-yellow-400 font-inter"
                    >
                      0812-7357-6534
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-base leading-relaxed font-inter">
                  Jln. Putri Rambut Selako No 1518 RT 016, RW 007, Sumatera
                  Selatan, Kota Palembang
                </p>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Nomor Rekening */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white">
              Informasi Pembayaran
            </h4>
            <div className="flex items-center space-x-3">
              <img
                src={BCA_LOGO_IMAGE}
                alt="Logo BCA"
                className="h-10 w-auto rounded-sm"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p className="text-white font-inter  text-sm md:text-sm">
              Nomor Rekening: 6175222336
            </p>
            <p className="text-white font-inter text-sm md:text-sm">
              Atas Nama: Hendy
            </p>
            <div className="flex items-center space-x-3">
              <img
                src={MANDIRI_LOGO_IMAGE}
                alt="Logo MANDIRI"
                className="h-10 w-auto rounded-sm"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p className="text-white font-inter  text-sm md:text-sm">
              Nomor Rekening:1130014018075
            </p>
            <p className="text-white font-inter text-sm md:text-sm">
              Atas Nama: Hendy
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 font-inter pt-6 text-center text-gray-400 text-sm md:text-sm py-4">
          © {new Date().getFullYear()} BJB Rental Mobil Palembang. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
