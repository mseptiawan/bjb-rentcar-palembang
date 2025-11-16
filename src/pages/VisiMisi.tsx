export default function VisiMisi() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Visi & Misi</h1>

      <div className="mt-6 space-y-6">
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-5">
          <h2 className="text-xl font-semibold text-gray-900">Visi</h2>
          <p className="text-gray-700 mt-2">
            Menjadi layanan rental mobil paling terpercaya dan profesional di
            Palembang, dengan pelayanan prima dan unit kendaraan terawat.
          </p>
        </div>

        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-5">
          <h2 className="text-xl font-semibold text-gray-900">Misi</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>Menyediakan kendaraan terbaik dan nyaman.</li>
            <li>Memberikan harga yang kompetitif dengan layanan maksimal.</li>
            <li>Menjamin kebersihan serta perawatan mobil secara berkala.</li>
            <li>Memastikan keamanan dan kenyamanan pelanggan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
