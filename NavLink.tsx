import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Digital Rocket" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Agence web à Abidjan spécialisée en création de sites web, e-commerce et SEO local en Côte d'Ivoire.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Liens rapides</h4>
            <div className="flex flex-col gap-2">
              {["#accueil", "#services", "#pourquoi", "#projets", "#contact"].map((href) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors text-left w-fit"
                >
                  {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
                </button>
              ))}
              <Link
                to="/offres"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors text-left w-fit"
              >
                Offres
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <p className="text-sm text-primary-foreground/70 mb-1">Abidjan, Côte d'Ivoire</p>
            <a
              href="https://wa.me/2250153760391"
              className="text-sm text-accent hover:underline"
            >
              +225 01 53 76 03 91
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Digital Rocket. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
