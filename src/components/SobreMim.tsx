import { motion } from "framer-motion";
import { GraduationCap, Heart, Brain, Target, Quote, Sparkles } from "lucide-react";
import prudemImg1 from "@/assets/idamir-prudem-1.png";
import prudemImg2 from "@/assets/idamir-prudem-2.png";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const SobreMim = () => {
  return (
    <section id="sobre-mim" className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--offwhite))" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <span
            className="inline-block text-sm uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: "hsl(var(--olive))" }}
          >
            Sobre Mim
          </span>
          <h2
            className="text-3xl md:text-5xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Sobre Mim
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Conheça minha história e trajetória na psicologia.
          </p>
        </motion.div>

        {/* Minha história */}
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
              Ao mesmo tempo, observar meu filho ainda criança passando por momentos de tristeza e sofrimento emocional
              despertou em mim um desejo muito forte de compreender melhor a mente humana e buscar caminhos que pudessem
              ajudar pessoas que também estivessem enfrentando dificuldades psicológicas.
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

        {/* Divider */}
        <div className="w-16 h-px mx-auto mb-16" style={{ backgroundColor: "hsl(var(--gold))" }} />

        {/* Formação */}
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(var(--lavender))" }}
            >
              <GraduationCap size={20} style={{ color: "hsl(var(--olive))" }} />
            </div>
            <h3
              className="text-2xl md:text-3xl text-foreground"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Formação e Especializações
            </h3>
          </div>

          <ul className="space-y-3 mb-6">
            {[
              "Psicóloga formada pela Faculdade Pitágoras",
              "Registro no Conselho Regional de Psicologia – CRP 04/48538",
              "Pós-graduanda em Terapia Cognitivo-Comportamental (TCC)",
              "Especialização em Terapia de Casais",
              "Formação em Recursos Lúdicos para Psicoterapia Infantil",
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

        {/* Divider */}
        <div className="w-16 h-px mx-auto mb-16" style={{ backgroundColor: "hsl(var(--gold))" }} />

        {/* Desenvolvimento Profissional Contínuo */}
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.18 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(var(--lavender))" }}
            >
              <Sparkles size={20} style={{ color: "hsl(var(--olive))" }} />
            </div>
            <h3
              className="text-2xl md:text-3xl text-foreground"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Desenvolvimento Profissional Contínuo
            </h3>
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            <p>
              Acredito que o aprendizado nunca para. Por isso, estou constantemente me atualizando e buscando
              novas ferramentas para aprimorar meu trabalho clínico e minha capacidade de comunicação.
            </p>
            <p>
              Atualmente estou fazendo um curso de oratória pela <strong>Prudem</strong>, com o objetivo de desenvolver
              ainda mais minha habilidade de comunicação e transmissão de conhecimento — competências fundamentais tanto
              para o atendimento clínico quanto para a promoção de palestras e workshops sobre saúde mental.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={prudemImg1}
              alt="Idamir Duarte participando de curso de oratória na Prudem"
              className="rounded-2xl object-cover w-full h-[280px] md:h-[320px]"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
            <img
              src={prudemImg2}
              alt="Grupo de participantes do curso de oratória Prudem"
              className="rounded-2xl object-cover w-full h-[280px] md:h-[320px]"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-16 h-px mx-auto mb-16" style={{ backgroundColor: "hsl(var(--gold))" }} />

        {/* Terapia de Casais */}
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(var(--lavender))" }}
            >
              <Heart size={20} style={{ color: "hsl(var(--olive))" }} />
            </div>
            <h3
              className="text-2xl md:text-3xl text-foreground"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Por que também trabalho com casais
            </h3>
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

        {/* Divider */}
        <div className="w-16 h-px mx-auto mb-16" style={{ backgroundColor: "hsl(var(--gold))" }} />

        {/* Como eu trabalho */}
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.25 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(var(--lavender))" }}
            >
              <Brain size={20} style={{ color: "hsl(var(--olive))" }} />
            </div>
            <h3
              className="text-2xl md:text-3xl text-foreground"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Como eu trabalho
            </h3>
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Uma das minhas principais habilidades clínicas é o acolhimento empático do sofrimento humano. Busco oferecer
              um espaço em que cada pessoa possa se sentir verdadeiramente ouvida, compreendida e respeitada em sua
              história.
            </p>
            <p>
              Além do cuidado com a saúde emocional, também trabalho o desenvolvimento pessoal, ajudando pacientes a
              compreender padrões de pensamento, fortalecer recursos internos e construir caminhos mais alinhados com seus
              valores e propósito.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-16 h-px mx-auto mb-16" style={{ backgroundColor: "hsl(var(--gold))" }} />

        {/* Missão */}
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(var(--lavender))" }}
            >
              <Target size={20} style={{ color: "hsl(var(--olive))" }} />
            </div>
            <h3
              className="text-2xl md:text-3xl text-foreground"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Minha missão
            </h3>
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

        {/* Quote highlight */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-2xl p-8 md:p-12 text-center relative"
          style={{
            backgroundColor: "hsl(var(--lavender) / 0.4)",
            border: "1px solid hsl(var(--lavender))",
          }}
        >
          <Quote
            size={32}
            className="mx-auto mb-4 opacity-40"
            style={{ color: "hsl(var(--olive))" }}
          />
          <blockquote
            className="text-xl md:text-2xl text-foreground leading-relaxed italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "Um espaço de escuta, acolhimento e transformação para quem deseja compreender sua história e construir novos
            caminhos."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default SobreMim;
