import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-end overflow-hidden">
      {/* Background image with lighter overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end relative z-10 pt-24 pb-0">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="order-2 lg:order-1 lg:col-span-6 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left pb-16">

          <h1
            className="text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem] leading-[1.25] text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
            Acolhimento Profissional
            <br />
            para uma{" "}
            <strong className="font-bold text-sage">Vida Equilibrada</strong>
          </h1>

          {/* Bloco sutil — fundo salmon com alta transparência */}
          <div className="bg-salmon/[0.06] backdrop-blur-sm rounded-2xl px-8 py-6 mb-8 max-w-md border border-salmon/10">
            <p className="text-xs uppercase tracking-[0.2em] font-medium mb-3" style={{ color: "#5B3A2E" }}>
              Psicóloga · CRP 04/48538
            </p>
            <p className="text-muted-foreground text-[0.8rem] leading-[1.85]">
              A terapia é um espaço seguro para você se conhecer, acolher suas emoções e construir uma vida com mais equilíbrio e bem-estar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/agendamento"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]">
              Agendar consulta
            </a>
            <a
              href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 font-medium hover:opacity-80 transition-opacity">
              <WhatsAppIcon size={15} />
              Falar pelo WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end items-end">
          <img
            alt="Psicóloga Idamir Duarte"
            className="w-[240px] sm:w-[300px] lg:w-[360px] xl:w-[400px] max-h-[70vh] h-auto object-contain drop-shadow-[0_2px_8px_hsl(var(--foreground)/0.06)]"
            src="/lovable-uploads/dc50de4b-290c-4de7-a306-cc3254225cff.png" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
