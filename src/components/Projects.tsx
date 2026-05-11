import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="border-t border-line max-w-[1600px] mx-auto bg-void relative mt-32">
      {/* Section Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-line">
        <div className="p-8 border-r border-line flex items-center">
          <span className="font-mono text-[10px] text-white/30 uppercase block tracking-[0.2em]">04_PROJ_LISTING</span>
        </div>
        <div className="md:col-span-3 p-8 flex items-center justify-between">
           <div className="flex items-center gap-4 text-neon">
             <span className="w-10 h-[1px] bg-neon" />
             <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Compilado de Obras e Sistemas</h2>
           </div>
           <div className="hidden md:flex items-center gap-2 text-white/20 font-mono text-[10px]">
             <span>ACTIVE_REPOS: {PROJECTS.length}</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start relative">
        
        {/* Left Side: Sticky Tabs */}
        <div className="w-full md:w-[30%] lg:w-[25%] md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] flex flex-row md:flex-col border-b md:border-b-0 md:border-r border-line bg-void z-30 overflow-x-auto md:overflow-visible shrink-0 md:pt-24 no-scrollbar">
          {PROJECTS.map((project, index) => {
            const isActive = index === activeTab;
            return (
              <button 
                key={`tab-${project.id}`}
                onClick={() => {
                   setActiveTab(index);
                   document.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-left p-6 md:p-8 lg:p-10 border-b border-line transition-colors duration-300 relative whitespace-nowrap md:whitespace-normal group`}
              >
                <span className={`text-lg md:text-xl lg:text-2xl uppercase block transition-all duration-300 ${isActive ? 'text-highlight-texture-neon' : 'text-highlight-texture opacity-30 group-hover:opacity-60'}`}>
                  {project.title}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTabIndicator" 
                    className="absolute inset-x-0 bottom-0 h-[2px] md:inset-x-auto md:top-0 md:bottom-0 md:left-0 md:w-1 md:h-full bg-neon" 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side: Content Scrolling List */}
        <div className="w-full md:w-[70%] lg:w-[75%] flex flex-col bg-sheet/5">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={`content-${project.id}`}
              id={`project-${project.id}`}
              onViewportEnter={() => setActiveTab(index)}
              viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
              className="py-16 md:py-24 lg:py-32 px-8 md:px-16 lg:px-24 flex flex-col relative border-b border-white/5 last:border-b-0 min-h-[80vh] justify-center"
            >
              <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col">
                <div className="mb-10">
                  <span className="font-mono text-[10px] text-neon/60 uppercase tracking-[0.3em] mb-4 block">Archive: {index + 1}</span>
                  <h2 className="text-highlight-texture text-4xl md:text-5xl lg:text-6xl uppercase mb-6 leading-none transition-all duration-300">
                    {project.title}
                  </h2>
                  <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl bg-void/30 p-6 border-l-2 border-line">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-8">
                    {(project as any).tech?.map((tag: string) => (
                      <span key={tag} className="font-mono text-[10px] text-neon bg-neon/5 border border-neon/20 px-3 py-1 uppercase font-bold tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full max-w-4xl aspect-video relative rounded border border-line overflow-hidden bg-void/50 mb-10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 scanlines opacity-30 z-20 pointer-events-none" />
                </div>

                <div className="flex items-center gap-6">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-[10px] font-bold text-neon uppercase tracking-widest px-6 py-3 border border-neon/30 bg-neon/5 hover:bg-neon hover:text-void transition-all"
                  >
                    <ExternalLink size={14} />
                    Explore Project
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest hover:text-white transition-colors"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
