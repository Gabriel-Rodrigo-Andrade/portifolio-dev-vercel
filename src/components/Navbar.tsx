import { motion } from 'motion/react';
import { Github, Linkedin, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'IDENT', href: '#home' },
    { name: 'SYS_LOGS', href: '#about' },
    { name: 'RESOURCES', href: '#stack' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CAPABILITIES', href: '#services' },
    { name: 'COMM', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-1 pointer-events-none flex justify-center">
      <div className="w-full max-w-[1600px] px-4 md:px-8 xl:px-12 flex">
        <div className="w-full bg-void/90 backdrop-blur-md border-x border-b border-line px-6 flex items-center justify-between font-mono text-xs h-14 pointer-events-auto">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-neon">
            <Cpu size={14} />
            <span className="font-bold tracking-tighter">GABRIEL_ANDRADE.</span>
          </div>
          <div className="hidden lg:flex items-center gap-1 text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span>DEV_PHASE_ACTIVE</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={link.name} 
              href={link.href}
              className="group relative flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <span className="text-[10px] transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-neon">_</span>
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:block text-neon tabular-nums">
            {time}
          </div>
          <div className="flex items-center gap-4 border-l border-line pl-6">
            <a href="https://github.com/Gabriel-Rodrigo-Andrade" target="_blank" rel="noreferrer" className="text-white/40 hover:text-neon transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-andrade-dev" target="_blank" rel="noreferrer" className="text-white/40 hover:text-neon transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}
