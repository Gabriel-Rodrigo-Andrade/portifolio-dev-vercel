import { motion } from 'motion/react';

export const AbstractGeometry = () => (
  <svg viewBox="0 0 800 800" className="w-full h-full opacity-60 mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-spin-slow">
      {/* Outer Hexagon */}
      <motion.polygon 
        points="400,100 660,250 660,550 400,700 140,550 140,250" 
        fill="none" 
        stroke="var(--color-primary)" 
        strokeWidth="1"
        className="svg-glow"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
      />
      {/* Inner Circles */}
      <motion.circle 
        cx="400" cy="400" r="280" 
        fill="none" 
        stroke="var(--color-secondary)" 
        strokeWidth="0.5"
        className="animate-dash"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 1 }}
      />
      
      {/* Interlocking triangles */}
      <motion.polygon 
        points="400,150 620,530 180,530" 
        fill="none" 
        stroke="var(--color-primary)" 
        strokeWidth="2"
        className="svg-glow"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.polygon 
        points="400,650 180,270 620,270" 
        fill="none" 
        stroke="var(--color-secondary)" 
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, delay: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
    </g>

    <g className="animate-spin-slower-reverse">
      <motion.circle 
        cx="400" cy="400" r="320" 
        fill="none" 
        stroke="var(--color-primary)" 
        strokeWidth="1"
        strokeDasharray="2 12"
      />
      <circle cx="400" cy="80" r="4" fill="var(--color-primary)" className="svg-glow" />
      <circle cx="400" cy="720" r="4" fill="var(--color-secondary)" className="svg-glow" />
      <circle cx="80" cy="400" r="4" fill="var(--color-primary)" className="svg-glow" />
      <circle cx="720" cy="400" r="4" fill="var(--color-secondary)" className="svg-glow" />
    </g>

    {/* Center Core */}
    <motion.circle 
      cx="400" cy="400" r="60" 
      fill="none" 
      stroke="white" 
      strokeWidth="1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
    />
    <motion.circle 
      cx="400" cy="400" r="20" 
      fill="var(--color-primary)"
      className="svg-glow block"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </svg>
);

export const DataFlowNetwork = () => (
  <svg viewBox="0 0 1000 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
        <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="1" />
        <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    <g stroke="var(--color-border)" strokeWidth="1" fill="none">
      <path d="M 100,200 C 300,200 300,50 500,50 C 700,50 700,350 900,350" />
      <path d="M 100,200 C 400,200 400,350 500,350 C 600,350 600,200 900,200" />
      <path d="M 100,200 C 200,200 200,200 500,200 C 800,200 800,50 900,50" />
    </g>

    <g stroke="url(#flow-grad)" strokeWidth="3" fill="none" className="svg-glow">
      <motion.path 
        d="M 100,200 C 300,200 300,50 500,50 C 700,50 700,350 900,350" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.path 
        d="M 100,200 C 400,200 400,350 500,350 C 600,350 600,200 900,200" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      <motion.path 
        d="M 100,200 C 200,200 200,200 500,200 C 800,200 800,50 900,50" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
      />
    </g>

    <g fill="var(--color-surface)" stroke="var(--color-primary)" strokeWidth="2">
      <circle cx="100" cy="200" r="10" />
      <circle cx="500" cy="50" r="8" />
      <circle cx="500" cy="200" r="12" className="svg-glow" />
      <circle cx="500" cy="350" r="8" />
      <circle cx="900" cy="50" r="10" />
      <circle cx="900" cy="200" r="10" />
      <circle cx="900" cy="350" r="10" />
    </g>
  </svg>
);
