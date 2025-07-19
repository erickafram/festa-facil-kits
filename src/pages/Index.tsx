import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
