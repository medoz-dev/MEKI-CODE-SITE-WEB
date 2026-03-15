import { motion } from 'motion/react';
import { Search, PenTool, Terminal, Rocket } from 'lucide-react';

const STEPS = [
  {
    number: "01",
    title: "Découverte",
    description: "Comprendre vos objectifs, votre audience et l'essence de votre marque pour définir une stratégie claire.",
    icon: Search
  },
  {
    number: "02",
    title: "Conception",
    description: "Définir l'expérience utilisateur et l'identité visuelle à travers des prototypes interactifs et du design haute fidélité.",
    icon: PenTool
  },
  {
    number: "03",
    title: "Développement",
    description: "Transformer le design en une réalité technique performante, interactive et optimisée pour tous les supports.",
    icon: Terminal
  },
  {
    number: "04",
    title: "Lancement",
    description: "Tests rigoureux, déploiement et suivi post-lancement pour garantir un impact maximal dès le premier jour.",
    icon: Rocket
  }
];

export default function Process() {
  return (
    <section id="process" className="relative z-20 bg-[#121212] py-32 px-6 md:px-24">
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="lg:w-1/3">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
          >
            Ma méthodologie
          </motion.span>
          <h2 className="text-gradient mt-4 text-4xl font-bold tracking-tighter md:text-7xl">
            Mon Processus.
          </h2>
          <p className="mt-8 text-white/40 leading-relaxed">
            Une approche structurée et itérative pour transformer vos idées en produits numériques d'exception.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <img 
              src="https://hckzpjsbgchfhwomqkal.supabase.co/storage/v1/object/sign/anim/Whisk_a36c8c15d2032a4bf6e4c46e572d894adr.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDg0NjBiMi1mYjc0LTQwMWItOWZhYy0yMjU5MDhjZGJhNjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhbmltL1doaXNrX2EzNmM4YzE1ZDIwMzJhNGJmNmU0YzQ2ZTU3MmQ4OTRhZHIuanBnIiwiaWF0IjoxNzczNjA5NzI5LCJleHAiOjEyMDIyODA5NzI5fQ.Ira8NTdQBbeJIORzVrA-UYzLAGQZPbKRLOOqTkIwxyM" 
              alt="Illustration du processus" 
              className="h-full w-full object-cover opacity-60 transition-transform duration-700 hover:scale-110 hover:opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid flex-1 gap-12">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex gap-8"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-xs font-bold text-white/60 transition-colors group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                  {step.number}
                </div>
                {index !== STEPS.length - 1 && (
                  <div className="mt-4 h-full w-px bg-gradient-to-b from-white/10 to-transparent" />
                )}
              </div>
              
              <div className="pb-12">
                <div className="mb-4 flex items-center gap-4">
                  <step.icon className="h-5 w-5 text-white/40 transition-colors group-hover:text-white/80" />
                  <h3 className="text-2xl font-medium tracking-tight text-white/90">
                    {step.title}
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
