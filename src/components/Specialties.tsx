import { motion } from "framer-motion";
import { Heart, User, Baby, Monitor } from "lucide-react";
import specialtiesImg from "@/assets/idamir-specialties.png";

const services = [
  {
    icon: Heart,
    title: "Terapia de Casal",
    description: "Auxílio na comunicação, resolução de conflitos e fortalecimento do vínculo afetivo entre parceiros.",
  },
  {
    icon: User,
    title: "Psicoterapia Individual",
    description: "Acompanhamento personalizado para autoconhecimento, manejo de emoções e desenvolvimento pessoal.",
  },
  {
    icon: Baby,
    title: "Psicologia Infantil",
    description: "Atendimento lúdico e acolhedor para crianças, promovendo seu desenvolvimento emocional e social.",
  },
  {
    icon: Monitor,
    title: "Atendimento Online",
    description: "Sessões remotas com a mesma qualidade e acolhimento do atendimento presencial, onde quer que você esteja.",
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Especialidades</span>
          <h2
            className="text-3xl md:text-4xl text-foreground mt-4 mb-16 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Como posso te ajudar
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:row-span-2"
          >
            <img
              src={specialtiesImg}
              alt="Idamir Duarte em palestra"
              className="rounded-2xl object-cover w-full h-full max-h-[600px]"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
          </motion.div>

          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 * (i + 1) }}
              className="bg-card rounded-2xl p-8 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              style={{ boxShadow: "var(--shadow-card)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
            >
              <service.icon size={28} strokeWidth={1.5} className="text-primary mb-4" />
              <h3
                className="text-xl text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
