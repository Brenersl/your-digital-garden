import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const articles = [
  {
    title: "Ansiedade: como identificar e tratar",
    description:
      "Entenda os sinais da ansiedade, como ela afeta o corpo e a mente, e descubra caminhos eficazes para lidar com esse transtorno tão comum nos dias de hoje.",
  },
  {
    title: "Quando procurar terapia?",
    description:
      "Muitas pessoas se perguntam qual é o momento certo para buscar ajuda profissional. Saiba identificar os sinais de que a terapia pode ser o próximo passo para você.",
  },
  {
    title: "Benefícios da terapia psicológica",
    description:
      "A psicoterapia vai muito além do tratamento de transtornos. Conheça os benefícios que a terapia pode trazer para sua saúde emocional, relacionamentos e qualidade de vida.",
  },
  {
    title: "Como a terapia cognitivo-comportamental funciona?",
    description:
      "A TCC é uma das abordagens mais eficazes da psicologia moderna. Entenda como ela funciona e como pode ajudar no tratamento de ansiedade, depressão e outros transtornos.",
  },
  {
    title: "A importância do autoconhecimento",
    description:
      "Conhecer a si mesmo é o primeiro passo para uma vida mais equilibrada. Descubra como o autoconhecimento pode transformar seus relacionamentos e sua saúde mental.",
  },
  {
    title: "Terapia de casal: quando buscar ajuda?",
    description:
      "Relacionamentos passam por desafios naturais. Saiba quando é o momento de procurar um profissional e como a terapia de casal pode fortalecer sua relação.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Blog</span>
            <h1
              className="text-3xl md:text-5xl text-foreground mt-4 text-balance"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Artigos sobre saúde mental
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
                className="bg-card rounded-2xl p-8 flex flex-col"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h2
                  className="text-xl text-foreground mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">
                  Em breve
                  <ArrowRight size={16} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
