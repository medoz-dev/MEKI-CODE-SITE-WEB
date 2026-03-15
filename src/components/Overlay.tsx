import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax offsets for different sections
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  const y2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [100, 0, -100]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.6], [0, 1, 1, 0]);

  const y3 = useTransform(scrollYProgress, [0.5, 0.7, 0.8], [100, 0, -100]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.8], [0, 1, 1, 0]);

  const y4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [100, 0, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10">
      {/* Section 1: Intro */}
      <motion.section 
        style={{ y: y1, opacity: opacity1 }}
        className="flex h-screen w-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-mono text-[10px] uppercase tracking-[0.5em] text-white/40"
          >
            Senior Creative Developer
          </motion.span>
          <h1 className="text-gradient text-6xl font-bold tracking-tighter md:text-9xl">
            MEKI CODE.
          </h1>
          <p className="mt-6 font-light italic tracking-tight text-white/60 md:text-xl">
            Melchior Ganglo — L'art de l'interaction.
          </p>
        </div>
      </motion.section>

      {/* Section 2: Statement */}
      <motion.section 
        style={{ y: y2, opacity: opacity2 }}
        className="flex h-screen w-full items-center justify-start px-12 md:px-24"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-light leading-[1.1] tracking-tight md:text-7xl">
            Je construis des <span className="italic text-white">expériences digitales</span> immersives et haute performance.
          </h2>
        </div>
      </motion.section>

      {/* Section 3: Philosophy */}
      <motion.section 
        style={{ y: y3, opacity: opacity3 }}
        className="flex h-screen w-full items-center justify-end px-12 text-right md:px-24"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-light leading-[1.1] tracking-tight md:text-7xl">
            Relier <span className="font-medium text-white">design</span> et <span className="font-medium text-white">ingénierie</span> avec une précision chirurgicale.
          </h2>
        </div>
      </motion.section>

      {/* Section 4: Transition to Work */}
      <motion.section 
        style={{ y: y4, opacity: opacity4 }}
        className="flex h-screen w-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="max-w-xl">
          <h2 className="text-gradient text-5xl font-bold tracking-tighter md:text-8xl">
            WORKS.
          </h2>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">
            Explorez mes réalisations
          </p>
        </div>
      </motion.section>
    </div>
  );
}
