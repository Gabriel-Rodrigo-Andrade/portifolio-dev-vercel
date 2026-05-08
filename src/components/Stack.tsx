import { motion } from 'motion/react';
import { TECH_STACK } from '../constants.tsx';
import { Hash } from 'lucide-react';

export default function Stack() {
  const groupedStack = TECH_STACK.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof TECH_STACK>);

  const categories = Object.keys(groupedStack).map(key => ({
    category: key,
    items: groupedStack[key]
  }));

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="stack" className="bg-void border-x border-line max-w-[1600px] mx-auto overflow-hidden mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-line">
        <div className="p-8 border-r border-line flex items-center">
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">02_STACK_INVENTORY</span>
        </div>
        <div className="md:col-span-3 p-8 flex flex-col justify-center">
           <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neon mb-2">Technological Assets</h2>
           <p className="text-white/40 text-sm font-light">Ferramentas precisas para construção de sistemas de alta perfomance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            key={category.category} 
            className={`border-b lg:border-b-0 ${index < 3 ? 'lg:border-r border-line' : ''} flex flex-col h-full bg-void group`}
          >
            <div className="p-6 border-b border-line bg-sheet/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-full bg-neon/5 -skew-x-12 translate-x-10 group-hover:-translate-x-[200px] transition-transform duration-1000" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-neon transition-colors">
                {category.category}
              </h3>
            </div>
            
            <motion.ul 
              variants={containerVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 p-6 space-y-4"
            >
              {category.items.map((item, itemIndex) => (
                <motion.li 
                  variants={itemVars}
                  whileHover={{ scale: 1.02, x: 4 }}
                  key={item.name}
                  className="group/item flex items-center gap-3 p-3 border border-line hover:border-neon transition-all bg-void cursor-default relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-neon/5 translate-y-full group-hover/item:translate-y-0 transition-transform duration-200" />
                  <Hash size={12} className="text-white/20 group-hover/item:text-neon transition-colors relative z-10" />
                  <div className="flex-1 flex justify-between items-center relative z-10">
                    <span className="text-sm font-mono uppercase tracking-tight text-white/80 group-hover/item:text-white transition-colors">{item.name}</span>
                    <span className="font-mono text-[9px] text-white/20 group-hover/item:text-neon uppercase tracking-widest">{`[0${itemIndex + 1}]`}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
