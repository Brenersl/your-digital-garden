import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Ansiedade: como identificar e tratar",
    description:
      "Entenda os sinais da ansiedade, como ela afeta o corpo e a mente, e descubra caminhos eficazes para lidar com esse transtorno tão comum nos dias de hoje.",
    slug: "ansiedade-como-identificar-e-tratar",
  },
  {
    title: "Quando procurar terapia?",
    description:
      "Muitas pessoas se perguntam qual é o momento certo para buscar ajuda profissional. Saiba identificar os sinais de que a terapia pode ser o próximo passo para você.",
    slug: "quando-procurar-terapia",
  },
  {
    title: "Benefícios da terapia psicológica",
    description:
      "A psicoterapia vai muito além do tratamento de transtornos. Conheça os benefícios que a terapia pode trazer para sua saúde emocional, relacionamentos e qualidade de vida.",
    slug: "beneficios-da-terapia-psicologica",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sage uppercase tracking-[0.2em] text-xs font-medium">Blog</span>
          <h2
            className="text-3xl md:text-4xl text-foreground mt-4 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Artigos sobre saúde mental
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
              className="bg-card rounded-2xl p-8 flex flex-col border border-border/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3
                className="text-lg text-foreground mb-3 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="border-b border-salmon/30 pb-0.5">{article.title}</span>
              </h3>
              <p className="text-muted-foreground text-[0.85rem] leading-[1.8] flex-1 mb-6">
                {article.description}
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sage text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Ler mais
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
          >
            Ver todos os artigos
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
