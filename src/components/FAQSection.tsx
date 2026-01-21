import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência para voar?",
    answer: "Não! O voo de paramotor é em dupla (tandem), onde você voa como passageiro com um piloto experiente. Você não precisa fazer nada, apenas aproveitar a experiência.",
  },
  {
    question: "Qual é a duração do voo?",
    answer: "Os voos têm duração média de 15 a 30 minutos, dependendo das condições climáticas e do pacote escolhido. Esse tempo é suficiente para uma experiência completa e inesquecível.",
  },
  {
    question: "Existe limite de peso?",
    answer: "Sim, por questões de segurança, o peso máximo permitido é de 100kg. Se tiver dúvidas, entre em contato conosco pelo WhatsApp.",
  },
  {
    question: "E se o tempo estiver ruim?",
    answer: "A segurança é nossa prioridade. Se as condições climáticas não forem favoráveis, remarcaremos seu voo para outra data sem custo adicional.",
  },
  {
    question: "Posso levar meu celular/câmera?",
    answer: "Sim, você pode levar seu próprio celular para registrar o voo, desde que esteja bem preso e sob sua responsabilidade. Não nos responsabilizamos por quedas, danos ou perdas do aparelho durante a atividade.\n\nAlém disso, nossa equipe também realiza filmagens do voo, garantindo que você tenha registros seguros e de qualidade dessa experiência única.",
  },
  {
    question: "Como devo me vestir?",
    answer: "Use roupas confortáveis e tênis fechado. Evite sandálias, saltos ou roupas muito soltas. Traga óculos de sol e protetor solar.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Dúvidas</p>
            <h2 className="section-title mb-6">PERGUNTAS FREQUENTES</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-secondary"
              >
                <AccordionTrigger className="text-left font-display text-xl tracking-wide hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
