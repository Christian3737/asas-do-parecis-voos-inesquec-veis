import { Award, Users, Compass } from "lucide-react";

const stats = [
  { icon: Award, value: "4+", label: "Anos de experiência" },
  { icon: Users, value: "500+", label: "Voos realizados" },
  { icon: Compass, value: "100%", label: "Segurança" },
];

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Sobre nós</p>
            <h2 className="section-title mb-6">ASAS DO PARECIS</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Somos apaixonados por voar e por compartilhar essa experiência transformadora. 
                A Asas do Parecis nasceu do sonho de proporcionar a sensação única de liberdade 
                que só o voo pode oferecer.
              </p>
              <p>
                Com equipamentos de última geração e total comprometimento com a segurança, 
                garantimos que cada voo seja uma experiência inesquecível. O cerrado mato-grossense 
                visto de cima é simplesmente espetacular.
              </p>
              <p>
                Não importa se você nunca voou antes — cuidamos de tudo para que você 
                apenas aproveite o momento e sinta a liberdade de voar.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-foreground/80" />
                <div className="font-display text-4xl md:text-5xl mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
