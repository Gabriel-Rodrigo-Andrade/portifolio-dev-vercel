import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, Terminal, ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-void border-x border-b border-line max-w-[1600px] mx-auto overflow-hidden mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4 border-y border-line">
        <div className="p-8 border-r border-line flex items-center bg-sheet/20">
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">06_TRANS_TERMINAL</span>
        </div>
        <div className="md:col-span-3 p-8 bg-sheet/20">
           <div className="flex items-center gap-4 text-neon">
             <span className="w-10 h-[1px] bg-neon" />
             <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Open Channel</h2>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-r border-line flex flex-col"
        >
          <div className="flex-1 p-8 md:p-16 space-y-12">
            <div>
              <h3 className="text-crt text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Request <br />
                <span className="text-neon">Connection.</span>
              </h3>
              <p className="text-sm font-mono text-white/40 font-light leading-relaxed max-w-md">
                Pronto para transformar requisitos complexos em arquitetura robusta. Inicie uma nova instância ou apenas troque pacotes de ideias.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:contato@devporto.com" className="flex items-center justify-between p-6 brutal-card group relative overflow-hidden">
                <div className="absolute inset-0 bg-neon/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <div className="flex items-center gap-4 relative z-10">
                  <Mail size={16} className="text-white/20 group-hover:text-neon transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-tight group-hover:text-neon transition-colors">contato@devporto.com</span>
                </div>
                <ChevronRight size={14} className="text-white/20 group-hover:translate-x-1 group-hover:text-neon transition-all relative z-10" />
              </a>
              <div className="flex gap-4">
                <a href="https://github.com" className="flex-1 p-6 brutal-card flex items-center justify-center gap-3 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <Github size={16} className="text-white/20 group-hover:text-neon transition-colors relative z-10" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest group-hover:text-neon transition-colors relative z-10">GITHUB_DB</span>
                </a>
                <a href="https://www.linkedin.com/in/vitorpachinski" className="flex-1 p-6 brutal-card flex items-center justify-center gap-3 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <Linkedin size={16} className="text-white/20 group-hover:text-neon transition-colors relative z-10" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest group-hover:text-neon transition-colors relative z-10">LINKEDIN_ID</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-line bg-sheet/30 font-mono text-[9px] text-white/20 flex justify-between uppercase">
             <span>Protocol: SECURE_POST</span>
             <span>Queue: PRIORITY_HIGH</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-16 flex flex-col justify-center"
        >
          <form className="bg-line border border-line flex flex-col gap-px">
            <div className="bg-void p-6 space-y-3">
              <label className="font-mono text-[9px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2">
                <Terminal size={10} className="text-neon" />
                Input_Entity_Name
              </label>
              <input 
                type="text" 
                placeholder="E.g.: Alan Turing"
                className="w-full bg-transparent text-white placeholder:text-white/10 outline-none font-mono uppercase tracking-tight"
              />
            </div>
            <div className="bg-void p-6 space-y-3">
              <label className="font-mono text-[9px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2">
                <Terminal size={10} className="text-neon" />
                Input_Contact_ADDR
              </label>
              <input 
                type="email" 
                placeholder="protocol@example.com"
                className="w-full bg-transparent text-white placeholder:text-white/10 outline-none font-mono uppercase tracking-tight"
              />
            </div>
            <div className="bg-void p-6 space-y-3">
              <label className="font-mono text-[9px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2">
                <Terminal size={10} className="text-neon" />
                Input_Payload_Description
              </label>
              <textarea 
                rows={4}
                placeholder="Defina o escopo do sistema..."
                className="w-full bg-transparent text-white placeholder:text-white/10 outline-none font-mono uppercase tracking-tight resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full p-8 bg-neon text-void font-black uppercase tracking-[0.3em] hover:bg-white transition-colors flex items-center justify-center gap-4 group"
            >
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              COMMIT_TRANSMISSION
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
