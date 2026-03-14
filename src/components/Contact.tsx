import { motion } from "framer-motion";
import { MessageCircle, Clock, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(31) 97130-1409",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sáb · 08:00 – 20:00",
  },
  {
    icon: MapPin,
    label: "Atendimento",
    value: "Presencial e Online",
  },
];

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Contato</span>
          <h2
            className="text-3xl md:text-4xl text-foreground mt-4 mb-16 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Entre em contato
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
              className="bg-background rounded-2xl p-8 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <item.icon size={28} strokeWidth={1.5} className="text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
              <p className="text-foreground font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
          >
            Fale comigo pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
