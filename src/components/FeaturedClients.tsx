import React from "react";

/**
 * DAFTAR LOGO KLIEN
 * * Edit array ini untuk menambah atau mengubah logo.
 * Pastikan path-nya benar. Karena Anda menyebut 'public/perusahaan',
 * path-nya harus dimulai dengan '/perusahaan/'.
 */
const clientLogos = [
  { src: "/perusahaan/KOMINFO-PUSAT.png", alt: "Kominfo Pusat" },
  {
    src: "/perusahaan/KEMENTRIAN-PERHUBUNGAN.png",
    alt: "Kementrian Perhubungan",
  },
  { src: "/perusahaan/PT-MALINDO.png", alt: "PT Malindo" },
  {
    src: "/perusahaan/PT-MAKARYA-BANGUN-PERSADA.png",
    alt: "PT Makarya Bangun Persada",
  },
  {
    src: "/perusahaan/PT-KOBEXINDO-TRACTORS-TBK.png",
    alt: "PT Kobexindo Tractors",
  },
  {
    src: "/perusahaan/PT-JAKARTA-PRIMA-CRANES.png",
    alt: "PT Jakarta Prima Cranes",
  },
  {
    src: "/perusahaan/PT-CAHAYA-RIAU-MANDIRI.png",
    alt: "PT Cahaya Riau Mandiri",
  },
  { src: "/perusahaan/PERTAMINA.png", alt: "Pertamina" },
  { src: "/perusahaan/HUGHES-BAKER.png", alt: "Hughes Baker" },
  { src: "/perusahaan/DPRD-PROV.png", alt: "DPRD PROV" },
  { src: "/perusahaan/KEMENTRIAN-MENHAM.png", alt: "Kementrian Menham" },
  { src: "/perusahaan/DKPP-RI.png", alt: "DKPP RI" },
  { src: "/perusahaan/PT-TRIMULYA-GEMILANG.png", alt: "PT Trimulya Gemilang" },
  { src: "/perusahaan/PT-SUPRAME-ENERGY.png", alt: "PT Suprame Energy" },
  { src: "/perusahaan/PT-PN-IV.png", alt: "PT PN IV" },
  { src: "/perusahaan/PT-PETROSEA.png", alt: "PT PETROSEA" },
  { src: "/perusahaan/PT-MEDCO.png", alt: "PT MEDCO" },
  { src: "/perusahaan/SERTCO-QUALITY.png", alt: "SERTCO QUALITY" },
  { src: "/perusahaan/SEPCO-III.png", alt: "SEPCO III" },
  { src: "/perusahaan/PU-KOTA.png", alt: "PU KOTA" },

  { src: "/perusahaan/Bank-Indonesia.png", alt: "Bank-Indonesia" },
  { src: "/perusahaan/Semen-Baturaja.jpg", alt: "Semen-Baturaja" },
  { src: "/perusahaan/PT-mutu-lestari.png", alt: "pt-mutu-lestari" },
  {
    src: "/perusahaan/PT-Emneltech-Solusi-Indonesia.png",
    alt: "PT-Emneltech-Solusi-Indonesia",
  },
  { src: "/perusahaan/Kemenhumham.png", alt: "Kemenhumham" },
  {
    src: "/perusahaan/Kementrian-Pertanianjpg.jpg",
    alt: "Kementrian-Pertanianjpg",
  },
  { src: "/perusahaan/PLN.png", alt: "PLN" },
  { src: "/perusahaan/PT-AGRINAS.jpg", alt: "PT-AGRINAS" },
  { src: "/perusahaan/BPK.png", alt: "BPK" },
  {
    src: "/perusahaan/Dinas-Kehutanan-PT.Reki.png",
    alt: "Dinas Kehutanan PT.Reki",
  },
  { src: "/perusahaan/Kemendagri.svg", alt: "Kemendagri" },
  { src: "/perusahaan/Kementrian-ATRBPN.svg", alt: "Kementrian-ATRBPN" },
];

