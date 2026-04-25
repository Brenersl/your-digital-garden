import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const Agendamento = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Agendamento</span>
            <h1
              className="text-3xl md:text-5xl text-foreground mt-4 mb-4 text-balance"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Agende seu atendimento
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Escolha o melhor horário para sua sessão. O atendimento pode ser presencial ou online, conforme sua preferência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl overflow-hidden mb-12"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/idamirpsi/30min?hide_gdpr_banner=1&hide_landing_page_details=0&primary_color=8B7355"
              style={{ minWidth: "320px", width: "100%", height: "700px" }}
            />
            <noscript>
              <a
                href="https://calendly.com/idamirpsi/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo Calendly
              </a>
            </noscript>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Prefere agendar diretamente pelo WhatsApp?
            </p>
            <a
              href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
            >
              Agendar pelo WhatsApp
              <WhatsAppIcon size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Agendamento;
