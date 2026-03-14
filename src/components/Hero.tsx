import { motion } from "framer-motion";
import heroImg from "@/assets/idamir-hero.jpeg";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="order-2 lg:order-1"
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-6">
            Psicóloga · CRP 04/48538
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Cuidar da sua saúde emocional é um passo importante para{" "}
            <em className="text-primary not-italic" style={{ fontStyle: "italic" }}>viver melhor.</em>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
            A terapia é um espaço seguro para você se conhecer, acolher suas emoções e construir uma vida com mais equilíbrio e bem-estar.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#sobre"
              className="border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-secondary transition-all duration-200 active:scale-[0.98]"
            >
              Conhecer a Psicóloga
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <img
            src={heroImg}
            alt="Psicóloga Idamir Duarte"
            className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover aspect-[3/4]"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
