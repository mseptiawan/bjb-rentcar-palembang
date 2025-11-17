// src/pages/AboutUsPage.jsx
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-outfit space-y-8">
      {/* Hero Section */}
      <section className="text-center bg-yellow-400 text-white rounded-xl p-12 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Sewa Mobil No. 1 di Palembang
        </h1>
        <h2 className="text-2xl font-semibold mb-4">BJB RENTCAR PALEMBANG</h2>
        <p className="text-lg leading-relaxed">
          BJB RENTCAR PALEMBANG merupakan perusahaan jasa sewa mobil di
          Palembang yang menyediakan berbagai jenis kendaraan untuk keperluan
          pribadi maupun perusahaan dengan harga kompetitif. Layanan kami
          mencakup sewa harian, mingguan, maupun luar kota, dengan opsi lepas
          kunci atau menggunakan driver berpengalaman.
        </p>
      </section>

      {/* Detail Layanan */}
      <section className="space-y-4">
        <p className="text-base leading-relaxed">
          Kendaraan kami selalu dalam kondisi bersih, terawat, dan nyaman
          digunakan. Driver BJB RENTCAR profesional, berpengalaman, dan
          menguasai rute di Palembang maupun luar kota, sehingga perjalanan Anda
          aman dan menyenangkan.
        </p>
        <p className="text-base leading-relaxed">
          Kami menyediakan sewa mobil seperti Avanza, Innova Reborn, Hiace
          Commuter, Fortuner, Pajero, Alphard, dan lain-lain. Layanan kami cocok
          untuk perjalanan wisata, bisnis, pernikahan, perjalanan dinas, atau
          kebutuhan pribadi lainnya.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold border-b-4 border-yellow-500 pb-2">
          Visi & Misi
        </h2>
        <p className="text-base leading-relaxed">
          Menjadi perusahaan berkelas dan profesional di dalam bidang
          transportasi darat serta menciptakan nilai bagi stakeholder. Kehadiran
          perusahaan dilihat dari dan untuk mereka yang memiliki kepentingan
          terhadap perusahaan, tidak hanya dari sisi pemilik bisnis semata,
          tetapi juga diperluas ke kelompok yang lebih luas.
        </p>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          <li>
            Meningkatkan kepuasan pelanggan dengan menetapkan kualitas layanan
            terbaik.
          </li>
          <li>Mengantisipasi kecenderungan pasar dan kebutuhan pelanggan.</li>
          <li>
            Mengembangkan Sumber Daya Manusia dan memberikan penghargaan atas
            prestasi kerja.
          </li>
          <li>Meningkatkan kemampuan laba perusahaan secara berkelanjutan.</li>
          <li>Menerapkan tata kelola perusahaan yang baik.</li>
          <li>Menjadi partner yang dapat diandalkan.</li>
          <li>
            Mengutamakan kepuasan pelanggan dalam setiap layanan yang diberikan.
          </li>
        </ul>
      </section>
    </div>
  );
}
