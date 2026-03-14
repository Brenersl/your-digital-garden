import { motion } from "framer-motion";
import heroImg from "@/assets/idamir-hero.jpeg";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-secondary/40 z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative z-10">
        {/* Text Column - 7 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="order-2 lg:order-1 lg:col-span-7 lg:pr-12 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-5">
            Psicóloga · CRP 04/48538
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.18] text-foreground mb-5 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Acolhimento Profissional{" "}
            <br className="hidden sm:block" />
            para uma{" "}
            <strong className="font-bold">Vida Equilibrada</strong>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            A terapia é um espaço seguro para você se conhecer, acolher suas emoções e construir uma vida com mais equilíbrio e bem-estar.
          </p>

          <a
            href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98] shadow-md"
          >
            Agendar pelo WhatsApp
          </a>
        </motion.div>

        {/* Image Column - 5 cols */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
        >
          <img
            src={heroImg}
            alt="Psicóloga Idamir Duarte"
            className="w-[320px] sm:w-[400px] lg:w-[480px] xl:w-[520px] rounded-2xl object-cover aspect-[3/4]"
            style={{
              boxShadow: "0 8px 30px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
