import React, { useState } from "react";

/**
 * Tipe data untuk setiap item FAQ.
 * 'answer' menggunakan React.ReactNode agar bisa menerima string
 * atau elemen JSX (seperti <ul> untuk daftar).
 */
interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

/**
 * DAFTAR PERTANYAAN & JAWABAN (FAQ)
 * Edit array ini untuk mengubah konten FAQ.
 */
const faqData: FaqItem[] = [
  {
    question: "Apakah semua mobil bisa disewa lepas kunci?",
    answer:
      "Tidak semua. Sebagian mobil premium seperti Alphard Gen 3 & 4, Hiace, dan beberapa unit tertentu wajib menggunakan driver. Mobil standar seperti Avanza, Innova, Pajero, dan Fortuner bisa lepas kunci.",
  },
  {
    question: "Apa saja syarat dokumen untuk sewa lepas kunci?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>Fotocopy SIM A, KTP, dan KK.</li>
        <li>Menunjukkan dokumen asli saat pengambilan unit.</li>
        <li>
          Deposit sebesar Rp 2.000.000 atau penitipan kendaraan sebagai jaminan.
        </li>
        <li>Membayar di muka saat pengambilan unit.</li>
      </ul>
    ),
  },
  {
    question: "Apa saja syarat untuk sewa dengan driver?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>Fotocopy KTP dan menunjukkan asli saat penjemputan.</li>
        <li>Memberikan alamat lengkap penjemputan dan rute perjalanan.</li>
        <li>Membayar di muka saat penjemputan unit.</li>
      </ul>
    ),
  },
  {
    question: "Apakah harga sewa bisa disesuaikan?",
    answer:
      "Ya. Harga sewa mobil kami bersifat kompetitif dan dapat disesuaikan dengan kebutuhan atau anggaran perusahaan.",
  },
  {
    question: "Apakah unit mobil selalu terawat dan aman?",
    answer:
      "Semua mobil dirawat secara rutin, bersih, nyaman, dan dilindungi oleh asuransi All Risk, termasuk tunjangan pihak ketiga.",
  },
  {
    question: "Apakah ada mobil pengganti jika terjadi kerusakan?",
    answer:
      "Ya. Jika terjadi kerusakan atau kecelakaan, mobil pengganti akan disediakan segera dengan unit sekelas.",
  },
  {
    question: "Apakah saya bisa memesan jangka panjang?",
    answer:
      "Bisa. Kami menyediakan sewa jangka pendek (harian/mingguan) dan sewa jangka panjang (minimal 1 bulan).",
  },
  {
    question: "Apakah driver BJB Rental Mobil berpengalaman?",
    answer:
      "Driver kami terlatih, ramah, sopan, dan menguasai rute tujuan, memastikan perjalanan aman dan nyaman.",
  },
  {
    question: "Apakah BJB Rental Mobil Palembang melayani perusahaan besar?",
    answer:
      "Ya. Kami telah bekerja sama dengan lebih dari 1000 perusahaan, termasuk kementerian, BUMN, dan swasta.",
  },
  {
    question: "Bagaimana cara memesan mobil melalui WhatsApp?",
    answer:
      "Klik tombol Booking Sekarang atau hubungi nomor 0895-6049-64463, tuliskan nama, tanggal rental, tipe mobil, dan layanan (lepas kunci/driver). Pesan otomatis akan dikirim ke tim kami.",
  },
  {
    question: "Apakah ada peraturan tambahan yang harus diketahui penyewa?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>Tidak boleh membawa barang ilegal.</li>
        <li>Semua mobil harus dikembalikan tepat waktu sesuai perjanjian.</li>
        <li>
          Deposit akan dikembalikan setelah unit dikembalikan dalam kondisi
          baik.
        </li>
      </ul>
    ),
  },
  {
    question: "Apa metode pembayaran yang tersedia?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>Pembayaran dilakukan di muka saat pengambilan unit.</li>
        <li>
          Bisa melalui transfer bank BCA ke nomor 6175222336 a.n Hendy, atau
          pembayaran tunai di lokasi.
        </li>
      </ul>
    ),
  },
];

/**
 * Komponen untuk satu item akordeon (pertanyaan & jawaban)
 */
interface AccordionItemProps {
  item: FaqItem;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Tombol Pertanyaan */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-gray-900">{item.question}</span>
        {/* Ikon Plus/Minus */}
        <span
          className={`text-xl text-gray-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      {/* Konten Jawaban (dengan transisi) */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="p-5 pt-0 text-gray-600 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

/**
 * Komponen Utama FAQ (Default Export)
 */
const Faq: React.FC = () => {
  return (
    <section className="bg-white w-full py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Pertanyaan yang Sering Diajukan
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Temukan Layanan Rental Mobil Kami
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Panduan &{" "}
            <span className="relative inline-block">
              FAQ
              {/* Garis bawah kuning */}
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400 transform"></span>
            </span>
          </h2>
        </div>

        {/* Grid untuk FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
