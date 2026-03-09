import { motion } from "framer-motion";
import { CircleDollarSign, Rocket, CheckCircle, Handshake } from "lucide-react";

const steps = [
  {
    icon: Handshake,
    step: "1",
    title: "Discussion & Devis",
    description: "Nous discutons de votre projet et vous recevez un devis détaillé gratuit.",
  },
  {
    icon: CircleDollarSign,
    step: "2",
    title: "Paiement de 50%",
    description: "Vous réglez la moitié du montant pour lancer la création de votre site.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Développement & Validation",
    description: "Nous créons votre site. Vous validez le résultat avant la mise en ligne.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Déploiement & Solde",
    description: "Votre site est mis en ligne, vous réglez les 50% restants. C'est parti !",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="fonctionnement" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Comment ça <span className="text-accent">fonctionne</span> ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Un processus simple et transparent en 4 étapes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold text-accent mb-1">Étape {step.step}</span>
              <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Payment highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 max-w-2xl mx-auto bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center"
        >
          <p className="font-display font-semibold text-lg mb-1">
            💰 Paiement en 2 fois
          </p>
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold text-foreground">50% à la commande</span> pour démarrer le projet —{" "}
            <span className="font-semibold text-foreground">50% à la livraison</span> après validation et mise en ligne.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
