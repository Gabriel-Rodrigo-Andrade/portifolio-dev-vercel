import { motion } from 'motion/react';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const experiences = [
    {
      role: "Desenvolvedor Full Stack",
      company: "Freelance & Projetos Próprios",
      period: "2023 - Presente",
      description: "Desenvolvimento de sistemas personalizados com foco em PHP, Laravel, Vue.js e integrações de API. Especialista em automação de processos e criação de interfaces dinâmicas.",
      status: "ATUAL"
    },
    {
      role: "Líder de Suporte Técnico (N2)",
      company: "TI & Infraestrutura",
      period: "2021 - 2023",
      description: "Liderança de equipe técnica, resolução de problemas complexos de infraestrutura e otimização de fluxos de suporte.",
      status: "LOG"
    },
    {
      role: "Suporte Técnico (N1)",
      company: "Atendimento Técnico",
      period: "2020 - 2021",
      description: "Diagnóstico e resolução de incidentes técnicos, suporte ao usuário final e manutenção de hardware/software.",
      status: "ROOT"
    }
  ];

  return (
    <section id="about" className="bg-void border-x border-line max-w-[1600px] mx-auto mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-line">
        <div className="p-8 border-r border-line flex items-center">
          <span className="font-mono text-[10px] text-white/30 uppercase block tracking-[0.2em]">03_SYSTEM_LOGS</span>
        </div>
        <div className="md:col-span-3 p-8">
           <div className="flex items-center gap-4 text-neon">
             <span className="w-10 h-[1px] bg-neon" />
             <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Trajetória e Operação Escalonada</h2>
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start relative bg-void" ref={containerRef}>
        {/* Left Column: Philosophy (Sticky Context) */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] p-8 md:p-24 border-b lg:border-b-0 lg:border-r border-line flex flex-col justify-center bg-void z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 border-l-4 border-neon pl-6 md:pl-10"
          >
            <span className="font-mono text-[10px] text-neon uppercase block tracking-widest">_Philosophy</span>
            <p className="text-highlight-texture text-3xl lg:text-5xl uppercase transition-all duration-300">
              Transformando <span className="text-highlight-texture-neon">ideias</span> em realidade digital.
            </p>
            <p className="text-lg text-white/60 font-light leading-relaxed mt-6">
              Sou desenvolvedor Full Stack com sólida experiência em PHP, Vue.js e ecossistemas web modernos. Meu foco é construir aplicações que não apenas funcionam, mas que resolvem problemas reais com eficiência e performance. 
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden lg:block mt-20 space-y-6 pt-12 border-t border-white/10"
          >
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-neon animate-pulse" />
              <span className="text-[10px] uppercase text-white/40 tracking-widest">Foco Atual</span>
            </div>
            <p className="text-highlight-texture text-xl uppercase transition-all duration-300">
              Especialista em <span className="text-highlight-texture-neon">Desenvolvimento Web</span>
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">_System_Operational_Confidence: 99%</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Execution History (Stacked Scrolling Experiences) */}
        <div className="w-full lg:w-1/2 flex flex-col bg-line/5 relative">
          <div className="absolute top-8 left-8 lg:left-16 z-20">
            <span className="font-mono text-[10px] text-white/40 uppercase block tracking-widest">_Execution_History</span>
          </div>
          
          <div className="flex flex-col">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                className="py-12 lg:py-24 px-8 lg:px-20 border-b border-line/30 last:border-b-0 relative group"
              >
                <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex flex-col gap-4">
                    <span className="w-fit font-mono text-[10px] text-neon border border-neon/30 px-3 py-1 tracking-widest">
                      {exp.status}
                    </span>
                    <h3 className="text-highlight-texture text-4xl sm:text-5xl uppercase leading-[0.85] transition-all duration-300">
                      {exp.role}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-1 font-mono text-xs text-neon/70 bg-neon/5 p-4 border-l-2 border-neon">
                    <span className="text-lg text-white font-bold tracking-tight">{exp.company}</span>
                    <span className="tracking-[0.2em]">{exp.period}</span>
                  </div>

                  <p className="text-lg text-white/50 leading-relaxed font-light max-w-lg">
                    {exp.description}
                  </p>

                  <div className="pt-8 flex items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    <span className="h-px w-8 bg-white/10" />
                    <span>Phase: {idx + 1}</span>
                    <span className="h-px flex-1 bg-white/10" />
                    <ChevronRight size={10} className="text-neon/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
