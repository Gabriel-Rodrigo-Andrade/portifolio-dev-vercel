import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants.tsx';

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="border-t border-line max-w-[1600px] mx-auto bg-[#0F0F0F] relative mt-32">
      <div className="flex flex-col md:flex-row items-start relative">
        
        {/* Left Side: Sticky Tabs */}
        <div className="w-full md:w-[30%] lg:w-[25%] md:sticky md:top-0 md:h-screen flex flex-row md:flex-col border-b md:border-b-0 md:border-r border-line bg-[#0A0A0A] z-30 overflow-x-auto md:overflow-visible shrink-0 md:pt-24 no-scrollbar">
          {PROJECTS.map((project, index) => {
            const isActive = index === activeTab;
            return (
              <button 
                key={`tab-${project.id}`}
                onClick={() => {
                   setActiveTab(index);
                   document.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-left p-6 md:p-8 lg:p-10 border-b border-line font-sans text-lg md:text-xl lg:text-2xl font-semibold tracking-tight transition-colors duration-300 relative whitespace-nowrap md:whitespace-normal ${isActive ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              >
                {project.title}
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
        <div className="w-full md:w-[70%] lg:w-[75%] flex flex-col bg-[#121212]">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={`content-${project.id}`}
              id={`project-${project.id}`}
              onViewportEnter={() => setActiveTab(index)}
              viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
              className="min-h-screen p-8 md:p-16 lg:p-20 flex flex-col relative border-b border-white/5"
            >
              <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                    {project.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-8">
                    {(project as any).tech?.map((tag: string) => (
                      <span key={tag} className="font-mono text-xs text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center py-8 relative">
                  <div className="w-full aspect-video md:aspect-[21/9] lg:aspect-[16/9] relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black/50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 scanlines opacity-50 z-20 pointer-events-none" />
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-sans text-sm font-medium text-white px-6 py-2.5 border border-white/20 rounded hover:bg-white hover:text-black transition-colors"
                  >
                    Explore Project
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-sans text-sm font-medium text-white/60 px-6 py-2.5 hover:text-white transition-colors"
                  >
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
