import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl md:text-4xl text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Dê o primeiro passo rumo ao seu{" "}
            <span className="text-sage">bem-estar emocional</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Agende sua primeira sessão e descubra como a terapia pode transformar a sua vida.
          </p>
          <a
            href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
          >
            Agendar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
