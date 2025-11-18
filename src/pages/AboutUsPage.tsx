import React from "react";
import { Users, Car, CheckCircle, Calendar } from "lucide-react"; // <-- Calendar ditambahkan di sini

// Data Visi Misi
const VISI_MISI = {
  VISI: "Menjadi perusahaan berkelas dan profesional di dalam bidang transportasi darat serta menciptakan nilai bagi stakeholder, artinya kehadiran perusahaan harus dilihat dari dan untuk mereka yang memiliki kepentingan terhadap perusahaan, dalam hal ini tidak hanya dari sisi pemilik bisnis semata, akan tetapi diperluas dalam kelompok yang lebih luas.",
  MISI: [
    "Meningkatkan kepuasan pelanggan dengan menetapkan kualitas layanan yang terbaik.",
    "Mengantisipasi kecenderungan pasar dan kebutuhan pelanggan.",
    "Menggembangkan Sumber Daya Manusia serta memberikan perhargaan atas prestasi kerja.",
    "Berusaha meningkatkan kemampuan laba perusahaan.",
    "Menerapkan tata kelola perusahaan yang baik.",
    "Menjadi partner yang dapat diandalkan.",
    "Mengutamakan kepuasan pelanggan dalam pelayanan yang di berikan.",
  ],
};

// Data Statistik Usaha
const STATS = [
  { title: "Pengalaman", value: "6+", unit: "Tahun", Icon: Calendar },
  { title: "Perusahaan Klien", value: "20+", unit: "Perusahaan", Icon: Users },
  { title: "Total Unit", value: "50+", unit: "Mobil", Icon: Car },
  { title: "Klien Puas", value: "100+", unit: "Klien", Icon: CheckCircle },
];

// Komponen Card Statistik
interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  Icon: React.ElementType;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, unit, Icon }) => (
  <div className="bg-white p-6 rounded-xl -md border-t-4 border-yellow-500 transition duration-300 hover:-xl">
    <div className="flex items-center text-black mb-2">
      <Icon className="w-6 h-6 mr-2" />
      <p className="text-sm font-semibold uppercase">{title}</p>
    </div>
    <h3 className="text-4xl font-extrabold text-gray-900">{value}</h3>
    <p className="text-gray-500 font-inter ">{unit}</p>
  </div>
);

// Komponen Halaman Utama
const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-1 md:py-8 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Halaman */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold tracking-wider text-gray-600 uppercase">
            TENTANG KAMI
          </h2>
          <h2 className="text-3xl md:text-5xl font-semibold text-black mt-2">
            Komitmen Kami dalam Transportasi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kolom 1: Gambar & Statistik (Tampil di atas pada Mobile: order-1) */}
          <div className="space-y-10 lg:order-2">
            {" "}
            {/* Di desktop, ini akan pindah ke kanan */}
            {/* Gambar Usaha */}
            <div className="rounded-xl overflow-hidden -2xl">
              <img
                src="/mobil.png" // Menggunakan path /mobil.png sesuai permintaan
                alt="Armada BJB RentCar Palembang"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/700x450/FACC15/FFFFFF?text=FOTO+ARMADA+BJB+RENTCAR";
                }}
              />
            </div>
            {/* Kartu Statistik */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>

          {/* Kolom 2: Deskripsi & Visi Misi (Tampil di bawah pada Mobile: order-2) */}
          <div className="space-y-10 lg:order-1">
            {" "}
            {/* Di desktop, ini akan pindah ke kiri */}
            {/* Deskripsi Usaha (Sintaks class diperbaiki) */}
            <div className="bg-white p-8 rounded-xl -lg border-l-4 border-yellow-500">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                CV. Bukit Jaya Bersama
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed mb-4">
                **BJB RENTCAR PALEMBANG** didirikan pada tahun **2016** dengan
                visi menjadi penyedia layanan transportasi darat terdepan dan
                profesional. Kami menyediakan beragam jenis kendaraan sewaan
                (*Rent Car*) dari berbagai kelas, mulai dari MPV ekonomis hingga
                unit mewah dan Double Cabin 4x4.
              </p>
              <p className="text-gray-600 font-inter  leading-relaxed">
                Kami berkomitmen untuk selalu menyediakan kendaraan yang
                **terawat, bersih, dan terbaru**, didukung oleh driver yang
                terlatih dan berpengalaman dalam menguasai berbagai rute di
                Palembang dan luar kota. Kepuasan pelanggan adalah prioritas
                utama kami, terbukti dari kepercayaan yang telah diberikan oleh
                institusi dan lebih dari 100 klien perorangan dan perusahaan.
              </p>
            </div>
            {/* Visi & Misi (Sintaks class diperbaiki) */}
            <div className="space-y-6 p-8 bg-white rounded-xl -lg">
              <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2">
                Visi & Misi Kami
              </h3>

              {/* Visi */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold text-gray-800 mb-1">VISI</h4>
                <p className="text-gray-700 font-inter   text-sm">
                  {VISI_MISI.VISI}
                </p>
              </div>

              {/* Misi */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold text-gray-800 mb-1">MISI</h4>
                <ul className="list-disc list-inside  font-inter  space-y-1 text-gray-700 text-sm">
                  {VISI_MISI.MISI.map((m, index) => (
                    <li key={index}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
