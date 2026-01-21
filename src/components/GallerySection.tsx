import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import paramotorHero from "@/assets/paramotor-hero.jpg";

const images = [
  { src: paramotorHero, alt: "Voo de paramotor ao pôr do sol sobre o cerrado" },
  { src: gallery1, alt: "Paramotor sobrevoando lago ao amanhecer" },
  { src: gallery2, alt: "Vista aérea do piloto de paramotor" },
  { src: gallery3, alt: "Pôr do sol visto do paramotor" },
];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Galeria</p>
          <h2 className="section-title mb-6">MOMENTOS NO CÉU</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada voo é uma nova história. Veja alguns dos momentos incríveis 
            que nossos passageiros vivenciaram.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
