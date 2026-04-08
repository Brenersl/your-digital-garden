import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o atendimento?",
    answer:
      "O atendimento é baseado na Terapia Cognitivo-Comportamental (TCC), uma abordagem científica e eficaz. As sessões duram em média 50 minutos e são realizadas semanalmente. Na primeira sessão, conversamos sobre suas necessidades e expectativas para traçar um plano terapêutico personalizado.",
  },
  {
    question: "O atendimento é online ou presencial?",
    answer:
      "Ofereço atendimento tanto presencial quanto online. O atendimento online é realizado por videoconferência, com a mesma qualidade e acolhimento do presencial, regulamentado pelo Conselho Federal de Psicologia (Resolução CFP nº 11/2018). Você pode escolher a modalidade que melhor se encaixa na sua rotina.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é realizado por sessão, via PIX ou transferência bancária, antes do atendimento. Não trabalho com convênios. Caso precise cancelar ou remarcar, solicito aviso com pelo menos 24 horas de antecedência.",
  },
  {
    question: "Sobre o investimento",
    answer:
      "O valor da sessão é informado no primeiro contato pelo WhatsApp. Acredito que investir em saúde mental é um dos melhores investimentos que você pode fazer por si mesmo(a). Entre em contato para saber mais sobre valores e condições.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Dúvidas</span>
          <h2
            className="text-3xl md:text-4xl text-foreground mt-4 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background rounded-2xl px-6 border-none"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <AccordionTrigger className="text-foreground text-base md:text-lg font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
