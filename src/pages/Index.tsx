import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <HowItWorksSection />
      <GallerySection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
