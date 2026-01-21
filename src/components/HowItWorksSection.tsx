import { Calendar, MapPin, Plane, Camera } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Agende seu Voo",
    description: "Entre em contato pelo WhatsApp e escolha a melhor data para sua aventura.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Ponto de Encontro",
    description: "Nos encontramos no local de decolagem com todas as instruções de segurança.",
  },
  {
    number: "03",
    icon: Plane,
    title: "Hora de Voar",
    description: "Decole e aproveite a vista panorâmica do cerrado mato-grossense.",
  },
  {
    number: "04",
    icon: Camera,
    title: "Leve a Memória",
    description: "Registre os melhores momentos e compartilhe essa experiência única.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-foreground" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Simples e rápido</p>
          <h2 className="section-title mb-6">COMO FUNCIONA</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}
              
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <span className="font-display text-6xl text-muted/50 absolute -top-4 -left-4">
                    {step.number}
                  </span>
                  <div className="relative z-10 w-20 h-20 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-3 tracking-wide">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
