import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#121212] py-32 px-6 md:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col items-center gap-12 lg:flex-row lg:text-left">
          <div className="flex-1">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
            >
              Contact
            </motion.span>
            <h2 className="text-gradient mt-4 text-4xl font-bold tracking-tighter md:text-7xl">
              Parlons de votre prochain projet.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/40">
              Vous avez une idée ? Un projet ? Ou simplement envie de dire bonjour ? Je suis toujours ouvert à de nouvelles opportunités et collaborations créatives.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:h-[400px]"
          >
            <img 
              src="https://hckzpjsbgchfhwomqkal.supabase.co/storage/v1/object/sign/anim/Whisk_a36c8c15d2032a4bf6e4c46e572d894adr%20(1).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDg0NjBiMi1mYjc0LTQwMWItOWZhYy0yMjU5MDhjZGJhNjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhbmltL1doaXNrX2EzNmM4YzE1ZDIwMzJhNGJmNmU0YzQ2ZTU3MmQ4OTRhZHIgKDEpLmpwZyIsImlhdCI6MTc3MzYxMTkyMywiZXhwIjoxMzQxMDM5NTkyM30.pch9pn2JKgmD19XuAbO7N_PuhmVfO_Yfy2EaD6u2uwg" 
              alt="Illustration de contact" 
              className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-12 md:gap-20">
          {[
            { 
              image: 'https://www.bing.com/th/id/OIP.BCOgkDFoXALNblLx8Mi0IQHaHa?w=195&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', 
              label: 'Email', 
              value: 'melchiorganglo642@gmail.com', 
              color: 'shadow-blue-500/20',
              href: 'mailto:melchiorganglo642@gmail.com'
            },
            { 
              image: 'https://th.bing.com/th/id/OIP.IL5o9coyRVqB_0KaPGbF8QHaHa?w=219&h=219&c=7&r=0&o=7&pid=1.7&rm=3', 
              label: 'WhatsApp', 
              value: '+229 01 61 17 00 17', 
              color: 'shadow-green-500/20', 
              href: "https://wa.me/2290161170017?text=Bonjour%20Melchior%2C%20j'aimerais%20discuter%20d'un%20projet%20avec%20vous." 
            },
            { 
              image: 'https://www.bing.com/th/id/OIP.QqTYsxjnv4_257JFzrcwlAHaHa?w=198&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', 
              label: 'Facebook', 
              value: 'melchior.melchior.2025', 
              color: 'shadow-blue-700/20', 
              href: 'https://www.facebook.com/melchior.melchior.2025/' 
            },
            { 
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png', 
              label: 'Instagram', 
              value: '@mekicode', 
              color: 'shadow-pink-500/20', 
              href: '#' 
            },
            { 
              image: 'https://th.bing.com/th/id/OIP.ExopCFEedUJCZ1zR_b455QHaHa?w=183&h=183&c=7&r=0&o=7&pid=1.7&rm=3', 
              label: 'Github', 
              value: 'MekiCode', 
              color: 'shadow-gray-500/20', 
              href: '#' 
            }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: i * 0.1 
              }}
              className="group relative flex flex-col items-center"
            >
              <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/[0.03] p-4 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.08] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${item.color} group-hover:shadow-current`}>
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-white/0 opacity-0 blur-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:opacity-100" />
              </div>
              
              <div className="mt-4 flex flex-col items-center opacity-0 transition-all duration-500 group-hover:translate-y-1 group-hover:opacity-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{item.label}</span>
                <span className="mt-1 text-[9px] text-white/20">{item.value}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-8 md:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Nom complet</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="glass rounded-lg px-6 py-4 text-sm outline-none transition-all focus:border-white/30"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Email</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="glass rounded-lg px-6 py-4 text-sm outline-none transition-all focus:border-white/30"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Message</label>
            <textarea 
              rows={5}
              placeholder="Parlez-moi de votre projet..."
              className="glass rounded-lg px-6 py-4 text-sm outline-none transition-all focus:border-white/30 resize-none"
            />
          </div>
          <div className="md:col-span-2">
            <button className="w-full rounded-full bg-white py-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Envoyer le message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
