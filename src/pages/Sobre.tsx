import { motion } from "framer-motion";
import { GraduationCap, Heart, Brain, Target, Quote, Sparkles, Monitor } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import aboutImg from "@/assets/idamir-about.jpeg";
import prudemImg1 from "@/assets/idamir-prudem-1.png";
import prudemImg2 from "@/assets/idamir-prudem-2.png";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5 },
};

const Divider = () => (
  <div className="w-16 h-px mx-auto mb-16" style={{ backgroundColor: "hsl(var(--gold))" }} />
);

const SectionIcon = ({ icon: Icon }: { icon: typeof GraduationCap }) => (
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
    style={{ backgroundColor: "hsl(var(--lavender))" }}
  >
    <Icon size={20} style={{ color: "hsl(var(--olive))" }} />
  </div>
);

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pb-28" style={{ backgroundColor: "hsl(var(--offwhite))" }}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div {...fadeIn} className="text-center mb-16">
            <span
              className="inline-block text-sm uppercase tracking-[0.2em] font-medium mb-4"
              style={{ color: "hsl(var(--olive))" }}
            >
              Sobre Mim
            </span>
            <h1
              className="text-3xl md:text-5xl text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Sobre Mim
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Conheça minha história e trajetória na psicologia.
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.05 }} className="flex justify-center mb-16 items-start">
            <img
              src={aboutImg}
              alt="Psicóloga Idamir Duarte"
              className="rounded-2xl w-full max-w-md h-auto object-contain object-top"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
          </motion.div>

          {/* História */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="mb-16">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Minha relação com a psicologia começou muito antes da faculdade. Ela nasceu de experiências profundas que me
                fizeram olhar para o sofrimento emocional de forma muito próxima.
              </p>
              <p>
                Em um momento da minha vida, enfrentei um quadro depressivo que me levou a refletir sobre como nossas
                emoções, pensamentos e experiências podem influenciar profundamente a forma como vivemos e nos relacionamos
                com o mundo.
              </p>
              <p>
                Foi nesse processo de busca por compreensão, conhecimento e transformação que nasceu minha decisão de estudar
                psicologia.
              </p>
              <p>
                Com o tempo, percebi que minha própria jornada poderia se transformar em um propósito maior: ajudar outras
                pessoas a atravessarem momentos difíceis, compreenderem suas dores e reconstruírem caminhos mais saudáveis e
                significativos para suas vidas.
              </p>
            </div>
          </motion.div>

          <Divider />

          {/* Formação */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <SectionIcon icon={GraduationCap} />
              <h2
                className="text-2xl md:text-3xl text-foreground"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                Formação e Especializações
              </h2>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Psicóloga formada pela Faculdade Pitágoras",
                "Registro no Conselho Regional de Psicologia – CRP 04/48538",
                "Pós-graduanda em Terapia Cognitivo-Comportamental (TCC)",
                "Especialização em Terapia de Casais",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-base md:text-lg">
                  <span
                    className="w-2 h-2 rounded-full mt-2.5 shrink-0"
                    style={{ backgroundColor: "hsl(var(--gold))" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Atualmente sou pós-graduanda em Terapia Cognitivo-Comportamental (TCC), abordagem baseada em evidências
              científicas amplamente utilizada no tratamento de diferentes demandas emocionais, como ansiedade, depressão,
              dificuldades nos relacionamentos, baixa autoestima e conflitos pessoais.
            </p>
          </motion.div>

          <Divider />

          {/* Desenvolvimento Profissional */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.18 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <SectionIcon icon={Sparkles} />
              <h2
                className="text-2xl md:text-3xl text-foreground"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                Desenvolvimento Profissional
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
              <p>
                Acredito que o aprendizado nunca para. Por isso, estou constantemente me atualizando e buscando
                novas ferramentas para aprimorar meu trabalho clínico e minha capacidade de comunicação.
              </p>
              <p>
                Atualmente estou fazendo um curso de oratória pela <strong className="text-foreground font-medium">Prudem</strong>, com o objetivo de desenvolver
                ainda mais minha habilidade de comunicação — competência fundamental tanto para o atendimento clínico quanto
                para a promoção de palestras e workshops sobre saúde mental.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={prudemImg1}
                alt="Idamir Duarte no curso de oratória Prudem"
                className="rounded-2xl object-cover w-full h-[280px] md:h-[320px]"
                style={{ boxShadow: "var(--shadow-card)" }}
              />
              <img
                src={prudemImg2}
                alt="Grupo do curso de oratória Prudem"
                className="rounded-2xl object-cover w-full h-[280px] md:h-[320px]"
                style={{ boxShadow: "var(--shadow-card)" }}
              />
            </div>
          </motion.div>

          <Divider />

          {/* Atendimento Online */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <SectionIcon icon={Monitor} />
              <h2
                className="text-2xl md:text-3xl text-foreground"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                Atendimento Online
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Ofereço atendimento psicológico online com o mesmo acolhimento e qualidade do presencial. A modalidade
                online permite que você tenha acesso à terapia de onde estiver, com conforto e praticidade.
              </p>
              <p>
                O atendimento online é regulamentado pelo Conselho Federal de Psicologia através da{" "}
                <strong className="text-foreground font-medium">Resolução CFP nº 11/2018</strong>, que autoriza a
                prestação de serviços psicológicos por meios tecnológicos. Possuo cadastro ativo no{" "}
                <strong className="text-foreground font-medium">e-Psi</strong>, plataforma oficial do CFP para
                regulamentação do atendimento online.
              </p>
            </div>
          </motion.div>

          <Divider />

          {/* Terapia de Casais */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.22 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <SectionIcon icon={Heart} />
              <h2
                className="text-2xl md:text-3xl text-foreground"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                Por que também trabalho com casais
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Minha escolha por me especializar em terapia de casais também se conecta à minha própria história de vida.
              </p>
              <p>
                Após vivenciar um processo de divórcio, pude compreender de forma mais profunda os desafios que os
                relacionamentos podem trazer — desde dificuldades de comunicação até as dores envolvidas nas decisões que os
                casais precisam enfrentar ao longo da vida.
              </p>
              <p>Hoje, meu propósito é ajudar pessoas a construírem relações mais conscientes e saudáveis.</p>
            </div>
          </motion.div>

          <Divider />

          {/* O que esperar da terapia */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.25 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <SectionIcon icon={Brain} />
              <h2
                className="text-2xl md:text-3xl text-foreground"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                O que você pode esperar da terapia
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              A terapia é um processo de autoconhecimento e transformação. Ao longo das sessões, você poderá:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Compreender seus padrões de pensamento e comportamento",
                "Desenvolver habilidades para lidar com emoções difíceis",
                "Fortalecer sua autoestima e autoconfiança",
                "Melhorar seus relacionamentos interpessoais",
                "Encontrar caminhos mais saudáveis para lidar com desafios",
                "Construir uma vida com mais propósito e significado",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-base md:text-lg">
                  <span
                    className="w-2 h-2 rounded-full mt-2.5 shrink-0"
                    style={{ backgroundColor: "hsl(var(--gold))" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <Divider />

          {/* Missão */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <SectionIcon icon={Target} />
              <h2
                className="text-2xl md:text-3xl text-foreground"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                Minha missão
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Minha missão como psicóloga é oferecer um espaço seguro, ético e acolhedor, onde cada pessoa possa
                compreender melhor a si mesma, fortalecer sua saúde emocional, desenvolver relações mais saudáveis e
                construir uma vida com mais sentido.
              </p>
              <p>
                Acredito que, mesmo nos momentos mais difíceis, existe a possibilidade de reconstrução, crescimento e
                transformação.
              </p>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="rounded-2xl p-8 md:p-12 text-center mb-16"
            style={{
              backgroundColor: "hsl(var(--lavender) / 0.4)",
              border: "1px solid hsl(var(--lavender))",
            }}
          >
            <Quote size={32} className="mx-auto mb-4 opacity-40" style={{ color: "hsl(var(--olive))" }} />
            <blockquote
              className="text-xl md:text-2xl text-foreground leading-relaxed italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Um espaço de escuta, acolhimento e transformação para quem deseja compreender sua história e construir novos
              caminhos."
            </blockquote>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.4 }} className="text-center">
            <a
              href="https://wa.me/5531971301409?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
            >
              Falar comigo no WhatsApp
              <WhatsAppIcon size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
