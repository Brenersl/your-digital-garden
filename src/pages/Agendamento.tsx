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
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-accent uppercase tracking-[0.25em] text-sm font-medium">
              Agendamento
            </span>

            <h1
              className="text-4xl md:text-6xl text-foreground mt-4 mb-5 text-balance"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.03em",
              }}
            >
              Agende seu atendimento
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Escolha o melhor horário para sua sessão. Atendimento presencial
              ou online, com praticidade e conforto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl overflow-hidden mb-14 border border-border/40"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/idamirpsi/30min?hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=8B7355"
              style={{
                minWidth: "320px",
                width: "100%",
                height: "950px",
              }}
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
            <p className="text-muted-foreground mb-6 text-lg">
              Prefere agendar diretamente pelo WhatsApp?
            </p>

            <a
              href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] shadow-lg"
            >
              Agendar pelo WhatsApp
              <WhatsAppIcon size={20} />
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