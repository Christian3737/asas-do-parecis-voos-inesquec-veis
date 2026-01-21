import { Instagram, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const whatsappNumber = "5565991917234";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um voo de paramotor.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://instagram.com/asas_do_parecis";

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          
          <div className="flex items-center gap-6">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@asas_do_parecis</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm mb-2">
            © {new Date().getFullYear()} Asas do Parecis. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido por <span className="text-silver font-medium">Christian Izidoro</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
