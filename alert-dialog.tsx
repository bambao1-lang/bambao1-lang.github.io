import { motion } from "framer-motion";
import { Globe, ShoppingCart, LayoutDashboard, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileText,
    title: "Landing Page",
    description: "Une page percutante pour convertir vos visiteurs en clients.",
    price: "30 000",
    oldPrice: "45 000",
  },
  {
    icon: Globe,
    title: "Site Vitrine",
    description: "Un site élégant pour présenter votre entreprise et vos services.",
    price: "50 000",
    oldPrice: "75 000",
  },
  {
    icon: ShoppingCart,
    title: "Site E-commerce",
    description: "Boutique en ligne complète avec catalogue et paiement intégré.",
    price: "150 000 - 200 000",
    oldPrice: null,
  },
  {
    icon: LayoutDashboard,
    title: "Application Sur Mesure",
    description: "Solution digitale personnalisée : dashboard, SaaS, plateforme…",
    price: "200 000+",
    oldPrice: null,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-accent">Offres</span> à Abidjan
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Création de sites web en Côte d'Ivoire — des solutions adaptées à chaque besoin, à prix promo 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl font-bold text-accent">
                  {service.price} <span className="text-xs">FCFA</span>
                </span>
                {service.oldPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    {service.oldPrice}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
            <Link to="/offres">
              Voir le détail des offres
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
