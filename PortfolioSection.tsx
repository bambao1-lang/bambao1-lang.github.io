import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Veuillez remplir tous les champs", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`Message de ${form.name}`);
    const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:digitalrocket31@gmail.com?subject=${subject}&body=${body}`, "_self");
    toast({ title: "Redirection vers votre messagerie…" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent">Contactez</span>-nous à Abidjan
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Prêt à lancer votre projet web en Côte d'Ivoire ? Parlons-en !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5">
            
            <Input
              placeholder="Votre nom"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-lg" />
            
            <Input
              type="email"
              placeholder="Votre email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg" />
            
            <Textarea
              placeholder="Votre message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-lg" />
            
            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
              
              <Send className="mr-2 h-4 w-4" />
              Envoyer le message
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 justify-center">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Localisation</h3>
                <p className="text-sm text-muted-foreground">Abidjan, Côte d'Ivoire</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">digitalrocket31@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 text-whatsapp" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">WhatsApp</h3>
                <a href="https://wa.me/2250153760391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline">
                  
                  +225 01 53 76 03 91
                </a>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-whatsapp text-white hover:bg-whatsapp/90 rounded-full mt-4 w-fit">
              
              <a
                href="https://wa.me/2250153760391"
                target="_blank"
                rel="noopener noreferrer">
                
                <MessageCircle className="mr-2 h-5 w-5" />
                Discuter sur WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default ContactSection;