import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="bg-void border-x border-line max-w-[1600px] mx-auto overflow-hidden mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-line">
        <div className="p-8 border-r border-line flex items-center">
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">03_SYSTEM_LOGS</span>
        </div>
        <div className="md:col-span-3 p-8">
           <div className="flex items-center gap-4 text-neon">
             <span className="w-10 h-[1px] bg-neon" />
             <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Trajetória e Operação Escalonada</h2>
           </div>
        </div>
      </div>

      <div className="border-b border-line relative bg-sheet/10">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10"
        >
          {/* Section: Philosophy / Intro */}
          <motion.div 
            whileHover={{ x: 10 }}
            className="space-y-6 transition-transform border-l-4 border-transparent hover:border-neon pl-6 md:pl-10 -ml-6 md:-ml-10"
          >
            <span className="font-mono text-[10px] text-neon uppercase block tracking-widest">_Philosophy</span>
            <p className="text-crt text-3xl lg:text-5xl font-black leading-[1.1] uppercase tracking-tighter">
              Soluções <span className="text-neon">eficientes</span> para problemas reais.
            </p>
            <p className="text-xl text-white/60 font-light leading-relaxed mt-6">
              Sou desenvolvedor web focado na entrega de aplicações escaláveis, desde a definição da regra de negócio até a interface final. Especialista em PHP (Laravel e Zend), construindo sistemas robustos com integrações REST/SOAP e processamento assíncrono.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12 lg:border-l lg:border-line lg:pl-16">
            {/* Section: Experience (First on right column) */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="space-y-4 transition-transform"
            >
              <span className="font-mono text-[10px] text-white/40 uppercase block tracking-widest">_Work_Experience</span>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-neon transition-colors">K13 Agência Web</h3>
                  <span className="font-mono text-[10px] text-neon border border-neon/30 px-2 py-0.5 mt-1 tracking-widest">ATUAL</span>
                </div>
                <div className="font-mono text-xs text-neon/70">Desenvolvedor Web | Mai 2024 - Presente</div>
                <p className="text-sm text-white/50 leading-relaxed font-light mt-4">
                  Atuando no desenvolvimento de sistemas complexos com PHP (Laravel/Zend), processamento via filas (Redis), e integrações de APIs REST/SOAP. Especialista na otimização de e-commerces (OpenMage) e sistemas de logística.
                </p>
              </div>
            </motion.div>

            {/* Section: Base Operation (Last on right column) */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="space-y-6 transition-transform"
            >
              <span className="font-mono text-[10px] text-white/40 uppercase block tracking-widest">_Base_Operation</span>
              <div className="text-lg font-mono text-white/80 leading-loose group">
                <span className="text-neon group-hover:animate-pulse inline-block mr-4">{">"}</span>Localização: Guarapuava, Paraná, Brasil.<br/>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-neon animate-pulse" />
                    <span className="text-[10px] uppercase text-white/40 tracking-widest">Status Acadêmico</span>
                  </div>
                  <p className="text-xl md:text-2xl font-black uppercase text-white tracking-tighter">
                    Graduado em <span className="text-neon">Engenharia de Software</span>
                  </p>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">Centro Univ. Campo Real | 2022 — 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
