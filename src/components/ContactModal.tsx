import { useState } from "react";

const DEFAULT_MESSAGE: string =
  "Halo BJB RENTAL MOBIL PALEMBANG, saya ingin bertanya tentang ketersediaan mobil rental. Bisa dibantu?";

interface AdminContact {
  name: string;
  phone: string;
}

const ADMINS: AdminContact[] = [
  { name: "Marcel", phone: "62895604964463" },
  { name: "Martin", phone: "6289523572666" },
  { name: "Christian", phone: "628993382548" },
  { name: "Hendy", phone: "6281273576534" },
];

export default function ContactModal() {
  const [open, setOpen] = useState<boolean>(false);

  const openWhatsApp = (phone: string): void => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      DEFAULT_MESSAGE
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* BUTTON HUBUNGI KAMI */}
      <button
        onClick={() => setOpen(true)}
        className="bg-yellow-500 text-white font-semibold py-2 px-8 rounded-md shadow-lg hover:bg-yellow-300 transition duration-300"
      >
        Hubungi Kami
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-xl relative">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              Kontak Admin Rental
            </h2>

            {/* LIST ADMIN */}
            <div className="space-y-4">
              {ADMINS.map((admin: AdminContact) => (
                <div
                  key={admin.phone}
                  className="flex justify-between items-center border p-3 rounded-lg"
                >
                  <div>
                    <p className="font-semibold">{admin.name}</p>
                    <p className="text-sm text-gray-600">{admin.phone}</p>
                  </div>

                  <button
                    onClick={() => openWhatsApp(admin.phone)}
                    className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600"
                  >
                    WhatsApp
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
