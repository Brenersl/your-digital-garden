import { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const ContactForm = () => {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    atendimento: "",
    idade: "",
    profissao: "",
    jaFezTerapia: "",
    motivo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `Olá, meu nome é ${form.nome}.

Gostaria de informações sobre atendimento psicológico.

✔ Atendimento: ${form.atendimento}
✔ Idade: ${form.idade}
✔ Profissão: ${form.profissao}
✔ Já fez terapia: ${form.jaFezTerapia}
✔ Motivo: ${form.motivo}`;

    const encoded = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5531971301409?text=${encoded}`, "_blank");
  };

  const inputClass =
    "w-full rounded-xl border border-border/60 bg-background px-5 py-3 text-foreground text-[0.85rem] placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all";

  return (
    <section id="contato" className="py-28 bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sage uppercase tracking-[0.2em] text-xs font-medium">Contato</span>
          <h2
            className="text-2xl md:text-3xl text-foreground mt-4 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Entre em contato
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-salmon/[0.03] rounded-2xl p-8 md:p-10 space-y-5 border border-salmon/8"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[0.8rem] font-medium text-foreground mb-2">Nome</label>
              <input
                type="text"
                name="nome"
                required
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[0.8rem] font-medium text-foreground mb-2">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="(00) 00000-0000"
                value={form.whatsapp}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-[0.8rem] font-medium text-foreground mb-2">
              Atendimento: para você ou outra pessoa?
            </label>
            <select
              name="atendimento"
              required
              value={form.atendimento}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Selecione</option>
              <option value="Para mim">Para mim</option>
              <option value="Para outra pessoa">Para outra pessoa</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[0.8rem] font-medium text-foreground mb-2">Idade</label>
              <input
                type="text"
                name="idade"
                required
                placeholder="Sua idade"
                value={form.idade}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[0.8rem] font-medium text-foreground mb-2">Profissão</label>
              <input
                type="text"
                name="profissao"
                required
                placeholder="Sua profissão"
                value={form.profissao}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-[0.8rem] font-medium text-foreground mb-2">Já fez terapia antes?</label>
            <select
              name="jaFezTerapia"
              required
              value={form.jaFezTerapia}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>

          <div>
            <label className="block text-[0.8rem] font-medium text-foreground mb-2">
              O que te motivou a buscar ajuda?
            </label>
            <textarea
              name="motivo"
              required
              rows={4}
              placeholder="Conte brevemente o que te motivou..."
              value={form.motivo}
              onChange={handleChange}
              className={inputClass + " min-h-[100px] resize-none"}
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
          >
            Enviar e falar no WhatsApp
            <WhatsAppIcon size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
