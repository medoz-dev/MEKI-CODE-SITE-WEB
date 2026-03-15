import { motion } from 'motion/react';
import { Code, Layers, Layout, Box, Zap, Activity, Quote } from 'lucide-react';

const EXPERTISE = [
  { name: 'Creative Coding', icon: Code },
  { name: 'Frontend Architecture', icon: Layers },
  { name: 'UI/UX Design', icon: Layout },
  { name: 'WebGL / Three.js', icon: Box },
  { name: 'Performance', icon: Zap },
  { name: 'Motion Design', icon: Activity },
];

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#121212] py-32 px-6 md:px-24">
      <div className="grid gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gradient text-4xl font-bold tracking-tighter md:text-7xl">
            À propos.
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-white/60">
            Je suis Melchior Ganglo, un développeur créatif passionné par l'intersection du design et de la technologie. Avec plus de 2 ans d'expérience, j'aide les marques à se démarquer grâce à des expériences numériques mémorables.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/40">
            Mon approche combine une rigueur technique poussée avec une sensibilité esthétique affûtée. Je crois que chaque interaction est une opportunité de raconter une histoire et de créer une connexion émotionnelle avec l'utilisateur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {EXPERTISE.map((skill) => (
                <div 
                  key={skill.name} 
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-4 transition-all hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                    <skill.icon className="h-4 w-4 text-white/60 group-hover:text-white/90" />
                  </div>
                  <span className="text-sm font-medium text-white/60 transition-colors group-hover:text-white/90">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Témoignages</h3>
            <div className="space-y-8">
              {[
                { 
                  text: "Melchior a su sublimer l'identité de mon studio en lui offrant une vitrine numérique d'exception. Son expertise en design et sa capacité à traduire une vision en expérience concrète sont remarquables.",
                  author: "Bengys AITCHEDJI",
                  role: "Fondateur de Studio B"
                },
                { 
                  text: "Un développeur qui comprend réellement le design. Melchior apporte une dimension créative rare à chaque projet technique. Le résultat est toujours au-delà de nos attentes.",
                  author: "Sarah L.",
                  role: "Directrice Artistique"
                }
              ].map((item, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10">
                  <Quote className="absolute left-0 top-0 h-4 w-4 -translate-x-1/2 text-white/20" />
                  <p className="text-sm italic leading-relaxed text-white/60 mb-3">
                    "{item.text}"
                  </p>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white/80">{item.author}</span>
                    <span className="text-[10px] uppercase tracking-wider text-white/30">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
