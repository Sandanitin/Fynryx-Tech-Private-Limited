import React from "react";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+916303336490";
  const message = "Hello, I'm interested in your courses!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        aria-label="Chat with us on WhatsApp"
      >
        <Phone size={24} className="text-white md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default WhatsAppButton;