import App from "../components/booking-form";
import CarCard from "../components/CarCard";
import Faq from "../components/Faq";
import cars from "../data/cars";
import FeaturedClients from "../components/FeaturedClients";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import Whyuseus from "../components/why-use-us";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredCars = cars.slice(0, 6);
  return (
    <div className=" font-outfit ">
      <HeroSection />
      <App />
      <FeaturedClients />
      <section className="space-y-4 max-w-6xl mx-auto mt-10 ">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 tracking-wider uppercase">
          Pilihan Armada Kami
        </h2>
        <p className="text-center font-inter font-medium text-gray-700 uppercase leading-relaxed mb-20">
          Rental Mobil Palembang Matic / Manual, Include Supir, BBM dan Lepas
          Kunci 2025
        </p>

        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        {/* Link ke halaman Cars lengkap */}
        <div className="max-w-4xl mx-auto bg-yellow-500 rounded-xl  p-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
          {/* Kiri: teks */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-xl  font-sans  text-white mb-2">
              Lihat Pilihan Mobil Lainnya
            </h3>
            {/* <p className="text-gray-700 font-inter text-sm md:text-base">
              Temukan armada lengkap kami dan pilih mobil yang sesuai
              kebutuhanmu.
            </p> */}
          </div>

          {/* Kanan: button */}
          <div>
            <a
              href="/cars"
              className="inline-flex items-center bg-white text-black font-semibold px-5 py-3 rounded-lg shadow "
            >
              Selengkapnya
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
      <Whyuseus />
      <Faq />
      <Gallery />
    </div>
  );
}
