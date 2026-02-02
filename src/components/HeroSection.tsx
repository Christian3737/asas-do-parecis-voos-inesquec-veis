import { Instagram, MessageCircle, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import paramotorHero from "@/assets/paramotor-hero.jpeg";

const HeroSection = () => {
  const whatsappNumber = "5565999191723";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um voo de paramotor.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://instagram.com/asas_do_parecis";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={paramotorHero}
        >
          <source 
            src="https://videos.pexels.com/video-files/857251/857251-hd_1920_1080_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8">
        <div className="container mx-auto flex items-center justify-between">
          <Logo className="animate-fade-in" />
          <div className="flex items-center gap-4 animate-fade-in animate-delay-200">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Agendar</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-foreground/70 mb-4 opacity-0 animate-fade-up">
          Voo de Paramotor em Campo Novo do Parecis
        </p>
        <h1 className="section-title text-6xl md:text-8xl lg:text-9xl mb-6 opacity-0 animate-fade-up animate-delay-100">
          SINTA A LIBERDADE
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animate-delay-200 font-light">
          Viva a experiência única de voar sobre as paisagens do Mato Grosso. 
          Uma aventura inesquecível que vai mudar sua perspectiva.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animate-delay-300">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-hero flex items-center gap-3">
            <MessageCircle className="w-5 h-5" />
            Agendar meu voo
          </a>
          <a href="#experiencia" className="btn-outline-hero">
            Saiba mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in animate-delay-400">
        <a href="#experiencia" className="flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
          <span className="text-sm uppercase tracking-widest">Descubra</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
