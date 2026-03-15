import { motion } from 'motion/react';
import { Code2, Palette, Cpu, Zap, Globe, Sparkles, Rocket, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    title: "Creative Development",
    description: "Des animations fluides et des interactions complexes qui captivent l'attention et renforcent l'identité de marque.",
    icon: Code2,
    image: "https://cdn.dribbble.com/userupload/14135821/file/original-b502fce14867230c6ab11517e3f14fdc.jpg?resize=1301x865",
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "UI/UX Design",
    description: "Des interfaces épurées, intuitives et centrées sur l'utilisateur, conçues pour une conversion maximale.",
    icon: Palette,
    image: "https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-23881.jpg?size=626&ext=jpg",
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Architecture Frontend",
    description: "Des bases de code robustes, scalables et maintenables utilisant les frameworks les plus modernes.",
    icon: Cpu,
    image: "https://as1.ftcdn.net/v2/jpg/02/59/00/54/1000_F_259005424_1pKxgrtEWZypokJolNFiXkJuNxV9rhli.jpg",
    color: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Optimisation Web",
    description: "Audit et optimisation des performances pour garantir des scores Core Web Vitals parfaits.",
    icon: Zap,
    image: "https://img.freepik.com/free-vector/speed-test-concept-illustration_114360-3155.jpg",
    color: "from-orange-500/20 to-transparent"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative z-20 bg-[#121212] py-32 px-6 md:px-24">
      <div className="mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
        >
          Ce que je propose
        </motion.span>
        <h2 className="text-gradient mt-4 text-4xl font-bold tracking-tighter md:text-7xl">
          Services.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-white/5"
          >
            {/* Animated Background Glow */}
            <div className={`absolute -inset-24 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`} />
            
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-inner"
              >
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <service.icon className="h-8 w-8 text-white/70 transition-colors duration-500 group-hover:text-white" />
                )}
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="mb-4 text-2xl font-medium tracking-tight text-white"
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="text-sm leading-relaxed text-white/40 transition-colors duration-500 group-hover:text-white/70"
              >
                {service.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 transition-all duration-500 group-hover:text-white/60"
              >
                <span className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">En savoir plus</span>
                  <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0">Découvrir</span>
                </span>
                <div className="h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-white/40" />
              </motion.div>
            </div>

            {/* Corner Accent */}
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-12 -translate-y-12 rotate-45 bg-white/5 transition-transform duration-700 group-hover:translate-x-8 group-hover:-translate-y-8" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
