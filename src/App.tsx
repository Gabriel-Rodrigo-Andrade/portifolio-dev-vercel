/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-void text-white font-sans selection:bg-neon selection:text-void">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full tech-grid" />
      </div>
      
      <footer className="border-t border-line p-8 text-center text-white/30 font-mono text-xs uppercase tracking-widest max-w-[1600px] mx-auto">
        <p>&copy; {new Date().getFullYear()} GABRIEL_ANDRADE // ALL_RIGHTS_RESERVED // SYSTEM_VERSION_2.0.4</p>
      </footer>
    </div>
  );
}

