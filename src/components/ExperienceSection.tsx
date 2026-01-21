import { Wind, Eye, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Liberdade Total",
    description: "Sinta o vento no rosto enquanto sobrevoa paisagens incríveis do cerrado mato-grossense.",
  },
  {
    icon: Eye,
    title: "Vista Panorâmica",
    description: "Contemple a natureza de um ângulo único, a centenas de metros de altura.",
  },
  {
    icon: Clock,
    title: "Voos Personalizados",
    description: "Duração e trajeto adaptados às suas preferências e condições climáticas.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Equipamentos de última geração e piloto experiente certificado.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">A EXPERIÊNCIA</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O voo de paramotor é uma das formas mais puras de voar. 
            Sem cabine, sem barreiras — apenas você e o céu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-glass p-8 rounded-lg group hover:bg-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-10 h-10 mb-6 text-foreground/80 group-hover:text-foreground transition-colors" />
              <h3 className="font-display text-2xl mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
