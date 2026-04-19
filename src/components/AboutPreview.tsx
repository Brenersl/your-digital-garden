import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "@/assets/idamir-about.png";

const AboutPreview = () => {
  return (
    <section id="sobre" className="py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sage uppercase tracking-[0.2em] text-xs font-medium">Sobre</span>
            <h2
              className="text-2xl md:text-3xl mt-4 mb-6 text-balance"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              <span className="text-salmon">Idamir Duarte</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-[0.875rem] leading-[1.9] mb-8">
              <p>
                Sou psicóloga formada pela Faculdade Pitágoras, registrada no Conselho Regional de Psicologia sob o{" "}
                <strong className="text-foreground font-medium">CRP 04/48538</strong>. Minha abordagem é fundamentada na{" "}
                <strong className="text-foreground font-medium">Terapia Cognitivo-Comportamental (TCC)</strong>, uma das
                abordagens mais reconhecidas e eficazes da psicologia contemporânea.
              </p>
              <p>
                Minha missão é oferecer um espaço seguro e acolhedor onde cada pessoa possa se sentir ouvida,
                compreendida e apoiada no processo de autoconhecimento e transformação pessoal.
              </p>
            </div>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
            >
              Saiba mais
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end items-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={aboutImg}
              alt="Psicóloga Idamir Duarte"
              className="rounded-2xl w-full max-w-[520px] h-auto object-contain object-top"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
