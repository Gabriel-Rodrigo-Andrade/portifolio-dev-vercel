import { motion } from 'motion/react';
import { SERVICES } from '../constants.tsx';
import { Search, ArrowUpRight } from 'lucide-react';

const WebSystemsIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-14 h-14 stroke-neon fill-none overflow-visible stroke-2">
    {/* Browser Frame */}
    <motion.rect x="10" y="20" width="80" height="60" rx="4" strokeWidth="2"
       variants={{ hover: { stroke: "#FFF", strokeDasharray: "15 5" } }}
       transition={{ duration: 0.5 }}
    />
    <motion.line x1="10" y1="35" x2="90" y2="35" strokeWidth="2" />
    
    {/* Window Controls */}
    <circle cx="18" cy="27.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="25" cy="27.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="32" cy="27.5" r="1.5" fill="currentColor" stroke="none" />

    {/* Code Brackets overlay simulating "Web Development" */}
    <motion.path d="M 40 50 L 30 60 L 40 70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      initial={{ x: 0 }}
      variants={{ hover: { x: -6, stroke: "#FFF" } }}
      transition={{ type: "spring", bounce: 0.5 }}
    />
    <motion.path d="M 60 50 L 70 60 L 60 70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      initial={{ x: 0 }}
      variants={{ hover: { x: 6, stroke: "#FFF" } }}
      transition={{ type: "spring", bounce: 0.5 }}
    />
    <motion.line x1="55" y1="46" x2="45" y2="74" strokeWidth="2" strokeLinecap="round"
      variants={{ hover: { stroke: "#0075FF", strokeWidth: 3, rotate: 10 } }}
      style={{ originX: "50px", originY: "60px" }}
      transition={{ type: "spring" }}
    />
    
    {/* Simulated scanning of the code */}
    <motion.line x1="20" y1="60" x2="80" y2="60" stroke="#0075FF" strokeWidth="1" opacity="0"
      variants={{ hover: { opacity: [0, 0.5, 0], y: [-10, 15, -10] } }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    />
  </motion.svg>
);

const APIIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-14 h-14 stroke-neon fill-none overflow-visible stroke-[1.5]">
    {/* Server Cylinders (Backend) */}
    {/* Node 1 */}
    <ellipse cx="25" cy="30" rx="15" ry="5" strokeWidth="2" />
    <path d="M 10 30 L 10 45 A 15 5 0 0 0 40 45 L 40 30" strokeWidth="2" />
    <motion.line x1="18" y1="38" x2="32" y2="38" strokeDasharray="3 3"
      variants={{ hover: { stroke: "#FFF", x1: 15, x2: 35 } }}
    />
    {/* Node 2 */}
    <ellipse cx="25" cy="65" rx="15" ry="5" strokeWidth="2" />
    <path d="M 10 65 L 10 80 A 15 5 0 0 0 40 80 L 40 65" strokeWidth="2" />
    <motion.line x1="18" y1="73" x2="32" y2="73" strokeDasharray="3 3"
      variants={{ hover: { stroke: "#FFF", x1: 15, x2: 35 } }}
    />

    {/* Client/App Node on right */}
    <rect x="70" y="42" width="20" height="26" rx="3" strokeWidth="2" />
    <motion.line x1="75" y1="48" x2="85" y2="48" variants={{ hover: { stroke: "#FFF", x2: 80 } }} />
    <motion.line x1="75" y1="52" x2="80" y2="52" variants={{ hover: { stroke: "#FFF" } }} />
    
    {/* Connecting lines (REST API endpoints) */}
    <path d="M 40 38 Q 60 38 70 50" strokeDasharray="4 4" opacity="0.3" />
    <path d="M 40 73 Q 60 73 70 60" strokeDasharray="4 4" opacity="0.3" />

    {/* Packets transferring (Data flow) */}
    <motion.circle cx="40" cy="38" r="2.5" fill="#0075FF" stroke="none" opacity="0"
      variants={{ hover: { opacity: 1 } }}
    />
    <motion.circle cx="70" cy="60" r="2.5" fill="#FFF" stroke="none" opacity="0"
      variants={{ hover: { opacity: 1 } }}
    />
    <motion.circle cx="40" cy="38" r="3" fill="#0075FF" stroke="none"
      variants={{ hover: { cx: [40, 70], cy: [38, 50], scale: [1, 1.5, 0.5], opacity: [1, 1, 0] } }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeIn" }}
    />
    <motion.circle cx="70" cy="60" r="3" fill="#FFF" stroke="none"
      variants={{ hover: { cx: [70, 40], cy: [60, 73], scale: [1, 1.5, 0.5], opacity: [1, 1, 0] } }}
      transition={{ duration: 0.8, repeat: Infinity, delay: 0.4, ease: "easeIn" }}
    />
  </motion.svg>
);

const PerformanceIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-14 h-14 stroke-neon fill-none overflow-visible stroke-2">
    {/* Chart Axes */}
    <line x1="15" y1="15" x2="15" y2="85" strokeWidth="2.5" />
    <line x1="15" y1="85" x2="90" y2="85" strokeWidth="2.5" />
    
    {/* Chart Bars - Legacy to Optimized */}
    <motion.rect x="25" y="65" width="12" height="20" rx="1"
      variants={{ hover: { fill: "rgba(0, 117, 255, 0.1)" } }}
    />
    <motion.rect x="45" y="50" width="12" height="35" rx="1"
      variants={{ hover: { fill: "rgba(0, 117, 255, 0.4)" } }}
    />
    <motion.rect x="65" y="25" width="12" height="60" rx="1"
      initial={{ fill: "transparent" }}
      variants={{ hover: { fill: "rgba(0, 117, 255, 1)" } }}
    />

    {/* Optimization Growth Line */}
    <motion.path d="M 20 60 L 40 40 L 70 15 L 85 15 M 75 5 L 85 15 L 75 25" stroke="#FFF" strokeLinejoin="round" strokeLinecap="round"
      initial={{ pathLength: 0.3, opacity: 0.5 }}
      variants={{ hover: { pathLength: 1, opacity: 1, strokeWidth: 3, filter: "drop-shadow(0 0 3px rgba(255,255,255,0.5))" } }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    
    {/* Optimization Nodes */}
    <motion.circle cx="40" cy="40" r="3" fill="#0075FF" stroke="none" 
      initial={{ scale: 0 }} variants={{ hover: { scale: 1 } }} transition={{ delay: 0.1 }}
    />
    <motion.circle cx="70" cy="15" r="4" fill="#FFF" stroke="none"
      initial={{ scale: 0 }} variants={{ hover: { scale: 1.5 } }} transition={{ delay: 0.4 }}
    />
  </motion.svg>
);

const iconMap = {
  Layout: <WebSystemsIcon />,
  Server: <APIIcon />,
  Zap: <PerformanceIcon />,
  Database: <APIIcon />
};

export default function Services() {
  return (
    <section id="services" className="bg-void border-x border-line max-w-[1600px] mx-auto overflow-hidden mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-line bg-sheet/40">
        <div className="p-8 border-r border-line flex items-center">
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">05_SVC_CAPABILITIES</span>
        </div>
        <div className="md:col-span-3 p-8 flex items-center justify-between">
           <h3 className="text-crt text-3xl font-black uppercase tracking-tighter">Engineered Solutions</h3>
           <div className="hidden md:flex items-center gap-2 text-white/20 font-mono text-[10px]">
             <Search size={12} className="animate-pulse text-neon" />
             <span>QUERYING_METHODS...</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {SERVICES.map((service, index) => (
          <motion.div
            initial="initial"
            whileInView="visible"
            whileHover="hover"
            variants={{
              initial: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
            }}
            viewport={{ once: true }}
            key={service.id}
            className={`p-8 lg:p-12 border-b md:border-b-0 ${index < 2 ? 'md:border-r border-line' : ''} hover:bg-sheet/50 transition-colors group relative overflow-hidden`}
          >
            {/* HUD Decorative Corners */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 group-hover:border-neon transition-colors" />
            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20 group-hover:border-neon transition-colors" />
            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20 group-hover:border-neon transition-colors" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20 group-hover:border-neon transition-colors" />

            {/* Glowing Orbit on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon/0 group-hover:bg-neon/10 blur-2xl rounded-full transition-all duration-700 pointer-events-none" />
            
            <div className="mb-8 transform group-hover:scale-110 transition-transform origin-left relative z-10 flex">
              {iconMap[service.icon as keyof typeof iconMap] || <WebSystemsIcon />}
            </div>
            
            <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-neon transition-colors relative z-10">
              {service.title}
            </h4>
            
            <p className="text-sm text-white/50 leading-relaxed font-light mb-10 font-mono relative z-10 min-h-[80px]">
              {service.description}
            </p>
            
            <div className="pt-6 border-t border-line flex items-center justify-between text-[10px] font-mono text-white/30 group-hover:text-neon transition-colors uppercase tracking-[0.2em] relative z-10">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-neon transition-colors" />
                Operational
              </span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
