import { MessageCircle, MapPin, Phone } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5565999191723";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um voo de paramotor.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-6">PRONTO PARA VOAR?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e agende seu voo. 
            Estamos prontos para proporcionar uma experiência única.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-3 text-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp
          </a>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>(65) 99919-1723</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Mato Grosso, Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
