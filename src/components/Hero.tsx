import { motion } from "framer-motion";
import heroImg from "@/assets/idamir-hero.png";
import heroBg from "@/assets/hero-bg.jpg";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[94vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-background/55" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Top accent bar matching the reference */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-20" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative z-10 pt-24 pb-16">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="order-2 lg:order-1 lg:col-span-6 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Psicóloga · CRP 04/48538
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] leading-[1.2] text-foreground mb-5"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
          >
            Acolhimento Profissional
            <br />
            para uma{" "}
            <strong className="font-bold">Vida Equilibrada</strong>
          </h1>

          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
            A terapia é um espaço seguro para você se conhecer, acolher suas emoções e construir uma vida com mais equilíbrio e bem-estar.
          </p>

          <a
            href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
            style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.12)" }}
          >
            Fale Conosco
            <WhatsAppIcon size={18} />
          </a>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end"
        >
          <img
            src={heroImg}
            alt="Psicóloga Idamir Duarte"
            className="w-[320px] sm:w-[400px] lg:w-[500px] xl:w-[540px] h-auto object-contain drop-shadow-[0_18px_28px_hsl(var(--foreground)/0.16)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
