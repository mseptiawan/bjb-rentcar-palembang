import App from "../components/booking-form";
import Faq from "../components/Faq";
import FeaturedClients from "../components/FeaturedClients";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import Whyuseus from "../components/why-use-us";

export default function Home() {
  return (
    <div className=" font-outfit ">
      <HeroSection />
      <App />
      <FeaturedClients />
      <Whyuseus />
      <Faq />
      <Gallery />
    </div>
  );
}
