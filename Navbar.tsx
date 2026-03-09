import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Rocket, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OFFER_END = new Date("2026-06-30T23:59:59");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const HeroSection = () => {
  const countdown = useCountdown(OFFER_END);
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Promo banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-col items-center gap-3 bg-accent/10 border border-accent/30 rounded-2xl px-6 py-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              🎉 Promo lancement — Tous nos services à prix réduit !
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-foreground/70">
            <Clock className="h-3.5 w-3.5 text-accent" />
            <span>Expire dans</span>
            {[
              { value: countdown.days, label: "j" },
              { value: countdown.hours, label: "h" },
              { value: countdown.minutes, label: "m" },
              { value: countdown.seconds, label: "s" },
            ].map((u, i) => (
              <span key={i} className="inline-flex items-baseline gap-0.5">
                <span className="font-display font-bold text-sm text-accent tabular-nums">{String(u.value).padStart(2, "0")}</span>
                <span>{u.label}</span>
                {i < 3 && <span className="text-accent/50 mx-0.5">:</span>}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Boostez votre visibilité{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient">en ligne</span> 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Agence web à Abidjan — nous aidons les entreprises en Côte d'Ivoire à attirer
          plus de clients grâce à des sites web modernes, performants et optimisés pour le SEO local.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base"
          >
            Demander un devis
          </Button>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="rounded-full px-8 text-base"
          >
            <Link to="/offres">
              Voir nos offres
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="bg-whatsapp text-white hover:bg-whatsapp/90 rounded-full px-8 text-base"
          >
            <a
              href="https://wa.me/2250153760391"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
