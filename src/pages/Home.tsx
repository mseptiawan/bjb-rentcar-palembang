import App from "../components/booking-form";
import FeaturedClients from "../components/FeaturedClients";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className=" font-outfit ">
      <HeroSection />
      <App />
      <FeaturedClients />
    </div>
  );
}
