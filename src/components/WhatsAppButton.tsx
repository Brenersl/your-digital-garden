import WhatsAppIcon from "@/components/WhatsAppIcon";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
};

export default WhatsAppButton;
