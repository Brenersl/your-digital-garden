import { motion } from "framer-motion";
import { CheckCircle, Users, User, Heart } from "lucide-react";

const items = [
  "Se sente emocionalmente sobrecarregado(a)",
  "Vive ansiedade, insegurança ou conflitos internos",
  "Tem dificuldade em relacionamentos",
  "Sente que perdeu a si mesmo(a)",
  "Quer se fortalecer emocionalmente e se conhecer melhor",
];

const publicoAlvo = [
  {
    icon: User,
    label: "Adolescentes",
    desc: "Acolhimento e escuta ativa para os desafios da adolescência, com sigilo e respeito.",
  },
  {
    icon: Users,
    label: "Adultos",
    desc: "Atendimento online e presencial para quem busca autoconhecimento e equilíbrio emocional.",
  },
  {
    icon: Heart,
    label: "Casais",
    desc: "Terapia de casal focada em comunicação, reconexão e fortalecimento do vínculo.",
  },
];

const ParaQuem = () => {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sage uppercase tracking-[0.2em] text-xs font-medium">Atendimento</span>
          <h2
            className="text-2xl md:text-3xl text-foreground mt-4 mb-4 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Para quem é o atendimento
          </h2>
          <p className="text-muted-foreground text-[0.875rem] max-w-2xl mx-auto leading-relaxed">
            Esse espaço é para você que:
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * (i + 1) }}
              className="flex items-start gap-4 py-4 border-b border-border/50 last:border-b-0"
            >
              <CheckCircle size={18} strokeWidth={1.5} className="text-sage mt-0.5 shrink-0" />
              <p className="text-foreground text-[0.875rem] md:text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.15em] font-medium mb-10">
            Público
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {publicoAlvo.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * (i + 1) + 0.3 }}
                className="bg-salmon/[0.04] rounded-2xl p-7 text-center border border-salmon/8"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <p.icon size={24} strokeWidth={1.5} className="text-salmon mx-auto mb-3" />
                <p className="text-foreground font-medium text-[0.9rem] mb-2">{p.label}</p>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.7]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParaQuem;