/**
 * Komponen untuk satu item logo.
 * Ini akan di-render di dalam loop.
 */
interface LogoItemProps {
  src: string;
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ src, alt }) => (
  <div className="flex-shrink-0 w-40 mx-4 flex items-center justify-center">
    <img
      src={src}
      alt={`Mitra: ${alt} – Klien BJB Rental Mobil Palembang`}
      className="h-16 md:h-16 object-contain cursor-pointer"
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          "https://placehold.co/150x50/gray/white?text=Logo+Error";
      }}
    />
  </div>
);

/**
 * Komponen Utama (Default Export)
 * Ini adalah komponen slider klien
 */
const FeaturedClients: React.FC = () => {
  // Hitung durasi animasi berdasarkan jumlah logo.
  // Sekitar 3 detik per logo.
  const animationDuration = `${clientLogos.length * 3}s`;

  return (
    <>
      {/* Kita perlu mendefinisikan @keyframes CSS secara manual.
        Tailwind tidak bisa membuat animasi 'translateX(-50%)' secara default.
        Ini menggerakkan 'track' dari 0% ke -50% (karena kita duplikat logonya).
      */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .animate-scroll {
            animation: scroll ${animationDuration} linear infinite;
          }
        `}
      </style>

      <div className="bg-white w-full  py-16 md:py-20 ">
        <div className="max-w-6xl mx-auto px-4">
          {/* Judul Section */}
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 tracking-wider uppercase">
            DIPERCAYA 100+ PERUSAHAAN BESAR DI INDONESIA
          </h2>
          <p className="text-center font-inter font-medium text-gray-700 uppercase leading-relaxed">
            LEBIH DARI 100++ PERUSAHAAN DI INDONESIA TELAH MENGGUNAKAN
            <span className="font-bold"> BJB RENTAL MOBIL PALEMBANG</span>{" "}
            SEBAGAI JASA SEWA MOBIL PALEMBANG TERPERCAYA
          </p>
          {/* Container Viewport:
            - 'relative': Agar bisa menampung 'fade' absolut.
            - 'overflow-hidden': Menyembunyikan logo di luar area.
            - 'group': Untuk me-manage 'hover' (jika ingin pause on hover).
          */}
          <div
            className="relative w-full overflow-hidden mt-10"
            aria-label="Daftar perusahaan klien BJB Rental Mobil Palembang"
          >
            {/* Track Animasi:
              - 'flex w-max': Membuat semua item jadi satu baris panjang.
              - 'animate-scroll': Menerapkan keyframes 'scroll'.
              - 'group-hover:paused': (Opsional) Hentikan animasi saat di-hover.
                                     Hapus kelas ini jika tidak ingin pause.
            */}
            <div className="flex w-max  animate-scroll [animation-play-state:running] hover:[animation-play-state:paused]">
              {/* Render 1: Daftar logo pertama */}
              {clientLogos.map((logo, index) => (
                <LogoItem
                  key={`logo-a-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}

              {/* Render 2: Duplikat daftar logo untuk looping mulus */}
              {clientLogos.map((logo, index) => (
                <LogoItem
                  key={`logo-b-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </div>{" "}
            {/* End of track */}
            {/* Efek Fade (Gradien) di Tepi */}
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent" />
          </div>{" "}
          {/* End of viewport */}
        </div>
      </div>
      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Daftar Perusahaan Klien BJB Rental Mobil Palembang",
  "description": "Lebih dari 100 perusahaan nasional dan instansi pemerintahan menggunakan layanan BJB Rental Mobil Palembang.",
  "itemListElement": [
    ${clientLogos
      .map((logo, i) => {
        return `{
          "@type": "Organization",
          "position": ${i + 1},
          "name": "${logo.alt}",
          "url": "https://bjbrentalmobilpalembang.com"
        }`;
      })
      .join(",")}
  ]
}
`}
      </script>
    </>
  );
};

export default FeaturedClients;
