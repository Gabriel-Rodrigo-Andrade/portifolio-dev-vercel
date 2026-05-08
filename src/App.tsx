import { motion, useScroll } from 'motion/react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Stack from './components/Stack.tsx';
import Projects from './components/Projects.tsx';
import Services from './components/Services.tsx';
import Contact from './components/Contact.tsx';

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-void text-white font-sans selection:bg-neon selection:text-void relative">
      
      {/* Global Architectural Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-[60]">
        <div className="w-full max-w-[1600px] h-full flex px-4 md:px-8 xl:px-12">
          <div className="w-full h-full relative border-x border-white/5">
            
            {/* Global Architectural Grid Overlay */}
            <div className="absolute inset-0 border-x border-white/5" />
            
          </div>
        </div>
      </div>

      {/* Top Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 xl:px-12 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1600px] h-1 bg-white/5 relative overflow-hidden">
          <motion.div 
            className="absolute inset-y-0 left-0 h-full bg-neon origin-left w-full"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>

      <Navbar />
      
      <main className="relative pt-20 px-4 md:px-8 xl:px-12 pb-8 md:pb-16 max-w-[1600px] mx-auto">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Services />
        <Contact />
      </main>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 flex flex-col justify-center">
        <footer className="w-full bg-void border border-line py-8 text-center mb-8 mt-12 px-8">
          <div className="flex flex-col md:flex-row items-center justify-between px-8 gap-4">
            <div className="flex items-center gap-2 text-neon">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">SYSTEM_RUNNING</span>
            </div>
            <p className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} Vitor Henrique P. ARCH_BUILD_V1.2
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="font-mono text-[10px] text-white/30 hover:text-neon uppercase tracking-widest transition-colors">[G_HUB]</a>
              <a href="https://www.linkedin.com/in/vitorpachinski" target="_blank" rel="noreferrer" className="font-mono text-[10px] text-white/30 hover:text-neon uppercase tracking-widest transition-colors">[L_KDN]</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
