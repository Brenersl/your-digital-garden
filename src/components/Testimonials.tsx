import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Moro em Belo Horizonte-MG e faço terapia com a Dra. Idamir Duarte há 2 anos. Ela me deu suporte online pós-pandemia e foi um divisor de águas na minha vida. Com sua inteligência e profissionalismo, resgatei áreas minhas que estavam desvalorizadas e reencontrei significado na vida.",
    name: "Paulo Fortes",
    specialty: "Psicoterapia Individual",
  },
  {
    text: "Fazer terapia não é fraqueza, é coragem. É olhar para dentro, enfrentar a dor e escolher se curar. A Dra. Idamir me ajuda a me ver, me entender e me apoiar, sendo uma profissional excelente e humana, que só tenho a agradecer.",
    name: "Dayson Souza Bitaraes",
    specialty: "Psicoterapia Individual",
  },
  {
    text: "A Dra. Idamir une profissionalismo, sensibilidade e técnica na terapia cognitivo-comportamental. Cria um ambiente seguro, respeitoso e colaborativo, facilitando autoconhecimento e desenvolvimento pessoal. Recomendo com confiança.",
    name: "Nagela Gomes",
    specialty: "Psicoterapia Cognitivo-Comportamental",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Depoimentos</span>
          <h2
            className="text-3xl md:text-4xl text-foreground mt-4 mb-16 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            O que dizem sobre o atendimento
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
              className="bg-background rounded-2xl p-8 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote size={24} strokeWidth={1.5} className="text-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-8">
                "{t.text}"
              </p>
              <div>
                <p className="text-foreground font-medium text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
