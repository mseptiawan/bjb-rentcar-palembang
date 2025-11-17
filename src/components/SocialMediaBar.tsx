import React from "react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

// Data Media Sosial
const socialLinks = {
  tiktok: "BJBRENTCARPALEMBANG",
  instagram: "https://www.instagram.com/rentcar_palembang/",
  email: "mailto:CV.BUKITJAYABERSAMA@GMAIL.COM",
  whatsapp: "https://wa.me/62895604964463",
};

// Path Logo
const LOGO_PATH = "/logorentcar.png";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-yellow-500 hover:bg-gray-100 transition duration-200 shadow-md"
  >
    {icon}
  </a>
);

const SocialMediaBar: React.FC = () => {
  return (
    <div className="bg-yellow-500 w-full font-sans ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Kiri: Logo & Slogan */}
        <div className="flex items-center space-x-4 h-full">
          <div className="">
            <img
              src={LOGO_PATH}
              alt="Logo BJB RentCar Palembang"
              className="w-18 sm:w-16 object-contain rounded-full"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0";
              }}
            />
          </div>
          <div className="h-full border-l border-white border-opacity-50 mx-4"></div>
          <h1 className="text-sm  sm:text-2xl text-white font-semibold tracking-wide ml-4">
            Butuh Mobil Cepat? BJB Solusinya
          </h1>
        </div>

        {/* Kanan: Ikon Media Sosial */}
        <div className="flex items-center space-x-3">
          <SocialIcon
            href={socialLinks.instagram}
            ariaLabel="Instagram"
            icon={<FaInstagram className="w-5 h-5" />}
          />
          <SocialIcon
            href={socialLinks.whatsapp}
            ariaLabel="WhatsApp"
            icon={<FaWhatsapp className="w-5 h-5" />}
          />
          <SocialIcon
            href={socialLinks.email}
            ariaLabel="Email"
            icon={<FiMail className="w-5 h-5" />}
          />
          <SocialIcon
            href={`https://www.tiktok.com/@${socialLinks.tiktok}`}
            ariaLabel="TikTok"
            icon={<FaTiktok className="w-5 h-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBar;
