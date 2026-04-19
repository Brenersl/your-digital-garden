import { motion } from "framer-motion";
import aboutImg from "@/assets/idamir-about.jpeg";
import galleryImg from "@/assets/idamir-gallery.png";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Sobre</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2
              className="text-3xl md:text-4xl text-foreground mb-8 text-balance"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Idamir Duarte
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Sou psicóloga formada pela Faculdade Pitágoras, registrada no Conselho Regional de Psicologia sob o{" "}
                <strong className="text-foreground font-medium">CRP 04/48538</strong>. Minha abordagem é fundamentada na{" "}
                <strong className="text-foreground font-medium">Terapia Cognitivo-Comportamental (TCC)</strong>, uma das abordagens mais reconhecidas e eficazes da psicologia contemporânea.
              </p>
              <p>
                Ao longo da minha trajetória profissional, busquei me especializar em áreas que me permitem atender pessoas em diferentes momentos da vida. Possuo formação em TCC para casais e em recursos lúdicos para psicoterapia infantil, o que me permite trabalhar com crianças, adultos e casais de forma acolhedora e personalizada.
              </p>
              <p>
                Minha missão é oferecer um espaço seguro e acolhedor onde cada pessoa possa se sentir ouvida, compreendida e apoiada no processo de autoconhecimento e transformação pessoal.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={aboutImg}
              alt="Psicóloga Idamir Duarte"
              className="rounded-2xl object-cover w-full aspect-[3/4]"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
            <img
              src={galleryImg}
              alt="Idamir Duarte em atendimento"
              className="rounded-2xl object-cover w-full aspect-[3/4] mt-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
