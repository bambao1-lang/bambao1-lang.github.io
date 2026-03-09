import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EcoleIvoire",
    category: "Plateforme éducative",
    url: "https://ecoleivoire.online",
    image: "https://api.microlink.io/?url=https://ecoleivoire.online&screenshot=true&meta=false&embed=screenshot.url",
  },
];

const PortfolioSection = () => {
  return (
    <section id="projets" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-accent">Projets</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-primary/5 border border-border cursor-pointer"
            >
              {/* Screenshot */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-primary-foreground">
                <ExternalLink className="h-8 w-8 mb-3" />
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="text-sm opacity-80">{project.category}</p>
              </div>

              {/* Default title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/60 to-transparent group-hover:opacity-0 transition-opacity">
                <h3 className="font-display text-sm font-semibold text-white">{project.title}</h3>
                <p className="text-xs text-white/70">{project.category}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
