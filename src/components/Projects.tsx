import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Archivist Prod",
    category: "Production Studio / Media",
    description: "Studio de Bengys AITCHEDJI, Professeur à l'IMA (Institut des Médias et Audio-visuels). Une plateforme dédiée à l'excellence audiovisuelle.",
    image: "https://archivist-prod.netlify.app/lovable-uploads/badb182b-88f0-41b8-acd6-aea6e93cfa07.png",
    year: "2025",
    tags: ["React", "Netlify", "Media"],
    link: "https://archivist-prod.netlify.app/"
  },
  {
    title: "Restaurant Site Web",
    category: "Web Design / Hospitality",
    description: "Un site web prototypé pour le restaurant Escale du Pont à Porto-Novo (Bénin). Une interface gourmande et intuitive.",
    image: "https://escaledupont.netlify.app/images/kuku-frites-salade.jpg",
    year: "2025",
    tags: ["React", "UI/UX", "Restaurant"],
    link: "https://escaledupont.netlify.app/"
  },
  {
    title: "Inventaire Pro",
    category: "Web App / Inventory Management",
    description: "Une application web simplifiant les inventaires de vente de boissons dans les bars et restaurants béninois. (En cours de développement)",
    image: "https://th.bing.com/th/id/OIP.T9M9oZtnm2C7uT3FtAohLgHaD4?w=340&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    year: "2026",
    tags: ["React", "Management", "Beta"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative z-20 bg-[#121212] py-32 px-6 md:px-24">
      <div className="mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
        >
          Projets sélectionnés
        </motion.span>
        <h2 className="text-gradient mt-4 text-4xl font-bold tracking-tighter md:text-7xl">
          Selected Works.
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5">
              <img 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex gap-4">
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-transform hover:scale-110">
                    <Github className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-1 flex-col">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {project.category}
                </span>
                <span className="font-mono text-[10px] text-white/20">
                  {project.year}
                </span>
              </div>
              
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  {project.title}
                </h3>
                {project.link !== "#" && (
                  <ArrowUpRight className="h-4 w-4 text-white/20 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                )}
              </div>
              
              <p className="mb-6 text-sm leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                {project.description}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-[10px] font-medium text-white/40 transition-colors group-hover:border-white/10 group-hover:text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
