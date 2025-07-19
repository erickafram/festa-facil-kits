import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Wrench, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-party-table.jpg";

const benefits = [
  { icon: Truck, text: "Entrega Grátis" },
  { icon: Wrench, text: "Montagem Fácil" },
  { icon: Star, text: "Mais de 50 temas" },
  { icon: Award, text: "Qualidade Premium" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Transforme sua festa em{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  momentos inesquecíveis
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Kits completos Pegue e Monte para decoração de mesa. 
                Prático, bonito e sem complicação!
              </p>
            </div>

            {/* Benefits Badges */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <benefit.icon className="w-4 h-4 mr-2" />
                  {benefit.text}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="animate-bounce-gentle"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver todos os kits
              </Button>
              
              <Button variant="outline" size="lg">
                Falar no WhatsApp
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>500+ festas realizadas</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Mesa decorada com kit de festa"
                className="w-full h-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-bounce-gentle"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};