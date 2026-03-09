import { motion } from "framer-motion";
import { Palette, Zap, Users, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Palette,
    title: "Design moderne",
    description: "Des interfaces élégantes et tendance qui reflètent le professionnalisme de votre marque.",
  },
  {
    icon: Zap,
    title: "Site rapide & optimisé",
    description: "Performance optimale sur mobile et desktop pour une expérience utilisateur fluide.",
  },
  {
    icon: Users,
    title: "Marché local",
    description: "Expertise du marché ivoirien et abidjanais pour des solutions digitales adaptées à vos clients locaux.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement",
    description: "Un suivi personnalisé de A à Z, de la conception au lancement et au-delà.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="pourquoi" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Pourquoi <span className="text-accent">nous choisir</span> à Abidjan ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ce qui fait de Digital Rocket votre agence web idéale en Côte d'Ivoire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
