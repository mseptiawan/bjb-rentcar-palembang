// src/components/SocialMediaIcon.tsx

import React from "react";
import { Instagram, Mail, MessageSquare, Ticket } from "lucide-react";

type IconType = "instagram" | "tiktok" | "email" | "whatsapp";

interface SocialMediaIconProps {
  type: IconType;
  link: string;
  label: string; // tetap ada untuk accessibility (aria-label)
}

const getIcon = (type: IconType) => {
  const iconClass =
    "w-6 h-6 text-yellow-500 transition-colors duration-300 hover:text-yellow-700";
  switch (type) {
    case "instagram":
      return <Instagram className={iconClass} />;
    case "tiktok":
      return <Ticket className={iconClass} />; // TikTok icon placeholder
    case "email":
      return <Mail className={iconClass} />;
    case "whatsapp":
      return <MessageSquare className={iconClass} />;
    default:
      return null;
  }
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  type,
  link,
  label,
}) => {
  const target = type === "email" ? "_self" : "_blank";

  return (
    <a
      href={link}
      target={target}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {getIcon(type)}
    </a>
  );
};

export default SocialMediaIcon;
