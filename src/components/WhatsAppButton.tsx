import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={1.5} />
    </a>
  );
};

export default WhatsAppButton;
