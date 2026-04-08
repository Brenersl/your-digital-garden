import { motion } from "framer-motion";
import heroImg from "@/assets/idamir-hero.png";
import heroBg from "@/assets/hero-bg.jpg";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true" />
        
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-background/55" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Top accent bar matching the reference */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-20" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end relative z-10 pt-24 pb-0">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="order-2 lg:order-1 lg:col-span-6 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left pb-16">
          
          <p className="uppercase tracking-[0.2em] text-xs font-medium mb-4" style={{ color: "#5B3A2E" }}>
            Psicóloga · CRP 04/48538
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] leading-[1.2] text-foreground mb-5"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
            
            Acolhimento Profissional
            <br />
            para uma{" "}
            <strong className="font-bold">Vida Equilibrada</strong>
          </h1>

          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
            A terapia é um espaço seguro para você se conhecer, acolher suas emoções e construir uma vida com mais equilíbrio e bem-estar.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/agendamento"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
              style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.12)" }}>
              Agendar consulta
            </a>
            <a
              href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground font-medium hover:opacity-80 transition-opacity">
              <WhatsAppIcon size={18} />
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
            className="w-[280px] sm:w-[340px] lg:w-[400px] xl:w-[440px] max-h-[75vh] h-auto object-contain drop-shadow-[0_8px_20px_hsl(var(--foreground)/0.12)]"
            src="/lovable-uploads/dc50de4b-290c-4de7-a306-cc3254225cff.png" />
          
        </motion.div>
      </div>
    </section>);

};

export default Hero;