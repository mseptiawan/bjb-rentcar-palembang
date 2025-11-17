import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

// Data Kontak dan Lokasi (menggunakan koordinat dari Google Maps yang lebih presisi)
const contactData = {
  phone: "0895604964463",
  whatsapp: "0895604964463",
  email: "CV.BUKITJAYABERSAMA@GMAIL.COM",
  address:
    "Jl. Taqwa Mata Merah, Perumahan GHP III Blok D12, Palembang, Sumatera Selatan, 30119",
  lat: -2.9963271, // Latitude BJB RENTCAR PALEMBANG
  lng: 104.7298396, // Longitude BJB RENTCAR PALEMBANG
  googleMapsPlaceId: "0x2e3b9f5ccb5ee159:0x524caf4468486d0a", // ID tempat untuk link Google Maps
};
const ContactInfoBox: React.FC<{
  Icon: React.ElementType;
  title: string;
  detail: string;
  link?: string;
}> = ({ Icon, title, detail, link }) => (
  <div className="flex items-start mb-6">
    <div className="p-3 mr-4 rounded-full bg-yellow-500/10">
      <Icon className="w-6 h-6 text-yellow-500" />
    </div>
    <div>
      <p className="text-lg font-semibold text-gray-700">{title}</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-lg  text-gray-800 hover:text-yellow-500 transition-colors "
        >
          {detail}
        </a>
      ) : (
        <p className="text-sm md:text-lg  text-gray-800">{detail}</p>
      )}
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  // Komponen pembantu untuk Info Box

  // Link Google Maps untuk HANYA melihat lokasi (place view)
  const googleMapsPlaceLink = `https://www.google.com/maps/search/?api=1&query=${contactData.lat},${contactData.lng}&query_place_id=${contactData.googleMapsPlaceId}`;

  // URL Google Maps Embed (iframe)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${contactData.lat},${contactData.lng}&hl=id&z=17&output=embed`;

  return (
    <div className="min-h-screen p-8 bg-white pt-1 md:p-12 font-outfit">
      <div className="max-w-6xl mx-auto">
        {/* Header Kontak Kami */}
        <div className="mb-10">
          <h2 className="text-xl font-bold tracking-wider text-gray-600 uppercase">
            KONTAK KAMI
          </h2>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Hubungi BJB RentCar Palembang
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Kolom Kiri: Peta (menggunakan Iframe) */}
          <div className="lg:order-1">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              Lokasi Kami
            </h3>
            <div className="overflow-hidden rounded-xl shadow-xl  relative">
              {/* Google Maps Iframe */}
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="490"
                style={{ border: 0 }}
                allowFullScreen={false} // Atur ke false karena menggunakan output=embed sederhana
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BJB Rental Mobil Palembang"
              ></iframe>

              {/* Card Info Bisnis (menggantikan Tooltip yang bermasalah) */}
              <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-2xl  w-64 text-center z-10">
                <h4 className="text-yellow-600 font-extrabold text-xl">
                  BJB RentCar Palembang
                </h4>
                <p className="text-xs text-gray-600 mt-1 mb-2">
                  {contactData.address}
                </p>

                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href={`https://wa.me/${contactData.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-yellow-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 mr-1" /> Chat WA
                  </a>
                  <a
                    // Link ini hanya membuka tampilan lokasi di Google Maps (bukan mode directions/arah)
                    href={googleMapsPlaceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-yellow-500  text-white px-3 py-2 rounded-lg text-sm font-semibold transition shadow-md"
                  >
                    <MapPin className="w-4 h-4 mr-1" /> Titik Lokasi
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Informasi Kontak & Sosial Media */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-2xl lg:order-2 h-fit">
            <h3 className="mb-8 text-3xl font-bold text-gray-800 border-b-4 border-yellow-500 pb-3">
              Informasi Kontak
            </h3>

            <div className="flex flex-col gap-6">
              <ContactInfoBox
                Icon={MessageSquare}
                title="WhatsApp"
                detail={contactData.whatsapp}
                link={`https://wa.me/${contactData.whatsapp}`}
              />
              <ContactInfoBox
                Icon={Phone}
                title="Telepon"
                detail={contactData.phone}
                link={`tel:${contactData.phone}`}
              />
              <ContactInfoBox
                Icon={Mail}
                title="Email Bisnis"
                detail={contactData.email}
                link={`mailto:${contactData.email}`}
              />
              <ContactInfoBox
                Icon={MapPin}
                title="Alamat Lengkap"
                detail={contactData.address}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
