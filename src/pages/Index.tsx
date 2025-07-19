import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Footer } from "@/components/Footer";
import { PromoBar } from "@/components/PromoBar";

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
      <PromoBar />
      {/* Add padding bottom to account for fixed PromoBar */}
      <div className="h-16"></div>
    </div>
  );
};

export default Index;
