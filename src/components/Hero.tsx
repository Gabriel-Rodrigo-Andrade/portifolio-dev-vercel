import { motion } from 'motion/react';
import { Code2, Database, Globe } from 'lucide-react';

export default function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col border-x border-b border-line max-w-[1600px] mx-auto overflow-hidden pt-20">
      <div className="absolute inset-0 tech-grid opacity-50 pointer-events-none" />
      <div className="scanlines absolute inset-0 -z-10" />

      <div className="flex-1 flex relative z-10 w-full">
        <div className="w-full border-b border-line p-8 md:p-16 flex flex-col items-center justify-center bg-void/80 backdrop-blur-sm text-center">
          <motion.div variants={containerVars} initial="hidden" animate="visible" className="max-w-6xl mx-auto w-full">
            <motion.div variants={itemVars} className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-neon/30" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-neon">Gabriel Andrade</span>
              <span className="h-px w-8 bg-neon/30" />
            </motion.div>
            <motion.h1 variants={itemVars} className="hero-title mb-6 flex flex-col items-center">
              <span className="whitespace-nowrap inline-block">
                Building <span className="hero-title-highlight relative inline-block px-2">
                  Systems
                  <motion.div 
                    className="absolute inset-0 bg-neon mix-blend-difference z-10 pointer-events-none"
                    animate={{ height: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
                  />
                </span>
              </span>
              <span>not pages.</span>
            </motion.h1>
            <motion.p variants={itemVars} className="max-w-xl mx-auto text-lg text-white/50 font-light leading-relaxed mb-10">
              <span className="text-highlight-texture-neon uppercase inline-block">Desenvolvedor Full Stack</span> apaixonado por transformar café em código eficiente. Especialista em <span className="text-white">PHP (Laravel)</span>, Vue.js e WordPress. Focado em criar soluções robustas e modernas.
            </motion.p>
            
            <motion.div variants={itemVars} className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#projects"
                className="px-8 py-4 bg-neon text-void font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
              >
                EXECUTE_PROJECTS
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 border border-line text-white font-bold uppercase tracking-widest hover:border-neon hover:text-neon transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-neon/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative">ESTABLISH_COMM</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
