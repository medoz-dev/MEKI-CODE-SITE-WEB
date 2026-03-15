import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import { motion } from 'motion/react';
import { Menu, ArrowRight, X, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#121212]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#121212]/80 backdrop-blur-xl py-4 px-6 md:px-12 border-b border-white/5' 
          : 'bg-transparent py-8 px-6 md:px-12'
      }`}>
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-logo text-4xl tracking-normal cursor-pointer outline-none"
        >
          Meki<span className="text-white/40">Code</span>
        </motion.button>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8"
        >
          <div className="hidden items-center gap-8 md:flex">
            {['Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-widest text-white/40 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="glass z-50 flex h-10 w-10 items-center justify-center rounded-full"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#121212]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-8">
              {['Work', 'About', 'Contact'].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-4xl font-bold tracking-tighter hover:text-white/60"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <Process />

      {/* Contact Section */}
      <Contact />

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="glass fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/5 bg-[#121212] px-6 py-12 md:px-24">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row font-mono text-[10px] uppercase tracking-widest text-white/20">
          <div className="flex items-center gap-4">
            <span className="text-white/40 font-bold">MekiCode</span>
            <div className="h-px w-8 bg-white/10" />
            <p>© 2026. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <p>Designed with precision.</p>
            <p>Built for performance.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
