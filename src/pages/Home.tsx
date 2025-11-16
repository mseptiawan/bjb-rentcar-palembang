export default function Home() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900">
        Selamat Datang di <span className="text-yellow-400">BJB Rentcar</span>
      </h1>
      <p className="mt-3 text-gray-700 max-w-2xl">
        Penyedia layanan rental mobil terpercaya di Palembang. Unit bersih, AC
        dingin, harga bersahabat, dan bisa lepas kunci atau pakai driver.
      </p>

      <a
        href="/cars"
        className="inline-block mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-md font-semibold"
      >
        Lihat Daftar Mobil
      </a>
    </div>
  );
}
