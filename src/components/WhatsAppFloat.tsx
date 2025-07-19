import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo seu número do WhatsApp (formato: 5511999999999)
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de saber mais sobre os kits de festa da Decorae.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      
      {/* Pulse effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
    </button>
  );
};